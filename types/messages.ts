export interface Messages {
  navigation: {
    home: string
    services: string
    about: string
    contact: string
    graphic_design: string
    prints: string
    website_development: string
    flyer_distribution: string
    market_research: string
    projects: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  about: {
    title: string
    description: string
    mission: string
    vision: string
  }
  services: {
    title: string
    graphic_design: {
      title: string
      description: string
    }
    printing: {
      title: string
      description: string
    }
    web_development: {
      title: string
      description: string
    }
    digital_marketing: {
      title: string
      description: string
    }
    flyer_distribution: {
      title: string
      description: string
    }
    market_research: {
      title: string
      description: string
    }
  }
  contact: {
    title: string
    address: string
    phone: string
    email: string
    form: {
      name: string
      email: string
      message: string
      send: string
      sending: string
      success: string
      error: string
    }
  }
  footer: {
    copyright: string
    rights: string
  }
  seo: {
    home: {
      title: string
      description: string
    }
    about: {
      title: string
      description: string
    }
    services: {
      title: string
      description: string
    }
    contact: {
      title: string
      description: string
    }
  }
  common: {
    loading: string
    error: string
    success: string
    close: string
    cancel: string
    save: string
    edit: string
    delete: string
    view_more: string
    learn_more: string
    read_more: string
    back_to_top: string
    next: string
    previous: string
    page: string
    of: string
    search: string
    search_results: string
    no_results: string
    language: string
  }
}
