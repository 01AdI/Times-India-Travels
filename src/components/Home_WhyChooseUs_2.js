import { useState } from "react";



export default function WhyChooseUs_2() {
  const scrollToQuotation = () => {
    document.getElementById("quatation")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    });
  };

  return (
    <>
      <section className="overflow-hidden w-full py-20 border-b border-[#C9A24B]/25 bg-[#124d56] px-6 md:px-14">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-[#F58634]">
              Why travel with us
            </span>

            <h2 className="font-['Fraunces'] text-4xl md:text-5xl text-white font-semibold mt-4">
              Why Choose Us
            </h2>

            <div className="w-10 h-[2px] bg-[#F58634] mx-auto mt-6" />
          </div>

          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-28">
            <div className="rounded-2xl aspect-[4/5] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
              <img
                src="https://i.pinimg.com/736x/2e/bc/55/2ebc55e8dac812a88110c23889aff5bf.jpg"
                alt="Trust & Reliability"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div>
              <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#7BCBDA]">
                Trust & Reliability
              </span>

              <h3 className="font-['Fraunces'] text-3xl md:text-4xl text-white font-semibold mt-4 leading-tight">
                Government-Approved, and Here Whenever You Need Us
              </h3>

              <p className="text-white/70 text-[15px] leading-relaxed mt-6 max-w-md">
                We're a fully approved tour operator recognized by the Ministry
                of Tourism — not an unregistered agent booking rooms on your
                behalf. And once you're travelling with us, support doesn't
                stop at business hours. A delayed flight at midnight or a
                change of plans at dawn gets the same response either way.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <span className="inline-flex items-center gap-2 bg-[#1EA5BE]/15 text-[#7BCBDA] text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-2 border border-[#1EA5BE]/40">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  Govt. of India Approved
                </span>

                <span className="inline-flex items-center gap-2 bg-[#F58634]/15 text-[#FFB37B] text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-2 border border-[#F58634]/40">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                  24×7 Availability
                </span>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="md:order-2 rounded-2xl aspect-[4/5] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
              <img
                src="https://i.pinimg.com/736x/24/51/9a/24519a2b0cc8369171ccf04530260655.jpg"
                alt="Tailor Made Tours"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="md:order-1">
              <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#7BCBDA]">
                Made for you
              </span>

              <h3 className="font-['Fraunces'] text-3xl md:text-4xl text-white font-semibold mt-4 leading-tight">
                Not a Package. A Journey Built Around You.
              </h3>

              <p className="text-white/70 text-[15px] leading-relaxed mt-6 max-w-md">
                Every itinerary starts with a conversation, not a catalogue —
                your pace, your interests, your dates. And for those
                travelling solo, especially women travelling alone, that care
                runs deeper: guides and routing chosen specifically so India
                feels welcoming, not intimidating.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <span className="inline-flex items-center gap-2 bg-[#F58634]/15 text-[#FFB37B] text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-2 border border-[#F58634]/40">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth="2"
                  >
                    <path d="M4 12h16M4 7h10M4 17h13" />
                  </svg>
                  100% Tailor-Made
                </span>

                <span className="inline-flex items-center gap-2 bg-[#1EA5BE]/15 text-[#7BCBDA] text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-2 border border-[#1EA5BE]/40">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth="2"
                  >
                    <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />
                  </svg>
                  Solo Traveller Care
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <button
              onClick={scrollToQuotation}
             className="bg-[#F58634] hover:bg-[#D9701F] text-white font-semibold text-sm tracking-wide rounded-full px-8 py-4 transition-colors cursor-pointer"
             >
              Discuss Your Tour
            </button>
          </div>
        </div>
      </section>
    </>
  );
}