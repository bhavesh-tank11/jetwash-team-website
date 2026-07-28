"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numeric, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, numeric, count]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-white">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-pad bg-navy-900">
      <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter value={s.value} />
            <p className="text-white/50 text-sm mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
