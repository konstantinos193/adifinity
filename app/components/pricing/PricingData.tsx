export const categories = [
  { id: "websites", label: "Ιστοσελίδες", icon: "Globe" },
  { id: "design", label: "Γραφικές Τέχνες", icon: "Palette" },
  { id: "prints", label: "Εκτυπώσεις", icon: "Printer" },
  { id: "distribution", label: "Έντυποδιανομές", icon: "MapPin" },
  { id: "research", label: "Έρευνα Αγοράς", icon: "BarChart2" },
]

export const pricingData: Record<
  string,
  {
    plans: {
      name: string
      price: string
      period?: string
      description: string
      features: string[]
      popular?: boolean
      cta: string
    }[]
  }
> = {
  websites: {
    plans: [
      {
        name: "Starter",
        price: "€XXX",
        description: "Ιδανικό για επαγγελματίες και μικρές επιχειρήσεις",
        features: [
          "Landing page έως 5 ενότητες",
          "Responsive design (mobile-friendly)",
          "Βασικό SEO on-page",
          "Φόρμα επικοινωνίας",
          "SSL πιστοποιητικό",
          "1 μήνας τεχνική υποστήριξη",
        ],
        cta: "Ξεκινήστε",
      },
      {
        name: "Business",
        price: "€XXX",
        description: "Πλήρης εταιρική παρουσία με προηγμένες λειτουργίες",
        features: [
          "Multi-page website έως 15 σελίδες",
          "Custom design & branding",
          "Προηγμένο SEO & Analytics",
          "Blog σύστημα",
          "Galleries & portfolios",
          "Contact forms & maps",
          "Social media integration",
          "3 μήνες υποστήριξη",
        ],
        cta: "Επιλέξτε",
      },
      {
        name: "Enterprise",
        price: "€XXX",
        description: "Πλήρης ψηφιακή λύση για μεγάλες επιχειρήσεις",
        features: [
          "Unlimited pages & content",
          "E-shop integration",
          "Custom functionality",
          "Database systems",
          "User authentication",
          "API integrations",
          "Performance optimization",
          "6 μήνες υποστήριξη & maintenance",
        ],
        popular: true,
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  design: {
    plans: [
      {
        name: "Basic",
        price: "€XXX",
        description: "Βασικά γραφικά για καθημερινές ανάγκες",
        features: [
          "Logo design (2 concepts)",
          "Business cards",
          "Letterhead design",
          "Social media graphics",
          "PDF files για εκτύπωση",
        ],
        cta: "Ξεκινήστε",
      },
      {
        name: "Professional",
        price: "€XXX",
        description: "Πλήρης εταιρική ταυτότητα",
        features: [
          "Logo design (5 concepts)",
          "Full brand identity",
          "Business cards & letterhead",
          "Brochures & flyers",
          "Social media templates",
          "Brand guidelines",
          "All source files",
        ],
        popular: true,
        cta: "Επιλέξτε",
      },
      {
        name: "Premium",
        price: "€XXX",
        description: "Ολοκληρωμένη branding λύση",
        features: [
          "Unlimited logo concepts",
          "Complete brand system",
          "Marketing materials",
          "Packaging design",
          "Web graphics",
          "Brand strategy consultation",
          "Lifetime support",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  prints: {
    plans: [
      {
        name: "Digital",
        price: "€XXX",
        description: "Ψηφιακές εκτυπώσεις μικρών ποσοτήτων",
        features: [
          "Digital printing",
          "Various paper types",
          "Fast turnaround (24-48h)",
          "Small quantities (50-500)",
          "High quality resolution",
        ],
        cta: "Παραγγείλετε",
      },
      {
        name: "Offset",
        price: "€XXX",
        description: "Οικονομικές εκτυπώσεις για μεγάλες ποσότητες",
        features: [
          "Offset printing",
          "Cost-effective for bulk",
          "Various formats",
          "Large quantities (500+)",
          "Consistent quality",
        ],
        cta: "Παραγγείλετε",
      },
      {
        name: "Premium",
        price: "€XXX",
        description: "Ειδικές εκτυπώσεις και premium φινίρισμα",
        features: [
          "Special printing techniques",
          "Embossing & foil stamping",
          "Premium papers",
          "Custom finishes",
          "Expert consultation",
        ],
        popular: true,
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  distribution: {
    plans: [
      {
        name: "Basic",
        price: "€XXX",
        description: "Τοπική διανομή σε Άρτα και surrounding areas",
        features: [
          "Local distribution",
          "Up to 1,000 flyers",
          "Door-to-door delivery",
          "Basic reporting",
          "2-3 days delivery",
        ],
        cta: "Ξεκινήστε",
      },
      {
        name: "Regional",
        price: "€XXX",
        description: "Ευρύτερη διανομή σε όλη την Ήπειρο",
        features: [
          "Regional coverage",
          "Up to 5,000 flyers",
          "Strategic locations",
          "Detailed reporting",
          "GPS tracking",
          "Professional staff",
        ],
        popular: true,
        cta: "Επιλέξτε",
      },
      {
        name: "National",
        price: "€XXX",
        description: "Εθνική διανομή σε όλη την Ελλάδα",
        features: [
          "Nationwide distribution",
          "Unlimited quantity",
          "Major cities coverage",
          "Advanced analytics",
          "Dedicated account manager",
          "Custom scheduling",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  research: {
    plans: [
      {
        name: "Basic",
        price: "€XXX",
        description: "Βασική έρευνα αγοράς για μικρές επιχειρήσεις",
        features: [
          "Market overview",
          "Competitor analysis (3 competitors)",
          "Basic demographics",
          "SWOT analysis",
          "15-page report",
        ],
        cta: "Ξεκινήστε",
      },
      {
        name: "Comprehensive",
        price: "€XXX",
        description: "Ανάλυση αγοράς για μεσαίες επιχειρήσεις",
        features: [
          "Detailed market analysis",
          "Competitor analysis (5+ competitors)",
          "Customer surveys",
          "Trend analysis",
          "30-page report",
          "Recommendations",
          "Presentation",
        ],
        popular: true,
        cta: "Επιλέξτε",
      },
      {
        name: "Strategic",
        price: "€XXX",
        description: "Στρατηγική έρευνα για μεγάλες επιχειρήσεις",
        features: [
          "Full market research",
          "Industry analysis",
          "Customer segmentation",
          "Predictive analytics",
          "50+ page detailed report",
          "Strategy recommendations",
          "Ongoing consultation",
          "Data visualization",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
}
