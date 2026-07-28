"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Cpu, Wallet, Zap, ShieldCheck, Star } from "lucide-react";

const points = [
  { icon: Award, title: "Experienced Technicians", desc: "Trained specialists with years of hands-on expertise." },
  { icon: Cpu, title: "Latest Equipment", desc: "Commercial-grade machinery for superior results." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, competitive quotes with no hidden fees." },
  { icon: Zap, title: "Fast Response", desc: "Quotes turned around quickly, jobs completed on schedule." },
  { icon: ShieldCheck, title: "Safe Cleaning Methods", desc: "Surface-appropriate techniques that protect your property." },
  { icon: Star, title: "5-Star Customer Service", desc: "Consistently rated excellent by homeowners and businesses." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-spray-radial opacity-40" />
      <div className="container-max grid lg:grid-cols-2 gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden h-[420px] shadow-premium"
        >
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80"
            alt="Technician pressure washing a driveway"
            fill
            className="object-cover"
          />
        </motion.div>

        <div>
          <span className="eyebrow text-electric-400">Why Choose Us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 mb-8">
            The Difference Is In The Detail
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-3.5"
              >
                <p.icon className="w-5 h-5 text-electric-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
