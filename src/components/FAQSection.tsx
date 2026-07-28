"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-pad bg-ice-50">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-12">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="bg-white rounded-2xl overflow-hidden border border-ice-100">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy-900 text-sm md:text-base">{f.q}</span>
                  <Plus className={`w-5 h-5 text-electric-600 shrink-0 transition-transform ${open ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-navy-800/60 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
