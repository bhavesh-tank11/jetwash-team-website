import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-wash-gradient relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-spray-radial" />
      <div className="container-max relative">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white max-w-2xl mx-auto">
          Ready to Transform Your Property?
        </h2>
        <p className="text-white/70 mt-5 max-w-xl mx-auto">
          Request your free, no-obligation quote today and see why homeowners and businesses trust The Jet Wash Team.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-electric-600 hover:bg-electric-700 text-white font-semibold px-8 py-4 shadow-glow transition-colors"
          >
            Request Your Free Quote Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:07963334447"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 border border-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" /> 0796 333 4447
          </a>
        </div>
      </div>
    </section>
  );
}
