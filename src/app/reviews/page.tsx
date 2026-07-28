import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "See what homeowners and businesses say about The Jet Wash Team's exterior cleaning services. 5-star rated, trusted nationwide.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Customers Say"
        desc="Real reviews from homeowners and businesses we've worked with across the country."
      />
      <StatsSection />
      <ReviewsSection />
      <FinalCTA />
    </>
  );
}
