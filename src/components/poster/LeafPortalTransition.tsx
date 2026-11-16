"use client";

interface LeafPortalTransitionProps {
  onLeafClick: () => void;
  isTriggered: boolean;
}

export function LeafPortalTransition({ onLeafClick, isTriggered }: LeafPortalTransitionProps) {
  // SVG Custom Leaf Cursor (Clean, directly related to the artwork, zero extra text)
  const leafCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='%23f59e0b' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'/><path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'/></svg>") 4 4, pointer`;

  return (
    <div
      style={{
        zIndex: 75,
        top: "44%",
        left: "54%",
        width: "23%",
        height: "23%",
        cursor: leafCursor,
      }}
      onClick={() => {
        if (!isTriggered) onLeafClick();
      }}
      className="absolute select-none rounded-full"
      role="button"
      tabIndex={0}
      aria-label="Autumn leaf portal trigger"
    />
  );
}
