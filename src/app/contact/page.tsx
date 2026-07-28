import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The Jet Wash Team for a free exterior cleaning quote. Call 0796 333 4447 or fill out our contact form.",
};

const info = [
  { icon: Phone, label: "Phone", value: "0796 333 4447" },
  { icon: Mail, label: "Email", value: "hello@jetwashteam.com" },
  { icon: MapPin, label: "Coverage", value: "Nationwide, United Kingdom" },
  { icon: Clock, label: "Hours", value: "Mon - Sat: 8:00am - 6:00pm" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Property"
        desc="Fill in the form below or call us directly for your free, no-obligation quote."
      />

      <section className="section-pad">
        <div className="container-max grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <span className="eyebrow">Contact Details</span>
            <h2 className="font-display font-bold text-3xl text-navy-900 mt-4 mb-8">We&rsquo;d Love to Hear From You</h2>
            <div className="space-y-5">
              {info.map((i) => (
                <div key={i.label} className="flex items-center gap-4 bg-ice-50 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 rounded-full bg-electric-600 grid place-items-center shrink-0">
                    <i.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-800/50">{i.label}</p>
                    <p className="text-sm font-semibold text-navy-900">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ServiceAreas />
      <FAQSection />
    </>
  );
}
