import type React from "react"

interface IconProps {
  className?: string
}

// Door-to-door distribution icon
export const DoorToDoorIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Door to door distribution icon"
  >
    {/* House outline */}
    <path
      d="M32 10L54 28V54H10V28L32 10Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    
    {/* Door */}
    <rect x="26" y="36" width="12" height="18" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Doorknob */}
    <circle cx="34" cy="45" r="1.5" fill="currentColor" />
    
    {/* Roof */}
    <path d="M8 28L32 8L56 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Windows */}
    <rect x="16" y="32" width="6" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="42" y="32" width="6" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    
    {/* Flyer */}
    <rect x="22" y="30" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" transform="rotate(-15 22 30)" />
    
    {/* Path to door */}
    <path d="M32 54V58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1" />
  </svg>
)

// Business distribution icon
export const BusinessDistributionIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Business distribution icon"
  >
    {/* Building outline */}
    <rect
      x="12"
      y="14"
      width="40"
      height="44"
      rx="2"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Windows grid */}
    <rect x="18" y="20" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="38" y="20" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="18" y="32" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="38" y="32" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="18" y="44" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    
    {/* Door */}
    <rect x="28" y="44" width="8" height="14" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Flyer stack at entrance */}
    <rect x="38" y="44" width="8" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Business sign */}
    <rect x="24" y="8" width="16" height="6" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

// Targeted distribution icon
export const TargetedDistributionIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Targeted distribution icon"
  >
    {/* Target circles */}
    <circle cx="32" cy="32" r="24" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="16" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
    
    {/* Crosshair lines */}
    <path d="M32 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 48V56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M56 32H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 32H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Flyer */}
    <rect x="44" y="20" width="10" height="8" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" transform="rotate(15 44 20)" />
  </svg>
)

// Feature icons for the "Why Choose Us" section
export const StrategicPlanningIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Strategy board */}
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Strategy elements */}
    <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Pins/markers */}
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </svg>
)

export const ReportingIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Report document */}
    <rect
      x="4"
      y="2"
      width="16"
      height="20"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Chart elements */}
    <path d="M8 10L10 8L14 12L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Report lines */}
    <path d="M8 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 19H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const ProfessionalTeamIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Team outline */}
    <circle cx="12" cy="8" r="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 19C20 15.134 16.418 12 12 12C7.582 12 4 15.134 4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Additional team members */}
    <circle cx="19" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
    <circle cx="5" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export const CombinedServicesIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Printing element */}
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Paper */}
    <rect x="8" y="2" width="8" height="4" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    <rect x="8" y="18" width="8" height="4" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
    
    {/* Connection lines */}
    <path d="M12 6V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
    <path d="M12 18V22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
    
    {/* Control buttons */}
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
  </svg>
)
