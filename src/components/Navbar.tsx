"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-ice-100 py-2"
          : "bg-transparent border-transparent py-3"
      }`}
    >

      <div className="container-max flex items-center justify-between px-6 md:px-10 lg:px-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/jetwash.png"
            alt="The Jet Wash Team"
            width={200}
            height={200}
            priority
            className="object-contain w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
          />

          <span
            className={`font-display font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
            style={{
              fontFamily: "'Poppins', 'Space Grotesk', sans-serif",
            }}
          >
            The Jet Wash Team
          </span>

        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-navy-800 hover:text-electric-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}

        </nav>


        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:07963334447"
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >

            <Phone className="w-4 h-4" />

            0796 333 4447

          </a>


          <Link
            href="/contact"
            className="rounded-full bg-electric-600 hover:bg-electric-700 text-white text-sm font-semibold px-6 py-3 shadow-glow transition-all duration-300 hover:scale-105"
          >
            Get Free Quote
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >

          {open ? <X size={28} /> : <Menu size={28} />}

        </button>


      </div>


      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="lg:hidden overflow-hidden bg-white border-t border-ice-100 shadow-md"
          >

            <div className="flex flex-col gap-1 px-6 py-4">

              {links.map((l) => (

                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-navy-800 font-medium border-b border-ice-100"
                >
                  {l.label}
                </Link>

              ))}


              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center rounded-full bg-electric-600 text-white font-semibold px-5 py-3"
              >
                Get Free Quote
              </Link>


            </div>

          </motion.div>

        )}

      </AnimatePresence>


    </header>
  );
}