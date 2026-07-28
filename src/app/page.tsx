import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import Gallery from "@/components/Gallery";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfterSection />
      <Gallery />
      <StatsSection />
      <ReviewsSection />
      <ServiceAreas />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
