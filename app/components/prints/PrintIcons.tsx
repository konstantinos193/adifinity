export const PrinterIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <path d="M6 18H18V21H6V18Z" fill="currentColor" fillOpacity="0.2" />
      <rect x="6" y="18" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8H20V18H4V8Z" fill="currentColor" fillOpacity="0.2" />
      <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V4H16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="14" width="8" height="4" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="11" r="1" fill="white" />
      <circle cx="14" cy="11" r="1" fill="white" />
    </svg>
  </div>
)

export const PremiumIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      {/* Box base */}
      <rect x="5" y="8" width="14" height="12" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Lid */}
      <rect x="4" y="5" width="16" height="4" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />

      {/* Ribbon vertical */}
      <line x1="12" y1="5" x2="12" y2="20" stroke="currentColor" strokeWidth="0.75" />
      
      {/* Ribbon bow */}
      <path d="M10 5C9.5 4 8 3.5 7 4.5C6 5.5 6.5 7 8 7L10 5Z" fill="white" stroke="currentColor" strokeWidth="0.75" />
      <path d="M14 5C14.5 4 16 3.5 17 4.5C18 5.5 17.5 7 16 7L14 5Z" fill="white" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  </div>
)

export const PackageIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      {/* Envelope base */}
      <rect x="3" y="6" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Envelope flap */}
      <path d="M3 6 L12 13 L21 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Seal/stamp */}
      <circle cx="12" cy="13" r="2" fill="white" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="13" r="1" fill="#01A9FF" />
    </svg>
  </div>
)

export const QualityIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      {/* Shield base */}
      <path d="M12 2L4 7V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V7L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Check mark */}
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export const SpeedIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      {/* Clock base */}
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Clock hands */}
      <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      
      {/* Speed lines */}
      <line x1="18" y1="6" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="9" x2="21" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export const EcoIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      {/* Leaf */}
      <path d="M12 2C12 2 8 6 8 11C8 14 9.5 16 12 16C14.5 16 16 14 16 11C16 6 12 2 12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Leaf vein */}
      <line x1="12" y1="4" x2="12" y2="14" stroke="currentColor" strokeWidth="1" />
      
      {/* Small leaves */}
      <path d="M8 18C8 18 6 20 6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18C16 18 18 20 18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)
