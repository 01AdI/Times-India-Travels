import { useState } from "react";
import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    desc: "Share your favourite destinations and a rough travel plan through our quick quote request — it only takes a minute.",
  },
  {
    number: "02",
    title: "Get a Customized Trip",
    desc: "We'll help you build a fully customized itinerary — absolutely free, with no obligation.",
  },
  {
    number: "03",
    title: "Experience the Best of India",
    desc: "Get ready for the best itinerary, the best trip, and the best travel experience with us.",
  },
];



export default function AboutUs_Process() {

  return (
      <section className="bg-[#F2FAFB] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9701F]">
              How It Works
            </span>
            <h2 className="font-['Fraunces'] font-medium text-[#0B3C49] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-4">
              Getting Started Is Simple
            </h2>
            <div className="w-10 h-[2px] bg-[#F58634] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <span className="font-['Fraunces'] text-5xl text-[#1EA5BE]/25 font-medium">
                  {step.number}
                </span>
                <h3 className="font-['Fraunces'] font-medium text-xl text-[#0B3C49] mt-3">
                  {step.title}
                </h3>
                <p className="font-['Inter'] text-[#6D6D6D] text-[15px] leading-relaxed mt-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA sits right under the steps it describes, instead of
              being disconnected elsewhere on the page. */}
          <div className="text-center mt-14">
            <Link
              to="/#quatation"
              className="font-['Inter'] group inline-flex items-center gap-3 bg-[#F58634] hover:bg-[#D9701F] text-white text-sm font-semibold tracking-wide rounded-full pl-6 pr-2 py-2 shadow-[0_10px_25px_-10px_rgba(245,134,52,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(245,134,52,0.75)] transition-all duration-300"
            >
              Start With a Free Quote
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
  );
}