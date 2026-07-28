"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="rounded-3xl overflow-hidden shadow-premium">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] select-none cursor-ew-resize"
        onMouseDown={() => (dragging.current = true)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onMouseMove={(e) => dragging.current && updatePos(e.clientX)}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      >
        <Image src={after} alt={`${label} after cleaning`} fill className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}>
          <Image src={before} alt={`${label} before cleaning`} fill className="object-cover" />
        </div>

        <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${pos}%` }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-premium grid place-items-center"
          style={{ left: `${pos}%` }}
        >
          <MoveHorizontal className="w-4 h-4 text-navy-900" />
        </div>

        <span className="absolute top-4 left-4 text-xs font-semibold bg-navy-900/70 text-white px-3 py-1 rounded-full backdrop-blur">
          Before
        </span>
        <span className="absolute top-4 right-4 text-xs font-semibold bg-electric-600 text-white px-3 py-1 rounded-full">
          After
        </span>
      </div>
      <div className="bg-white px-5 py-3 text-sm font-semibold text-navy-900">{label}</div>
    </div>
  );
}
