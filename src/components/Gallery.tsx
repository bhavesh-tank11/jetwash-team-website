"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "Roof Cleaning", "Driveway", "Patio", "Pressure Washing", "Commercial"];

const items = [
  { cat: "Roof Cleaning", img: "https://images.unsplash.com/photo-1632759145355-6d4b23e5b4e6?w=700&q=80", tall: true },
  { cat: "Driveway", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80", tall: false },
  { cat: "Patio", img: "https://images.unsplash.com/photo-1595514535215-8f9ab5dfdc90?w=700&q=80", tall: false },
  { cat: "Pressure Washing", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80", tall: true },
  { cat: "Commercial", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80", tall: false },
  { cat: "Driveway", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80", tall: true },
  { cat: "Patio", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", tall: false },
  { cat: "Commercial", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80", tall: false },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="eyebrow">Recent Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">Project Gallery</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === c ? "bg-electric-600 text-white" : "bg-ice-50 text-navy-800 hover:bg-ice-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.img + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className={`relative rounded-2xl overflow-hidden break-inside-avoid group ${item.tall ? "h-96" : "h-64"}`}
            >
              <Image src={item.img} alt={item.cat} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-semibold">{item.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
