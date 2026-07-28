"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/data";

export default function ServiceAreas() {
  return (
    <section className="section-pad">
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Coverage</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4 mb-4">
            Proudly Serving Areas Nationwide
          </h2>
          <p className="text-navy-800/60 mb-8">
            Our mobile teams are dispatched from regional hubs, so most jobs can be booked within days.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {cities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2.5 bg-ice-50 rounded-xl px-4 py-3"
              >
                <MapPin className="w-4 h-4 text-electric-600 shrink-0" />
                <span className="text-sm font-medium text-navy-900">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[420px] bg-navy-900 shadow-premium grid place-items-center">
          <div className="absolute inset-0 bg-spray-radial opacity-60" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "linear-gradient(rgba(94,200,242,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(94,200,242,0.4) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />
          <div className="relative text-center">
            <MapPin className="w-10 h-10 text-electric-400 mx-auto mb-3 animate-float" />
            <p className="text-white font-display font-semibold">Nationwide Coverage Map</p>
            <p className="text-white/50 text-sm mt-1">Interactive map loads on live site</p>
          </div>
        </div>
      </div>
    </section>
  );
}
