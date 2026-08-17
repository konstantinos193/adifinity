'use client'

import { useLocale } from './LocaleProvider'

// Import all message files statically for better performance
import enCommon from '../messages/en/common.json'
import elCommon from '../messages/el/common.json'
import enMarketResearchPage from '../messages/en/market_research_page.json'
import elMarketResearchPage from '../messages/el/market_research_page.json'
import enHero from '../messages/en/hero.json'
import elHero from '../messages/el/hero.json'
import enServices from '../messages/en/services.json'
import elServices from '../messages/el/services.json'
import enServicesPage from '../messages/en/services_page.json'
import elServicesPage from '../messages/el/services_page.json'
import enTestimonials from '../messages/en/testimonials.json'
import elTestimonials from '../messages/el/testimonials.json'
import enNavigation from '../messages/en/navigation.json'
import elNavigation from '../messages/el/navigation.json'
import enContact from '../messages/en/contact.json'
import elContact from '../messages/el/contact.json'
import enDsaCompliance from '../messages/en/dsa_compliance.json'
import elDsaCompliance from '../messages/el/dsa_compliance.json'
import enReportContent from '../messages/en/report_content.json'
import elReportContent from '../messages/el/report_content.json'
import enAccessibility from '../messages/en/accessibility.json'
import elAccessibility from '../messages/el/accessibility.json'
import enCarousel from '../messages/en/carousel.json'
import elCarousel from '../messages/el/carousel.json'
import enGraphicDesignPage from '../messages/en/graphic_design_page.json'
import elGraphicDesignPage from '../messages/el/graphic_design_page.json'
import enFlyerDistributionPage from '../messages/en/flyer_distribution_page.json'
import elFlyerDistributionPage from '../messages/el/flyer_distribution_page.json'
import enWebsiteDevelopmentPage from '../messages/en/website_development_page.json'
import elWebsiteDevelopmentPage from '../messages/el/website_development_page.json'
import enECommercePage from '../messages/en/e_commerce_page.json'
import elECommercePage from '../messages/el/e_commerce_page.json'
import enCustomWebAppsPage from '../messages/en/custom_web_apps_page.json'
import elCustomWebAppsPage from '../messages/el/custom_web_apps_page.json'
import enLandingPagesPage from '../messages/en/landing_pages_page.json'
import elLandingPagesPage from '../messages/el/landing_pages_page.json'
import enWebAppsPage from '../messages/en/web_apps_page.json'
import elWebAppsPage from '../messages/el/web_apps_page.json'
import enTechnicalSeoPage from '../messages/en/technical_seo_page.json'
import elTechnicalSeoPage from '../messages/el/technical_seo_page.json'
import enMaintenancePage from '../messages/en/maintenance_page.json'
import elMaintenancePage from '../messages/el/maintenance_page.json'
import enAboutPage from '../messages/en/about_page.json'
import elAboutPage from '../messages/el/about_page.json'
import enPrivacyPolicy from '../messages/en/privacy_policy.json'
import elPrivacyPolicy from '../messages/el/privacy_policy.json'
import enCookiePolicy from '../messages/en/cookie_policy.json'
import elCookiePolicy from '../messages/el/cookie_policy.json'
import enHomepage from '../messages/en/homepage.json'
import elHomepage from '../messages/el/homepage.json'
import enPrintsPage from '../messages/en/prints_page.json'
import elPrintsPage from '../messages/el/prints_page.json'
import enInvitationsPage from '../messages/en/invitations_page.json'
import elInvitationsPage from '../messages/el/invitations_page.json'
import enProjectsPage from '../messages/en/projects_page.json'
import elProjectsPage from '../messages/el/projects_page.json'
import enSeo from '../messages/en/seo.json'
import elSeo from '../messages/el/seo.json'
import enDiafimistikaDoraPage from '../messages/en/diafimistika_dora_page.json'
import elDiafimistikaDoraPage from '../messages/el/diafimistika_dora_page.json'
import enPsifiakoProsklitirioGamouPage from '../messages/en/psifiako_prosklitirio_gamou_page.json'
import elPsifiakoProsklitirioGamouPage from '../messages/el/psifiako_prosklitirio_gamou_page.json'
import enDiafimistikiEteriaPage from '../messages/en/diafimistiki_eteria_page.json'
import elDiafimistikiEteriaPage from '../messages/el/diafimistiki_eteria_page.json'
import enDiafimistikiPage from '../messages/en/diafimistiki_page.json'
import elDiafimistikiPage from '../messages/el/diafimistiki_page.json'
import enDianomiFylladionArtaPage from '../messages/en/dianomi_fylladion_arta_page.json'
import elDianomiFylladionArtaPage from '../messages/el/dianomi_fylladion_arta_page.json'
import enSiteGamouRsvpPage from '../messages/en/site_gamou_rsvp_page.json'
import elSiteGamouRsvpPage from '../messages/el/site_gamou_rsvp_page.json'
import enEktypwseisArtaPage from '../messages/en/ektypwseis_arta_page.json'
import elEktypwseisArtaPage from '../messages/el/ektypwseis_arta_page.json'
import enEpigrafesArtaPage from '../messages/en/epigrafes_arta_page.json'
import elEpigrafesArtaPage from '../messages/el/epigrafes_arta_page.json'
import enGrafistasArtaPage from '../messages/en/grafistas_arta_page.json'
import elGrafistasArtaPage from '../messages/el/grafistas_arta_page.json'
import enWebDevelopmentArtaPage from '../messages/en/web_development_arta_page.json'
import elWebDevelopmentArtaPage from '../messages/el/web_development_arta_page.json'
import enGraphicDesignGuidePage from '../messages/en/graphic_design_guide_page.json'
import elGraphicDesignGuidePage from '../messages/el/graphic_design_guide_page.json'
import enIlektronikoProsklitirioGamouPage from '../messages/en/ilektroniko_prosklitirio_gamou_page.json'
import elIlektronikoProsklitirioGamouPage from '../messages/el/ilektroniko_prosklitirio_gamou_page.json'
import enDigitalMarketingPage from '../messages/en/digital_marketing_page.json'
import elDigitalMarketingPage from '../messages/el/digital_marketing_page.json'
import enBrandingPage from '../messages/en/branding_page.json'
import elBrandingPage from '../messages/el/branding_page.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const messageCache: Record<string, Record<string, any>> = {
  en: {
    common: enCommon,
    market_research_page: enMarketResearchPage,
    hero: enHero,
    services: enServices,
    services_page: enServicesPage,
    testimonials: enTestimonials,
    navigation: enNavigation,
    contact: enContact,
    dsa_compliance: enDsaCompliance,
    report_content: enReportContent,
    accessibility: enAccessibility,
    carousel: enCarousel,
    graphic_design_page: enGraphicDesignPage,
    flyer_distribution_page: enFlyerDistributionPage,
    website_development_page: enWebsiteDevelopmentPage,
    e_commerce_page: enECommercePage,
    custom_web_apps_page: enCustomWebAppsPage,
    landing_pages_page: enLandingPagesPage,
    web_apps_page: enWebAppsPage,
    technical_seo_page: enTechnicalSeoPage,
    maintenance_page: enMaintenancePage,
    about_page: enAboutPage,
    privacy_policy: enPrivacyPolicy,
    cookie_policy: enCookiePolicy,
    homepage: enHomepage,
    prints_page: enPrintsPage,
    invitations_page: enInvitationsPage,
    projects_page: enProjectsPage,
    seo: enSeo,
    diafimistika_dora_page: enDiafimistikaDoraPage,
    psifiako_prosklitirio_gamou_page: enPsifiakoProsklitirioGamouPage,
    diafimistiki_eteria_page: enDiafimistikiEteriaPage,
    diafimistiki_page: enDiafimistikiPage,
    dianomi_fylladion_arta_page: enDianomiFylladionArtaPage,
    site_gamou_rsvp_page: enSiteGamouRsvpPage,
    ektypwseis_arta_page: enEktypwseisArtaPage,
    epigrafes_arta_page: enEpigrafesArtaPage,
    grafistas_arta_page: enGrafistasArtaPage,
    web_development_arta_page: enWebDevelopmentArtaPage,
    graphic_design_guide_page: enGraphicDesignGuidePage,
    ilektroniko_prosklitirio_gamou_page: enIlektronikoProsklitirioGamouPage,
    digital_marketing_page: enDigitalMarketingPage,
    branding_page: enBrandingPage,
  },
  el: {
    common: elCommon,
    market_research_page: elMarketResearchPage,
    hero: elHero,
    services: elServices,
    services_page: elServicesPage,
    testimonials: elTestimonials,
    navigation: elNavigation,
    contact: elContact,
    dsa_compliance: elDsaCompliance,
    report_content: elReportContent,
    accessibility: elAccessibility,
    carousel: elCarousel,
    graphic_design_page: elGraphicDesignPage,
    flyer_distribution_page: elFlyerDistributionPage,
    website_development_page: elWebsiteDevelopmentPage,
    e_commerce_page: elECommercePage,
    custom_web_apps_page: elCustomWebAppsPage,
    landing_pages_page: elLandingPagesPage,
    web_apps_page: elWebAppsPage,
    technical_seo_page: elTechnicalSeoPage,
    maintenance_page: elMaintenancePage,
    about_page: elAboutPage,
    privacy_policy: elPrivacyPolicy,
    cookie_policy: elCookiePolicy,
    homepage: elHomepage,
    prints_page: elPrintsPage,
    invitations_page: elInvitationsPage,
    projects_page: elProjectsPage,
    seo: elSeo,
    diafimistika_dora_page: elDiafimistikaDoraPage,
    psifiako_prosklitirio_gamou_page: elPsifiakoProsklitirioGamouPage,
    diafimistiki_eteria_page: elDiafimistikiEteriaPage,
    diafimistiki_page: elDiafimistikiPage,
    dianomi_fylladion_arta_page: elDianomiFylladionArtaPage,
    site_gamou_rsvp_page: elSiteGamouRsvpPage,
    ektypwseis_arta_page: elEktypwseisArtaPage,
    epigrafes_arta_page: elEpigrafesArtaPage,
    grafistas_arta_page: elGrafistasArtaPage,
    web_development_arta_page: elWebDevelopmentArtaPage,
    graphic_design_guide_page: elGraphicDesignGuidePage,
    ilektroniko_prosklitirio_gamou_page: elIlektronikoProsklitirioGamouPage,
    digital_marketing_page: elDigitalMarketingPage,
    branding_page: elBrandingPage,
  }
}

// t() returns the key itself when a translation is missing, so casting its
// result straight to an array crashes the render. Use this instead.
export function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : []
}

export function useTranslations() {
  const { locale, isReady } = useLocale()
  
  const getMessages = (section: string) => {
    try {
      return messageCache[locale]?.[section] || {}
    } catch (error) {
      console.error(`Failed to load ${section} messages`, error)
      return {}
    }
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (key: string): any => {
    // Handle keys that don't start with a section name (like 'footer.quick_links.links')
    // by defaulting to the 'common' section
    let section = 'common'
    let rest = key.split('.')
    
    // Check if the first part is a valid section
    const firstPart = rest[0]
    if (messageCache[locale]?.[firstPart]) {
      section = firstPart
      rest = rest.slice(1)
    }
    
    const messages = getMessages(section)
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = messages
    for (const k of rest) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return result || key
  }

  return { t, locale, isReady }
}
