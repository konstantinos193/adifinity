import http from 'node:http'

const baseUrl = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')

function requestText(url) {
  return new Promise((resolve, reject) => {
    const request = http.get(url, {
      headers: {
        host: 'adinfinity.gr',
        'x-forwarded-proto': 'https',
      },
    }, (response) => {
      let body = ''
      response.setEncoding('utf8')
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => resolve({
        body,
        ok: response.statusCode >= 200 && response.statusCode < 300,
        status: response.statusCode,
      }))
    })
    request.on('error', reject)
  })
}

const sitemapResponse = await requestText(`${baseUrl}/sitemap.xml`)
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned ${sitemapResponse.status}`)
}

const sitemapXml = sitemapResponse.body
const productionUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
const duplicateUrls = productionUrls.filter((url, index) => productionUrls.indexOf(url) !== index)

if (productionUrls.length === 0) {
  throw new Error('Sitemap contains no URLs')
}

if (duplicateUrls.length > 0) {
  throw new Error(`Sitemap contains duplicate URLs: ${[...new Set(duplicateUrls)].join(', ')}`)
}

const failures = []

for (const productionUrl of productionUrls) {
  const production = new URL(productionUrl)
  const auditUrl = `${baseUrl}${production.pathname}`
  const response = await requestText(auditUrl)
  const html = response.body
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
  const titles = html.match(/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/gi) ?? []
  const h1s = html.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/gi) ?? []
  const hreflangs = html.match(/<link[^>]+hreflang=/gi) ?? []
  const normalizeCanonical = (url) => url === 'https://adinfinity.gr/' ? 'https://adinfinity.gr' : url.replace(/\/$/, '')
  const expectedCanonical = normalizeCanonical(productionUrl)

  if (!response.ok) failures.push(`${production.pathname}: HTTP ${response.status}`)
  if (normalizeCanonical(canonical || '') !== expectedCanonical) {
    failures.push(`${production.pathname}: canonical ${canonical || 'missing'} (expected ${expectedCanonical})`)
  }
  if (titles.length !== 1) failures.push(`${production.pathname}: ${titles.length} title elements`)
  if (h1s.length !== 1) failures.push(`${production.pathname}: ${h1s.length} H1 elements`)
  if (hreflangs.length > 0) failures.push(`${production.pathname}: unexpected hreflang output`)
}

if (failures.length > 0) {
  console.error(`SEO audit failed with ${failures.length} issue(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

// eslint-disable-next-line no-console
console.log(`SEO audit passed for ${productionUrls.length} sitemap URLs at ${baseUrl}`)
