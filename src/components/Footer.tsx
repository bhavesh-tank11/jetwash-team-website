import Link from "next/link";
import { Droplets, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max px-6 md:px-10 lg:px-16 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-electric-600">
              <Droplets className="w-5 h-5 text-white" />
            </span>
            The Jet Wash Team
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Professional exterior cleaning for homes and businesses nationwide. Fully insured, eco-friendly, 5-star rated.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-electric-600 transition-colors"
                aria-label="social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <Link href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-electric-400 transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Pressure Washing", "Soft Washing", "Roof Cleaning", "Driveway Cleaning", "Gutter Cleaning", "Commercial Cleaning"].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-electric-400 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-electric-400 shrink-0" /> Nationwide, United Kingdom
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-electric-400 shrink-0" /> 0796 333 4447
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-electric-400 shrink-0" /> hello@jetwashteam.com
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-electric-400 shrink-0" /> Mon - Sat: 8:00am - 6:00pm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} The Jet Wash Team. All rights reserved.
      </div>
    </footer>
  );
}
