
import { useEffect, useRef, useState, useCallback } from "react";

const slides = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/cc/31/54/cc31544056314ab5f1efecd98d1b49b3.jpg",
    place: "Rajasthan",
    line: "The Desert Kingdom",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/e1/48/22/e14822d361d17268a5fce19db5c7d7e5.jpg",
    place: "Kerala",
    line: "God's Own Country",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/0a/fd/da/0afddaaa4e951c4c0e31bd05da8e6190.jpg",
    place: "Himalayas",
    line: "The High Road",
  },
];
 
const SLIDE_DURATION = 3500;
 
export default function Home_HeroSection() {
  
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);
 
  const scrollToQuotation = () => {
    document.getElementById("quatation")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    });
  };
  const scrollToTravel=()=>{
    document.getElementById("tour-packages")?.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });
  };
  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);
 
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
 
  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [progressKey, next]);
 
 
  const active = slides[current];
 
  return (
    <section
      className="hero-section relative w-screen h-screen overflow-hidden text-[#F4EFE4]"
      style={{ backgroundColor: "#101A2E" }}
    >
      {/* ---------- Image layers (crossfade) ---------- */}
      {slides.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.url}
          alt={slide.place}
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transitionDuration: "1400ms",
          }}
        />
      ))}
 
      {/* Tonal wash — indigo, not flat black, so photography keeps its warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,26,46,0.55) 0%, rgba(16,26,46,0.15) 32%, rgba(16,26,46,0.35) 70%, rgba(16,26,46,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,26,46,0.5) 0%, rgba(16,26,46,0) 45%)",
        }}
      />
 
      {/* ---------- Wordmark ---------- */}
      {/* <div className="absolute top-8 left-6 md:top-10 md:left-14 flex items-center gap-3">
        <div className="w-8 h-[1.5px]" style={{ backgroundColor: "#C9A24B" }} />
        <span
          className="text-[11px] tracking-[0.28em] uppercase"
          style={{ fontFamily: "Inter, sans-serif", color: "#E7DFC9" }}
        >
          Times India Travels
        </span>
      </div>
  */}
      {/* ---------- Slide counter ---------- */}
      <div
        className="absolute top-8 right-6 md:top-10 md:right-14 text-[11px] tracking-[0.2em]"
        style={{ fontFamily: "Inter, sans-serif", color: "#C9A24B" }}
      >
        <span style={{ color: "#F4EFE4" }}>0{current + 1}</span>
        <span style={{ opacity: 0.5 }}> / 0{slides.length}</span>
      </div>
 
      {/* ---------- Main copy block ---------- */}
      <div className="absolute left-6 right-6 md:left-14 top-[38%]  max-w-xl">
        <div
          key={active.id}
          className="flex items-center gap-3 mb-4"
          style={{ animation: "fadeUp 700ms ease-out both" }}
        >
          <span
            className="text-[14px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "Inter, sans-serif", color: "#D8895E" }}
          >
            {active.place}
          </span>
          <span className="w-6 h-[1px]" style={{ backgroundColor: "#D8895E", opacity: 0.6 }} />
          <span
            className="text-[12px] tracking-[0.1em]"
            style={{ fontFamily: "Inter, sans-serif", color: "#C7BFA9" }}
          >
            {active.line}
          </span>
        </div>
 
        <h1
          className="leading-[1.05] "
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#F4EFE4",
          }}
        > 
          Bringing the World To{" "}  
          <span className="italic text-[#C9A24B]">India</span>
        </h1>
          
        <div className="flex flex-wrap items-center gap-5 mt-10">

        {/* Primary CTA */}
        
        <button
          onClick={scrollToTravel}
          type="button"
          className="mt-2.5 group inline-flex items-center gap-3 text-[13px] tracking-[0.08em] uppercase text-[#F4EFE4] font-['Inter'] pb-2
            border-b border-transparent hover:border-[#C9A24B] transition-all duration-500 cursor-pointer "
        >
          <span>Plan Your Trip</span>

          <span
            className="text-[#C9A24B] text-lg transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        {/* Secondary CTA */}
        <button
          type="button"
          onClick={scrollToQuotation}
          className="inline-flex items-center justify-center text-[13px] tracking-[0.08em] uppercase text-[#F4EFE4] font-['Inter']
            px-5 py-3 rounded-full border border-[#C9A24B]/60 bg-[#C9A24B]/5 hover:bg-[#C9A24B] hover:text-[#101A2E]
            hover:border-[#C9A24B] transition-all duration-500 cursor-pointer "
        >
          Get a Free Quotation
        </button>
      </div>
      </div>
 
      {/* ---------- Arrows ---------- */}
      <div className="absolute right-6 md:right-14 bottom-32 md:bottom-36 flex gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          style={{
            border: "1px solid rgba(244,239,228,0.35)",
            backdropFilter: "blur(6px)",
            color: "#F4EFE4",
          }}
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          style={{
            border: "1px solid rgba(244,239,228,0.35)",
            backdropFilter: "blur(6px)",
            color: "#F4EFE4",
          }}
        >
          ›
        </button>
      </div>
 
      {/* ---------- Trust bar ---------- */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-9">
 
        {/* Journey line — signature progress indicator.
            One continuous gold line traces across per slide,
            evoking a route line on a map instead of generic dots. */}
        <div className="relative w-full h-[2px]" style={{ backgroundColor: "rgba(244,239,228,0.15)" }}>
          <div
            key={progressKey}
            className="absolute left-0 top-0 h-full"
            style={{
              backgroundColor: "#C9A24B",
              animation: `travel ${SLIDE_DURATION}ms linear forwards`,
            }}
          />
          <div className="absolute inset-0 flex justify-between">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.place}`}
                className="w-3 h-3 -mt-[5px] rounded-full"
                style={{
                  marginLeft: i === 0 ? 0 : "auto",
                  backgroundColor: i <= current ? "#C9A24B" : "#F4EFE4",
                  opacity: i <= current ? 1 : 0.3,
                  transform: "translateX(-50%)",
                  transition: "opacity 300ms, background-color 300ms",
                }}
              />
            ))}
          </div>
        </div>
      </div>
 
    </section>
  );
}
 
