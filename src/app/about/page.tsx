import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The Jet Wash Team - 15+ years of professional exterior cleaning experience across residential and commercial properties nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built On Trust, Backed By Experience"
        desc="For over 15 years, The Jet Wash Team has helped homeowners and businesses restore the exterior of their properties with precision, care, and premium equipment."
      />

      <section className="section-pad">
        <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
              alt="The Jet Wash Team technician at work"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4 mb-5">
              A Team That Treats Your Property Like Our Own
            </h2>
            <p className="text-navy-800/60 leading-relaxed mb-4">
              What started as a single van and a pressure washer has grown into a nationwide operation
              trusted by thousands of homeowners and businesses. Our mission has stayed the same from
              day one: deliver a genuinely premium exterior clean, every time.
            </p>
            <p className="text-navy-800/60 leading-relaxed">
              Every technician is trained on surface-specific techniques, fully insured, and held to the
              same quality checklist before a job is signed off. That consistency is why our clients
              call us back year after year.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <StatsSection />
      <FinalCTA />
    </>
  );
}
