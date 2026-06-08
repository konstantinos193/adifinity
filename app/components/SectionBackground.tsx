"use client"

/**
 * Shared decorative background pattern used across homepage sections.
 * Renders the cyan grid, top/bottom gradient lines, and an ambient glow.
 *
 * Usage: place inside a `relative overflow-hidden` section and make sure the
 * section's own content sits in a wrapper with `relative z-10`.
 */
export default function SectionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top / bottom gradient lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
    </div>
  )
}
