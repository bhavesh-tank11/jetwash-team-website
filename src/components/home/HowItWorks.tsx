"use client";

import { motion } from "framer-motion";
import { ClipboardList, SearchCheck, SprayCan, BadgeCheck } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Request Quote", desc: "Tell us about your property and the service you need." },
  { icon: SearchCheck, title: "Free Inspection", desc: "We assess the surface and confirm the right approach." },
  { icon: SprayCan, title: "Professional Cleaning", desc: "Our team carries out the clean with premium equipment." },
  { icon: BadgeCheck, title: "Final Quality Check", desc: "We walk the site with you to confirm you're satisfied." },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-ice-50">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">Our Process</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric-200 via-electric-500 to-electric-200" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-premium grid place-items-center mx-auto mb-5 relative z-10">
                <s.icon className="w-7 h-7 text-electric-600" />
              </div>
              <h3 className="font-display font-semibold text-navy-900">{s.title}</h3>
              <p className="text-sm text-navy-800/60 mt-2 max-w-[220px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
