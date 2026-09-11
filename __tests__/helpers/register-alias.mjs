/**
 * Entry point for `node --import`. Registers the resolver in alias-loader.mjs
 * so the tests can import project modules exactly as the app does.
 */
import { register } from 'node:module'

register('./alias-loader.mjs', import.meta.url)
