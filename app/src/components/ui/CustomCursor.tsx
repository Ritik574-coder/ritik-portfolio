import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target?.closest("button, a, input, textarea, [data-cursor='pointer']")) {
        setCursorType("pointer");
      } else if (target?.closest("[data-cursor='card']")) {
        setCursorType("card");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const updateTrail = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      setTrail({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  const isPointer = cursorType === "pointer";
  const isCard = cursorType === "card";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Center pinpoint dot */}
      <div
        className="fixed rounded-full bg-cyan-400 shadow-[0_0_12px_#00f5ff] transition-transform duration-75"
        style={{
          width: isCard ? "8px" : "6px",
          height: isCard ? "8px" : "6px",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Trailing halo ring */}
      <div
        className="fixed rounded-full border transition-all duration-200 ease-out"
        style={{
          width: isCard ? "64px" : isPointer ? "44px" : "28px",
          height: isCard ? "64px" : isPointer ? "44px" : "28px",
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: "translate(-50%, -50%)",
          borderColor: isCard
            ? "rgba(0, 245, 255, 0.6)"
            : isPointer
            ? "rgba(0, 245, 255, 0.45)"
            : "rgba(0, 245, 255, 0.2)",
          backgroundColor: isCard
            ? "rgba(0, 245, 255, 0.08)"
            : isPointer
            ? "rgba(0, 245, 255, 0.05)"
            : "transparent",
        }}
      >
        {isCard && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
            OPEN
          </span>
        )}
      </div>
    </div>
  );
}
