import type React from "react"

export const WebsiteIllustration: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Website development illustration"
    >
      {/* Browser window */}
      <rect
        x="10"
        y="10"
        width="60"
        height="45"
        rx="3"
        fill="url(#website-gradient)"
        stroke="#01FFFF"
        strokeWidth="1.5"
      />

      {/* Browser header */}
      <rect
        x="10"
        y="10"
        width="60"
        height="8"
        rx="3"
        fill="#01A9FF"
        fillOpacity="0.3"
        stroke="#01FFFF"
        strokeWidth="1.5"
      />

      {/* Browser controls */}
      <circle cx="15" cy="14" r="1.5" fill="#FF4081" />
      <circle cx="20" cy="14" r="1.5" fill="#FFEB3B" />
      <circle cx="25" cy="14" r="1.5" fill="#4CAF50" />

      {/* URL bar */}
      <rect x="30" y="12" width="35" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <circle cx="33" cy="14" r="1" fill="#01FFFF" />

      {/* Website layout */}
      {/* Hero section */}
      <rect x="15" y="22" width="50" height="10" rx="1" fill="#01FFFF" fillOpacity="0.2" />
      <rect x="20" y="24" width="25" height="3" rx="1" fill="white" />
      <rect x="20" y="28" width="15" height="2" rx="1" fill="white" fillOpacity="0.7" />

      {/* Content sections */}
      <rect x="15" y="35" width="15" height="15" rx="1" fill="#01A9FF" fillOpacity="0.3" />
      <rect x="32.5" y="35" width="15" height="15" rx="1" fill="#01A9FF" fillOpacity="0.3" />
      <rect x="50" y="35" width="15" height="15" rx="1" fill="#01A9FF" fillOpacity="0.3" />

      {/* Content details */}
      <rect x="17" y="38" width="11" height="2" rx="1" fill="white" />
      <rect x="17" y="42" width="9" height="2" rx="1" fill="white" fillOpacity="0.7" />
      <rect x="17" y="46" width="7" height="2" rx="1" fill="white" fillOpacity="0.7" />

      <rect x="34.5" y="38" width="11" height="2" rx="1" fill="white" />
      <rect x="34.5" y="42" width="9" height="2" rx="1" fill="white" fillOpacity="0.7" />
      <rect x="34.5" y="46" width="7" height="2" rx="1" fill="white" fillOpacity="0.7" />

      <rect x="52" y="38" width="11" height="2" rx="1" fill="white" />
      <rect x="52" y="42" width="9" height="2" rx="1" fill="white" fillOpacity="0.7" />
      <rect x="52" y="46" width="7" height="2" rx="1" fill="white" fillOpacity="0.7" />

      {/* Code elements */}
      <rect
        x="65"
        y="55"
        width="10"
        height="15"
        rx="1"
        fill="#01FFFF"
        fillOpacity="0.2"
        transform="rotate(-10 65 55)"
      />
      <path d="M67 57 L72 57" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M66 60 L71 60" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M65 63 L70 63" stroke="white" strokeWidth="0.75" strokeLinecap="round" />

      {/* Cursor */}
      <path
        d="M45 30 L48 33 L50 31"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Responsive devices */}
      <rect
        x="5"
        y="55"
        width="15"
        height="20"
        rx="2"
        fill="#01A9FF"
        fillOpacity="0.2"
        stroke="#01FFFF"
        strokeWidth="1"
      />
      <rect x="7" y="58" width="11" height="14" rx="1" fill="#01FFFF" fillOpacity="0.1" />
      <circle cx="12.5" cy="73" r="1" fill="#01FFFF" />

      <rect
        x="25"
        y="60"
        width="25"
        height="15"
        rx="2"
        fill="#01A9FF"
        fillOpacity="0.2"
        stroke="#01FFFF"
        strokeWidth="1"
      />
      <rect x="27" y="62" width="21" height="11" rx="1" fill="#01FFFF" fillOpacity="0.1" />
      <rect x="37" y="74" width="5" height="1" rx="0.5" fill="#01FFFF" />

      <defs>
        <linearGradient id="website-gradient" x1="10" y1="10" x2="70" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01FFFF" stopOpacity="0.2" />
          <stop offset="1" stopColor="#01A9FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)
