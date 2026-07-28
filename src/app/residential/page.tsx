import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Residential Cleaning",
  description: "Driveway, patio, roof, gutter and render cleaning for homes. Protect your property's value and kerb appeal with The Jet Wash Team.",
};

const features = [
  "Free, no-obligation quotes",
  "Flexible scheduling around your day",
  "Pet and plant-safe eco detergents",
  "Fully insured technicians",
  "Before & after photo record",
  "Satisfaction guarantee",
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="For Homeowners"
        title="Residential Exterior Cleaning"
        desc="Restore your home's kerb appeal with driveway, patio, roof, render, fence and gutter cleaning tailored to your property."
      />

      <section className="section-pad">
        <div className="container-max grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
          <div>
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-premium mb-10">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80"
                alt="Clean residential driveway"
                fill
                className="object-cover"
              />
            </div>
            <span className="eyebrow">Why Homeowners Choose Us</span>
            <h2 className="font-display font-bold text-3xl text-navy-900 mt-4 mb-6">
              A Cleaner Home, Without The Hassle
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-600 shrink-0" />
                  <span className="text-sm text-navy-800/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ReviewsSection />
      <FinalCTA />
    </>
  );
}
