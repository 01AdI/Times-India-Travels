import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion, MotionConfig } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Quote, Star } from "lucide-react";
import { testimonials_review } from "./utils/Testimonial_data";
import TourPackage_Enquiry_Form from "./components/TourPackages_Components/TourPackage_Enquiry_Form";
import { useState } from "react";

function StarRow({ rating = 0, size = "h-4 w-4", className = "" }) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${size} ${n <= rating ? "fill-[#F58634] text-[#F58634]" : "fill-transparent text-current opacity-20"}`}
        />
      ))}
    </div>
  );
}

function extractPullQuote(text) {
  if (!text) return null;
  const firstParagraph = text.split("\n").find(Boolean) ?? "";
  const firstSentenceMatch = firstParagraph.match(/^.{0,20}?[^.!?]*[.!?]/);
  let quote = firstSentenceMatch
    ? firstSentenceMatch[0].trim()
    : firstParagraph;

  if (quote.length > 160) {
    quote = quote.slice(0, 150).replace(/\s+\S*$/, "") + "…";
  }
  return quote;
}

export default function Testimonial_Detail() {
  const { id } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const review = testimonials_review.find(
    (item) => String(item.id) === String(id),
  );

  // Landing mid-page on the next story after clicking a "more stories"
  // link is a classic client-side-routing gotcha — this resets scroll
  // every time the id changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (review?.name) {
      document.title = `${review.name}'s Story | Times India Travels`;
    }
    return () => {
      document.title = "Times India Travels";
    };
  }, [review?.name]);

  if (!review) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#F2FAFB] px-6">
        <div className="text-center">
          <p className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D9701F]">
            Testimonials
          </p>

          <h1 className="mt-4 font-['Fraunces'] text-4xl font-medium text-[#123138]">
            Testimonial Not Found
          </h1>

          <Link
            to="/Testimonials"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F58634] px-6 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9701F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123138]/40"
          >
            View Testimonials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  const rating = review.rating ?? 0;
  const paragraphs = review.review
    ? review.review.split("\n").filter(Boolean)
    : [];
  const pullQuote = extractPullQuote(review.review);
  const moreStories = testimonials_review
    .filter((t) => String(t.id) !== String(id))
    .slice(0, 3);

  return (
    <MotionConfig reducedMotion="user">
      {/* ============================================================
          HERO — full-bleed photo, curved divider into the next section
      ============================================================ */}
      <section
        className="hero-section relative h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/b4/c1/4e/b4c14e8408103efa070c2165e61687cf.jpg')",
        }}
      >
        {/* Premium contrast overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(10,18,32,0.2), rgba(10,18,32,0.55) 85%)",
          }}
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 -mt-4"
        >
          <p className="font-['Inter'] mb-4 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-white/80">
            A Traveller's Story
          </p>

          <h1 className="font-['Fraunces'] text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-[0.04em] drop-shadow-lg">
            {review.name}
          </h1>

          {/* was `w-30`, not a real Tailwind width — the divider was
              rendering at 0 width and effectively invisible */}
          <div
            className="mt-5 mx-auto w-16 h-[1px] bg-[#F58634]"
            aria-hidden="true"
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-['Inter'] text-sm text-white/90">
            <span>{review.location}</span>

            <span className="h-1 w-1 rounded-full bg-white/30" />

            <StarRow rating={rating} className="text-white/20" />

            {review.tripType && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>{review.tripType}</span>
              </>
            )}

            {review.verified && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5 text-[#7FE8F8]">
                  <Check className="h-3.5 w-3.5" />
                  Verified Traveller
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Bottom curve */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[85px] md:h-[100px] text-[#F2FAFB] z-10"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,120 Q720,15 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </section>

      {/* ============================================================
          FULL REVIEW — magazine-profile layout: sticky facts sidebar
          next to a flowing article column, with a pulled lead quote
          and a drop cap on the opening paragraph.
      ============================================================ */}
      <section className="bg-[#F2FAFB] px-6 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          {/* Back */}
          <Link
            to="/Testimonials"
            className="group mb-12 inline-flex items-center gap-2 font-['Inter'] text-xs font-semibold uppercase tracking-[0.14em] text-[#123138]/60 transition-colors duration-300 hover:text-[#F58634] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123138]/30 rounded"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Testimonials
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12"
          >
            {/* SIDEBAR — traveller facts, sticky on scroll */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="flex flex-col items-start">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-44 w-44 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-44 w-44 items-center justify-center rounded-full text-7xl font-semibold text-white ${
                        review.accent === "orange"
                          ? "bg-gradient-to-br from-[#F58634] to-[#D9701F]"
                          : "bg-gradient-to-br from-[#1EA5BE] to-[#123138]"
                      }`}
                    >
                      {review.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="mt-6">
                    <p className="font-['Fraunces'] text-[28px] text-[#123138]">
                      {review.name}
                    </p>
                    <p className="mt-1 font-['Inter'] text-sm text-[#6D6D6D]">
                      {review.location}
                    </p>
                  </div>
                </div>

                <dl className="mt-8 space-y-5 border-l-2 border-[#123138]/10 pl-5">
                  <div>
                    <dt className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123138]/40">
                      Rating
                    </dt>
                    <dd className="mt-1.5">
                      <StarRow rating={rating} size="h-4 w-4" />
                    </dd>
                  </div>

                  {review.tripType && (
                    <div>
                      <dt className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123138]/40">
                        Trip
                      </dt>
                      <dd className="mt-1 font-['Inter'] text-sm text-[#123138]">
                        {review.tripType}
                      </dd>
                    </div>
                  )}

                  <div>
                    <dt className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123138]/40">
                      Source
                    </dt>
                    <dd className="mt-1 flex items-center gap-1.5 font-['Inter'] text-sm text-[#123138]">
                      {review.verified ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#1EA5BE]" />
                          Verified traveller
                        </>
                      ) : (
                        "Traveller review"
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>

            {/* ARTICLE COLUMN */}
            <div className="lg:col-span-8">
              {paragraphs.length > 0 ? (
                <>
                  {pullQuote && (
                    <div className="mb-10 flex gap-4">
                      <Quote
                        className="mt-1 h-8 w-8 shrink-0 text-[#F58634]/50"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                      <p className="font-['Fraunces'] text-[26px] italic leading-[1.3] text-[#123138] sm:text-[30px]">
                        {pullQuote}
                      </p>
                    </div>
                  )}

                  <div className="font-['Inter'] text-[15px] leading-8 text-[#123138]/75 sm:text-base sm:leading-9">
                    {paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className={
                          index > 0
                            ? "mt-6"
                            : "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-['Fraunces'] first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-[#F58634]"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <p className="font-['Inter'] text-sm italic text-[#123138]/40">
                  This review doesn't have any text yet.
                </p>
              )}
            </div>
          </motion.div>

          {/* MORE STORIES */}
          {moreStories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mt-20 lg:pl-[calc(33.333%+3.5rem)]"
            >
              <p className="mb-6 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#123138]/40">
                More Traveller Stories
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {moreStories.map((story) => (
                  <Link
                    key={story.id}
                    to={`/Testimonials/${story.id}`}
                    className="group rounded-2xl border border-[#123138]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(18,49,56,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EA5BE]/50"
                  >
                    <StarRow
                      rating={story.rating ?? 0}
                      size="h-3 w-3"
                      className="mb-3"
                    />
                    <p className="font-['Fraunces'] text-base text-[#123138] transition-colors duration-300 group-hover:text-[#F58634]">
                      {story.name}
                    </p>
                    <p className="mt-1 font-['Inter'] text-xs text-[#6D6D6D]">
                      {story.location}
                    </p>
                    {story.review && (
                      <p className="mt-3 line-clamp-2 font-['Inter'] text-[13px] leading-relaxed text-[#123138]/55">
                        {story.review.split("\n")[0]}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="bg-[#124d56] px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F58634]">
            Your Story Could Be Next
          </p>

          <h2 className="mt-4 font-['Fraunces'] text-4xl font-medium text-white sm:text-5xl">
            Ready to Create Your Own Indian Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-['Inter'] text-sm leading-7 text-white/60">
            Tell us what you have in mind and let our travel experts help create
            a journey worth remembering.
          </p>

          <button
            type="button"
            onClick={() => setIsEnquiryOpen(true)}
            className="cursor-pointer group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F58634] px-7 py-3.5 font-['Inter'] text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(245,134,52,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9701F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Plan My Journey
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </section>
      {isEnquiryOpen && (
        <TourPackage_Enquiry_Form onClose={() => setIsEnquiryOpen(false)} />
      )}
    </MotionConfig>
  );
}
