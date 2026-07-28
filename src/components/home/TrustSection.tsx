"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Leaf, Users, ThumbsUp, FileCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Wrench, label: "Professional Equipment" },
  { icon: Leaf, label: "Eco Friendly Cleaning" },
  { icon: Users, label: "Experienced Team" },
  { icon: ThumbsUp, label: "100% Satisfaction" },
  { icon: FileCheck, label: "Free Quotes" },
];

export default function TrustSection() {
  return (
    <section className="section-pad bg-ice-50">
      <div className="container-max grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all"
          >
            <item.icon className="w-7 h-7 text-electric-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-navy-900">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
