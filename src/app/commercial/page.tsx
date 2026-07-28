import type { Metadata } from "next";
import Image from "next/image";
import { Building2, CalendarCheck, ShieldCheck, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Commercial Cleaning",
  description: "Scheduled exterior cleaning contracts for offices, retail units and industrial sites. Minimal disruption, maximum results.",
};

const points = [
  { icon: Building2, title: "Any Property Type", desc: "Offices, retail units, warehouses and industrial sites." },
  { icon: CalendarCheck, title: "Scheduled Contracts", desc: "Recurring maintenance plans to keep premises presentable." },
  { icon: Clock, title: "Out-of-Hours Options", desc: "Work planned around your business hours to avoid disruption." },
  { icon: ShieldCheck, title: "Full Compliance", desc: "Risk assessments, method statements and insurance on request." },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Commercial Exterior Cleaning"
        desc="Keep your premises looking professional with scheduled cleaning contracts built around your business."
      />

      <section className="section-pad">
        <div className="container-max grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
          <div>
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-premium mb-10">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
                alt="Commercial building exterior cleaning"
                fill
                className="object-cover"
              />
            </div>
            <span className="eyebrow">Built For Business</span>
            <h2 className="font-display font-bold text-3xl text-navy-900 mt-4 mb-6">
              Reliable Contracts, Consistent Standards
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3.5">
                  <p.icon className="w-5 h-5 text-electric-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">{p.title}</h4>
                    <p className="text-xs text-navy-800/60 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <StatsSection />
      <FinalCTA />
    </>
  );
}
