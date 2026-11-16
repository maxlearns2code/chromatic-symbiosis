"use client";

export function TypographyOverlay() {
  return (
    <div
      style={{ zIndex: 70 }}
      className="absolute top-[4.5%] left-[4.5%] w-[56%] max-w-[56%] pointer-events-none select-none flex flex-col"
    >
      {/* Title: CHROMATIC */}
      <h1
        className="text-white uppercase leading-[0.84] tracking-[0.01em] font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,1)]"
        style={{
          fontFamily: "'Bebas Neue', Impact, 'Arial Narrow Bold', sans-serif",
          fontSize: "clamp(38px, 11vw, 76px)",
          letterSpacing: "0.02em",
          color: "#ffffff",
        }}
      >
        CHROMATIC
      </h1>

      {/* Title: SYMBIOSIS */}
      <h1
        className="text-white uppercase leading-[0.84] tracking-[0.01em] font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,1)]"
        style={{
          fontFamily: "'Bebas Neue', Impact, 'Arial Narrow Bold', sans-serif",
          fontSize: "clamp(38px, 11vw, 76px)",
          letterSpacing: "0.02em",
          color: "#ffffff",
        }}
      >
        SYMBIOSIS
      </h1>

      {/* Subtitle / Tagline */}
      <p
        className="mt-2 text-white uppercase font-black tracking-[-0.01em] leading-[1.15] max-w-[96%] drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
        style={{
          fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: "clamp(8px, 1.8vw, 12.5px)",
          color: "#ffffff",
          fontWeight: 900,
        }}
      >
        TO UNLOCK THE PORTAL TO A NEW WORLD, A FATHER MUST GUIDE HIS SONS THROUGH THE MYSTERY OF LIGHT.
      </p>
    </div>
  );
}
