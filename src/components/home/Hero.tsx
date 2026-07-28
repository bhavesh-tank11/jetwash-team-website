"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

export default function Hero() {
  return (
    <section className="relative bg-wash-gradient overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-spray-radial" />

      {/* Premium Watermark Logo */}
      <Image
        src="/jetwash.png"
        alt="Jet Wash Team"
        width={850}
        height={850}
        priority
        className="
          absolute
          right-[-220px]
          top-1/2
          -translate-y-1/2
          opacity-[0.10]
          pointer-events-none
          select-none
          object-contain
          rotate-[12deg]
          hidden lg:block
        "
      />

      {/* Decorative Water Droplets */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {[10, 25, 42, 58, 74, 90].map((left, i) => (
          <span
            key={left}
            className="absolute w-[2px] h-10 bg-gradient-to-b from-electric-400/70 to-transparent rounded-full animate-droplet"
            style={{
              left: `${left}%`,
              top: "-20px",
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-max relative z-10 px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow text-electric-400 bg-white/10 px-3 py-1 rounded-full">
            Fully Insured • 15+ Years Experience
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mt-6 leading-[1.08]">
            Professional Exterior
            <br />
            <span className="text-electric-400">Cleaning</span> Services
          </h1>

          <p className="text-white/70 text-lg mt-6 max-w-xl">
            Residential &amp; commercial exterior cleaning experts.
            From driveways to rooftops, we restore your property
            with premium equipment and eco-friendly methods.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-electric-600 hover:bg-electric-700 text-white font-semibold px-7 py-3.5 shadow-glow transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:07963334447"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-7 py-3.5 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          id="quote"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <QuoteForm />
        </motion.div>

      </div>
    </section>
  );
}