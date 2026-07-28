"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">What We Do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">
            Complete Exterior Cleaning Services
          </h2>
          <p className="text-navy-800/60 mt-4">
            From driveways to rooftops, our specialist teams handle every exterior surface with
            precision equipment and proven techniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-white border border-ice-100 shadow-sm hover:shadow-premium transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-navy-900">{s.title}</h3>
                <p className="text-sm text-navy-800/60 mt-2 leading-relaxed">{s.desc}</p>
                <Link
                  href={`/services#${s.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 mt-4 group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
