/**
 * Module resolver for `node --test`.
 *
 * The tests run on Node's built-in type stripping, no bundler. Two things the
 * app relies on therefore need help here:
 *
 *  1. the `@/` path alias from tsconfig.json (`@/lib/projects`);
 *  2. extensionless relative imports (`../proxy`), which Node ESM refuses.
 *
 * Both are resolved against the repository root, trying the same extensions
 * Next.js would. JSON files are returned with the `type: 'json'` import
 * attribute Node requires, so `app/data/projects.json` loads the way it does
 * under webpack.
 */
import { existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const EXTENSIONS = ['.ts', '.tsx', '.mts', '.js', '.mjs', '.json']

const isFile = (p) => existsSync(p) && statSync(p).isFile()

/** Returns the on-disk file a bare or extensionless path refers to, or null. */
function locate(base) {
  const candidates = [
    base,
    ...EXTENSIONS.map((ext) => base + ext),
    ...EXTENSIONS.map((ext) => path.join(base, `index${ext}`)),
  ]
  return candidates.find(isFile) ?? null
}

export async function resolve(specifier, context, nextResolve) {
  let base = null

  if (specifier.startsWith('@/')) {
    base = path.join(ROOT, specifier.slice(2))
  } else if ((specifier.startsWith('./') || specifier.startsWith('../')) && context.parentURL) {
    base = fileURLToPath(new URL(specifier, context.parentURL))
  }

  if (base) {
    const found = locate(base)
    if (found) {
      const url = pathToFileURL(found).href
      if (found.endsWith('.json')) {
        return { url, format: 'json', importAttributes: { type: 'json' }, shortCircuit: true }
      }
      return nextResolve(url, context)
    }
  }

  try {
    return await nextResolve(specifier, context)
  } catch (error) {
    // `next` ships no `exports` map, so `next/server` only resolves under a
    // bundler. Retry bare package subpaths with an explicit extension.
    if (error?.code === 'ERR_MODULE_NOT_FOUND' && /^[@a-z][^:]*\/./i.test(specifier)) {
      for (const ext of ['.js', '.mjs', '.cjs']) {
        try {
          return await nextResolve(specifier + ext, context)
        } catch {
          /* try the next extension */
        }
      }
    }
    throw error
  }
}
