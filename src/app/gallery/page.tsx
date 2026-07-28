import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse before-and-after photos and recent projects completed by The Jet Wash Team across roof, driveway, patio, pressure washing and commercial jobs.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Project Gallery"
        desc="A look at recent transformations across residential and commercial properties."
      />
      <Gallery />
      <BeforeAfterSection />
      <FinalCTA />
    </>
  );
}
