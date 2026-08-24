import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router";
import { tourCategories } from "../../utils/TourPackage_data";
import TourPackage_Enquiry_Form from "../TourPackages_Components/TourPackage_Enquiry_Form";

// ---------------------------------------------------------------------------
// CARD LAYOUTS
// ---------------------------------------------------------------------------

const cardLayouts = [
  "h-[500px] md:col-span-7 md:row-span-3 md:h-auto",
  "h-[460px] md:col-span-5 md:row-span-3 md:h-auto",
  "h-[340px] md:col-span-5 md:row-span-2 md:h-auto",
  "h-[340px] md:col-span-7 md:row-span-2 md:h-auto",
  "h-[360px] md:col-span-7 md:row-span-2 md:h-auto",
  "h-[360px] md:col-span-5 md:row-span-2 md:h-auto",
  "h-[430px] md:col-span-12 md:row-span-2 md:h-auto",
];

// ---------------------------------------------------------------------------
// TOUR CATEGORIES
// ---------------------------------------------------------------------------

const packages = Object.values(tourCategories);

// ---------------------------------------------------------------------------
// ANIMATIONS
// ---------------------------------------------------------------------------

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.97,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const customJourneyVariants = {
  hidden: {
    opacity: 0,
    y: 65,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ---------------------------------------------------------------------------
// MOTION LINK
// ---------------------------------------------------------------------------

const MotionLink = motion(Link);

// ---------------------------------------------------------------------------
// TOUR CARD
// ---------------------------------------------------------------------------

function TourCard({ pkg, index, className = "" }) {
  const image =
    pkg.heroImage ||
    pkg.packages?.[0]?.thumbnail ||
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop";

  const featuredPackage =
    pkg.packages?.find((tour) => tour.featured) ||
    pkg.packages?.[0];

  const duration =
    featuredPackage?.duration?.label || "Explore Tours";

  return (
    <MotionLink
      to={`/Tour/${pkg.id}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      aria-label={`${pkg.name} — ${pkg.tagline}`}
      className={`group relative block overflow-hidden rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3C49] ${className}`}
    >
      {/* IMAGE */}

      <img
        src={image}
        alt={pkg.name}
        loading={index === 0 ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-transform duration-[1400ms] ease-out motion-reduce:transition-none group-hover:scale-[1.07] motion-reduce:group-hover:scale-100"
      />

      {/* DARK GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-all duration-700 group-hover:from-black/95 group-hover:via-black/55" />

      {/* ORANGE HOVER OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-[#F58634]/0 transition-all duration-700 group-hover:bg-[#F58634]/[0.035]" />

      {/* NUMBER */}

      <div
        className="absolute left-6 top-6 z-10 sm:left-7 sm:top-7"
        aria-hidden="true"
      >
        <span className="font-['Fraunces'] text-4xl font-light tracking-tight text-white/50 transition-colors duration-500 group-hover:text-white/75">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* DURATION */}

      <div
        className="absolute right-6 top-6 z-10 sm:right-7 sm:top-7"
        aria-hidden="true"
      >
        <span className="rounded-3xl border border-white/20 bg-[#124d56]/40 px-4 py-3 font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {duration}
        </span>
      </div>

      {/* CONTENT */}

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">
        {/* TAGLINE */}

        <p className="mb-2 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F58634]">
          {pkg.tagline}
        </p>

        {/* TITLE */}

        <h3 className="max-w-xl font-['Fraunces'] text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-white transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
          {pkg.name}
        </h3>

        {/* DESCRIPTION */}

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="mt-4 max-w-xl font-['Inter'] text-sm leading-6 text-white/70">
              {pkg.description}
            </p>
          </div>
        </div>

        {/* EXPLORE CTA */}

        <div className="mt-4 flex items-center gap-3 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-white">
          <span>Explore Journey</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-[#F58634] group-hover:bg-[#F58634] group-hover:text-[#0B3C49]">
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

export default function TourPackages_Grid() {
  const prefersReducedMotion = useReducedMotion();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-[#F2FAFB] py-13 sm:py-13 md:py-14">
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          {/* ================================================================
              SECTION HEADER
          ================================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
          >
            <p className="mb-5 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F58634] sm:text-[11px]">
              Where Will India Take You?
            </p>

            <h2 className="font-['Fraunces'] text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-[#0B3C49] sm:text-5xl md:text-6xl lg:text-[64px]">
              Discover Your Next Journey
            </h2>

            <div className="mx-auto mt-5 h-px w-40 bg-[#F58634]" />

            <p className="mx-auto mt-7 max-w-3xl font-['Inter'] text-sm leading-7 text-[#5F6F73] sm:text-[15px] md:text-base">
              From royal palaces and ancient cities to tropical backwaters,
              wild forests and Himalayan valleys — discover India through
              journeys crafted around the places that make it unforgettable.
            </p>
          </motion.div>

          {/* ================================================================
              TOUR PACKAGE GRID
          ================================================================= */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-flow-dense md:auto-rows-[180px]">
            {packages.map((pkg, index) => (
              <TourCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                className={cardLayouts[index % cardLayouts.length]}
              />
            ))}
          </div>

          {/* ================================================================
              CUSTOM JOURNEY CTA
          ================================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={customJourneyVariants}
            className="group relative mt-5 min-h-[330px] overflow-hidden rounded-4xl bg-[#0B3C49] sm:min-h-[360px] md:min-h-[390px]"
          >
            {/* TOP ORANGE LINE */}

            <div className="absolute left-0 top-0 h-1 w-full bg-[#F58634]" />

            {/* ORANGE GLOW */}

            <div
              className={`pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#F58634]/10 blur-3xl transition-transform duration-1000 ${
                prefersReducedMotion
                  ? ""
                  : "group-hover:scale-125"
              }`}
            />

            {/* DECORATIVE CIRCLE */}

            <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full border border-white/[0.05]" />

            {/* GRID LINES */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <div className="absolute left-1/4 top-0 h-full w-px bg-white" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
              <div className="absolute left-3/4 top-0 h-full w-px bg-white" />
            </div>

            {/* CONTENT */}

            <div className="relative flex min-h-[330px] flex-col justify-between p-7 sm:min-h-[360px] sm:p-10 md:min-h-[390px] md:p-14 lg:p-16">

              {/* TOP */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-['Fraunces'] text-3xl font-light text-white/40">
                    {String(packages.length + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-10 bg-white/20" />

                  <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F58634]">
                    Made For You
                  </span>
                </div>

                <Sparkles
                  className="h-5 w-5 text-[#F58634]"
                  aria-hidden="true"
                />
              </div>

              {/* MAIN CONTENT */}

              <div className="mt-12 max-w-4xl">
                <h3 className="font-['Fraunces'] text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Your India.
                  <span className="block italic text-[#F58634]">
                    Your way.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl font-['Inter'] text-sm leading-7 text-white/60 sm:text-base">
                  Have something different in mind? Tell us how you want to
                  experience India and we'll create a journey around your
                  interests, pace and dreams.
                </p>
              </div>

              {/* BOTTOM */}

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Completely personalised · Expertly planned
                </span>

                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isEnquiryOpen}
                  className="group inline-flex w-fit cursor-pointer items-center gap-4 rounded-3xl bg-[#F58634] px-6 py-3.5 font-['Inter'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B3C49] outline-none transition-all duration-300 hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3C49]"
                >
                  Create Your Journey

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ================================================================
              FOOTER LABEL
          ================================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-6 flex flex-col justify-between gap-2 rounded-2xl border-t border-[#124D56]/10 pt-5 sm:flex-row"
          >
            <p className="font-['Inter'] text-[12px] uppercase tracking-[0.2em] text-[#7BCBDA]">
              Curated journeys across India
            </p>

            <p className="font-['Inter'] text-[12px] uppercase tracking-[0.2em] text-[#7BCBDA]">
              Times India Travels
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          ENQUIRY FORM
      ================================================================= */}

      {isEnquiryOpen && (
        <TourPackage_Enquiry_Form
          onClose={() => setIsEnquiryOpen(false)}
        />
      )}
    </MotionConfig>
  );
}