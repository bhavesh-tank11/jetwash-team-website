"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section className="section-pad bg-ice-50">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Customer Reviews</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">
            Trusted By Homeowners &amp; Businesses
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-premium transition-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-electric-500 text-electric-500" />
                ))}
              </div>
              <p className="text-sm text-navy-800/70 leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-electric-600 text-white grid place-items-center text-xs font-semibold">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{r.name}</p>
                  <p className="text-xs text-navy-800/50">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
