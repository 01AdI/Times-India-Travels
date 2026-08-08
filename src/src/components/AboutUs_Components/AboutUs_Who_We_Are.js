import { Link } from "react-router";


export default function AboutUs_Who_We_Are() {
  return (
    <>
      {/* ---------- Intro ---------- */}
      <section className="bg-[#F2FAFB] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9701F]">
            Who We Are
          </span>

          <h2 className="font-['Fraunces'] font-medium text-[#0B3C49] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-4">
            About Times India Travels
          </h2>

          <div className="w-10 h-[2px] bg-[#F58634] mx-auto mt-6 mb-8" />

          <div className="font-['Inter'] text-[#6D6D6D] text-[16px] leading-relaxed text-left flex flex-col gap-4">
            <p>
              With Times India Travels, experience the beauty of incredible
              India. For over 13 years, we've been earning our clients' trust,
              one carefully planned trip at a time.
            </p>
            <p>
              When planning the perfect vacation feels overwhelming, we take
              the initiative — routing you to the destinations that matter,
              with the same commitment to satisfaction whether it's your
              first trip to India or your fifth.
            </p>
            <p>
              We offer specialized, customized tours built around your
              specifications, and you're always free to choose your holiday
              destinations on your own timeline, with our itinerary options
              designed around your convenience.
            </p>
          </div>

          {/* Proper CTA instead of a duplicated sidebar form — same
              weight/treatment as the site's other primary buttons,
              not a plain text link. */}
          <Link
            to="/#quatation"
            className="font-['Inter'] group inline-flex items-center gap-3 mt-10 bg-[#F58634] hover:bg-[#D9701F] text-white text-sm font-semibold tracking-wide rounded-full pl-6 pr-2 py-2 shadow-[0_10px_25px_-10px_rgba(245,134,52,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(245,134,52,0.75)] transition-all duration-300"
          >
            Have a Question? Get a Free Quote
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      
    </>
  );
}