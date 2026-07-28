import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore The Jet Wash Team's full range of exterior cleaning services: pressure washing, soft washing, roof, driveway, patio, gutter, render and window cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Exterior Surface, Expertly Cleaned"
        desc="Browse our full range of residential and commercial exterior cleaning services below."
      />

      <section className="section-pad">
        <div className="container-max space-y-16">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center scroll-mt-28 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden h-72 shadow-premium">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-3">{s.title}</h2>
                <p className="text-navy-800/60 leading-relaxed mb-5">{s.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-electric-600 hover:bg-electric-700 text-white text-sm font-semibold px-6 py-3 transition-colors"
                >
                  Get a Quote for This Service <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </>
  );
}
