import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { testimonials_review } from "../../utils/Testimonial_data";


const AUTO_ADVANCE_MS = 5000;

// Short card excerpt from the full testimonial — cuts at the last full
// word before the limit rather than mid-word, then adds an ellipsis.
function excerpt(text, maxLen = 240) {
  const clean = text.trim().replace(/\s+/g, " ");
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export default function Home_ClientReview() {
  const CARDS_PER_PAGE = 1;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(testimonials_review.length / CARDS_PER_PAGE);

  const visibleReviews = testimonials_review.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  const nextSlide = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [currentPage, isPaused, totalPages]);

  return (
    <section className="relative overflow-hidden bg-[#F2FAFB] py-20 ">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(30,165,190,0.08), transparent 40%), radial-gradient(circle at 90% 90%, rgba(245,134,52,0.06), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D9701F]">
            A true story
          </span>

          <h2 className="mt-3 font-['Fraunces'] text-4xl font-semibold text-[#123138] md:text-5xl">
            Tours &amp; Reviews
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-10 bg-[#F58634]" />

          <p className="mt-5 text-sm text-[#6D6D6D]">
            Verified reviews from travellers we've hosted across India.
          </p>
        </div>

        {/* cards */}
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {visibleReviews.map((t) => (
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                exit={{ opacity: 0, x: -80, transition: { duration: 0.45 } }}
                className="flex justify-around gap-12"
              >
                {/* Real avatar photo, falling back to initials-gradient
                    if the image is missing or fails to load */}
                <AvatarCircle name={t.name} avatar={t.avatar} accent={t.accent} />

                <div>
                  <div className="mb-4 text-sm text-[#1EA5BE]">
                    {"★".repeat(t.rating)}
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-[#123138]/80">
                      "{excerpt(t.review)}"
                    </p>

                    <Link
                      to={`/Testimonials/${t.id}`}
                      className="inline-block cursor-pointer hover:scale-[1.15] rounded-full border border-[#1EA5BE]/40 px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#1EA5BE] mt-6 transition-transform"
                    >
                      Read More
                    </Link>
                  </div>

                  <div className="mt-6 relative gap-3 border-t border-[#123138]/10 pt-6 pb-2">
                    <div>
                      <p className="text-[15px] font-semibold text-[#123138]">
                        {t.name}
                      </p>
                      {t.location && (
                        <p className="text-xs text-[#6D6D6D]">{t.location}</p>
                      )}
                    </div>

                    {t.verified && (
                      <span className="absolute top-5 right-0 ml-auto rounded-full border border-[#1EA5BE]/40 px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#1EA5BE]">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex items-center justify-evenly gap-8">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123138]/15 text-[#123138] transition-colors hover:bg-[#123138] hover:text-white cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2}>
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123138]/15 text-[#123138] transition-colors hover:bg-[#123138] hover:text-white cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.tripadvisor.in/Attraction_Review-g304555-d3590777-Reviews-Times_India_Travels-Jaipur_Jaipur_District_Rajasthan.html#REVIEWS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-[#1EA5BE] text-sm font-semibold text-[#1EA5BE] transition-transform hover:scale-105"
          >
            Read all 197 reviews on TripAdvisor →
          </a>
        </div>
      </div>
    </section>
  );
}

function AvatarCircle({ name, avatar, accent }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = avatar && !imgFailed;

  const gradient =
    accent === "orange"
      ? "bg-gradient-to-br from-[#F58634] to-[#D9701F]"
      : "bg-gradient-to-br from-[#1EA5BE] to-[#123138]";

  if (showImage) {
    return (
      <img
        src={avatar}
        alt={name}
        onError={() => setImgFailed(true)}
        className="h-50 w-50 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className={`flex h-50 w-50 shrink-0 items-center justify-center rounded-full text-3xl font-semibold text-white font-['Fraunces'] ${gradient}`}
    >
      {name?.[0] ?? "?"}
    </div>
  );
}