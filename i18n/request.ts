import { getRequestConfig } from 'next-intl/server'
import { routing } from '../i18n'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'el' | 'en')) {
    locale = routing.defaultLocale
  }

  // Every namespace under messages/<locale>/. This list MUST stay in sync with
  // the files on disk: a namespace missing here is not a soft failure — pages
  // that call getTranslations('<missing>') silently render the raw key path
  // (e.g. "<title>ektypwseis_arta_page.seo.title</title>"), which destroys the
  // page in search results. Adding a page => add its namespace here.
  const messageFiles = [
    'about_page',
    'accessibility',
    'carousel',
    'common',
    'contact',
    'cookie_policy',
    'custom_web_apps_page',
    'diafimistika_dora_page',
    'diafimistiki_eteria_page',
    'diafimistiki_page',
    'dianomi_fylladion_arta_page',
    'dsa_compliance',
    'e_commerce_page',
    'ektypwseis_arta_page',
    'epigrafes_arta_page',
    'flyer_distribution_page',
    'footer',
    'grafistas_arta_page',
    'graphic_design_guide_page',
    'graphic_design_page',
    'hero',
    'homepage',
    'ilektroniko_prosklitirio_gamou_page',
    'invitations_page',
    'landing_pages_page',
    'maintenance_page',
    'market_research_page',
    'navigation',
    'prints_page',
    'privacy_policy',
    'projects_page',
    'psifiako_prosklitirio_gamou_page',
    'report_content',
    'seo',
    'services',
    'services_page',
    'site_gamou_rsvp_page',
    'technical_seo_page',
    'testimonials',
    'web_apps_page',
    'web_development_arta_page',
    'website_development_page',
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: Record<string, any> = {}
  const missing: string[] = []

  for (const file of messageFiles) {
    try {
      const fileMessages = (await import(`../messages/${locale}/${file}.json`)).default
      messages[file] = fileMessages
    } catch (_error) {
      missing.push(file)
    }
  }

  // Fail loudly outside production so a missing namespace is caught in dev/CI
  // instead of shipping key-strings into <title> and <meta description>.
  if (missing.length > 0) {
    const summary = `Missing message namespaces for locale "${locale}": ${missing.join(', ')}`
    if (process.env.NODE_ENV === 'production') {
      console.error(summary)
    } else {
      throw new Error(summary)
    }
  }

  return {
    locale: locale as string,
    messages
  }
})
