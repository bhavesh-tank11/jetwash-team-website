"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Pressure Washing",
  "Soft Washing",
  "Roof Cleaning",
  "Driveway Cleaning",
  "Patio Cleaning",
  "Gutter Cleaning",
  "Commercial Exterior Cleaning",
  "Other",
];

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-premium p-8 md:p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-electric-600 mx-auto mb-4" />
        <h3 className="font-display font-semibold text-xl text-navy-900">Request received</h3>
        <p className="text-navy-800/60 mt-2 text-sm">
          Thanks — a member of the team will call you back within 24 hours with your free quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-3xl shadow-premium p-6 md:p-8 space-y-4 ${compact ? "" : "border border-ice-100"}`}
    >
      <div>
        <h3 className="font-display font-semibold text-lg text-navy-900">Request Your Free Quote</h3>
        <p className="text-navy-800/50 text-sm mt-1">No obligation. Response within 24 hours.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input required placeholder="Full name" className="col-span-2 rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500" />
        <input required type="tel" placeholder="Phone" className="rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500" />
        <input required type="email" placeholder="Email" className="rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500" />
        <input required placeholder="Property address" className="col-span-2 rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500" />
        <select required defaultValue="" className="col-span-2 rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500 text-navy-800/70">
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea placeholder="Tell us about the job" rows={3} className="col-span-2 rounded-xl border border-ice-100 bg-ice-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric-500 resize-none" />
      </div>

      <button type="submit" className="w-full rounded-xl bg-electric-600 hover:bg-electric-700 text-white font-semibold py-3.5 transition-colors">
        Get My Free Quote
      </button>
    </form>
  );
}
