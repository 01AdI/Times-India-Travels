import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";

import { destinations } from "../../utils/Destination_data";

function DestinationSection({ destinations: destinationList = destinations }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const total = destinationList.length;

  /* =======================================================
     FORMAT NUMBER
  ======================================================= */

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  /* =======================================================
     AUTOPLAY
  ======================================================= */

  useEffect(() => {
    if (total <= 1 || isImageHovered) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide, total, isImageHovered]);

  /* =======================================================
     KEEP ACTIVE INDEX VALID
  ======================================================= */

  useEffect(() => {
    if (total === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= total) {
      setActiveIndex(0);
    }
  }, [total, activeIndex]);

  /* =======================================================
     VISIBLE DESTINATIONS
  ======================================================= */

  const visibleDestinations = useMemo(() => {
    if (!total) {
      return [];
    }

    const previousIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      {
        ...destinationList[previousIndex],
        position: "previous",
        originalIndex: previousIndex,
      },
      {
        ...destinationList[activeIndex],
        position: "active",
        originalIndex: activeIndex,
      },
      {
        ...destinationList[nextIndex],
        position: "next",
        originalIndex: nextIndex,
      },
    ];
  }, [activeIndex, destinationList, total]);

  if (!destinationList.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-[#C9A24B]/25
        bg-[#f1f8f8]
        py-15
        md:py-14
        lg:py-14
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-14
          max-w-4xl
          px-6
          text-center
          md:mb-16
          lg:mb-20
        "
      >
        {/* Eyebrow */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-8
              bg-[#f47b3a]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#F58634]
              sm:text-xs
            "
          >
            Destinations
          </span>

          <span
            className="
              h-px
              w-8
              bg-[#f47b3a]
            "
          />
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            delay: 0.08,
          }}
          className="
            font-serif
            text-4xl
            font-medium
            leading-[1.05]
            tracking-tight
            text-[#103f4a]
            sm:text-5xl
            md:text-6xl
          "
        >
          Where will your story begin?
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
          "
        >
          From timeless cities to serene landscapes, every destination has a
          story waiting to be lived.
        </motion.p>
      </div>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div className="relative w-full">
        <div
          className="
            relative
            flex
            h-[500px]
            w-full
            items-center
            justify-center
            overflow-hidden
            sm:h-[560px]
            lg:h-[620px]
          "
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleDestinations.map((destination) => {
              const isActive = destination.position === "active";
              const isPrevious = destination.position === "previous";
              const isNext = destination.position === "next";

              return (
                <motion.article
                  key={`${destination.id}-${destination.position}`}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.88,
                    scale: isActive ? 1 : 0.94,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(destination.originalIndex);
                    }
                  }}
                  className={`
                    group
                    absolute
                    top-1/2
                    -translate-y-1/2
                    cursor-pointer
                    overflow-hidden
                    rounded-[18px]
                    shadow-[0_20px_60px_rgba(15,63,74,0.16)]

                    ${
                      isActive
                        ? `
                          z-30
                          h-[500px]
                          w-[78vw]
                          max-w-[900px]

                          sm:h-[560px]
                          sm:w-[72vw]

                          lg:h-[620px]
                          lg:w-[64vw]
                          lg:max-w-[960px]
                        `
                        : `
                          z-20
                          h-[440px]
                          w-[42vw]
                          max-w-[420px]

                          sm:h-[500px]
                          sm:w-[34vw]

                          lg:h-[550px]
                          lg:w-[27vw]
                        `
                    }

                    ${
                      isPrevious
                        ? `
                          -translate-x-[calc(60vw)]

                          sm:-translate-x-[calc(53vw)]

                          lg:-translate-x-[calc(45.5vw)]
                        `
                        : ""
                    }

                    ${
                      isNext
                        ? `
                          translate-x-[calc(60vw)]

                          sm:translate-x-[calc(53vw)]

                          lg:translate-x-[calc(45.5vw)]
                        `
                        : ""
                    }
                  `}
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <motion.img
                    src={destination.heroImage}
                    alt={destination.name}
                    draggable="false"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* =================================================
                      BASE GRADIENT
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/15
                      to-transparent
                    "
                  />

                  {/* =================================================
                      ACTIVE HOVER OVERLAY
                  ================================================= */}

                  {isActive && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/40
                        to-black/10
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />
                  )}

                  {/* =================================================
                      SIDE CARDS
                  ================================================= */}

                  {!isActive && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        p-5
                        sm:p-7
                      "
                    >
                      <div
                        className="
                          mb-2
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            font-medium
                            tracking-[0.25em]
                            text-[#f47b3a]
                            sm:text-xs
                          "
                        >
                          {formatNumber(destination.originalIndex + 1)}
                        </span>

                        <span
                          className="
                            h-px
                            w-8
                            bg-[#f47b3a]
                          "
                        />
                      </div>

                      <h3
                        className="
                          font-serif
                          text-2xl
                          font-medium
                          text-white
                          sm:text-3xl
                        "
                      >
                        {destination.name}
                      </h3>
                    </div>
                  )}

                  {/* =================================================
                      ACTIVE CARD CONTENT
                  ================================================= */}

                  {isActive && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        translate-y-5
                        p-7
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100

                        sm:p-9
                        md:p-11
                        lg:p-12
                      "
                    >
                      {/* Number */}

                      <div
                        className="
                          mb-3
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-xs
                            font-medium
                            tracking-[0.25em]
                            text-[#f47b3a]
                          "
                        >
                          {formatNumber(destination.originalIndex + 1)}
                        </span>

                        <span
                          className="
                            h-px
                            w-10
                            bg-[#f47b3a]
                          "
                        />
                      </div>

                      {/* Name */}

                      <h3
                        className="
                          font-serif
                          text-4xl
                          font-medium
                          leading-none
                          text-white
                          sm:text-5xl
                          md:text-6xl
                        "
                      >
                        {destination.name}
                      </h3>

                      {/* Tagline */}

                      <p
                        className="
                          mt-3
                          max-w-xl
                          font-serif
                          text-base
                          italic
                          text-white/90
                          sm:text-lg
                        "
                      >
                        {destination.tagline}
                      </p>

                      {/* Description */}

                      <p
                        className="
                          mt-3
                          max-w-xl
                          text-sm
                          leading-6
                          text-white/75
                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {destination.description}
                      </p>

                      {/* Explore Button */}

                      <Link
                        to={`/destinations/${destination.id}`}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                        className="
                          pointer-events-auto
                          group/button
                          mt-6
                          inline-flex
                          cursor-pointer
                          items-center
                          gap-4
                          rounded-md
                          border
                          border-[#f47b3a]
                          px-5
                          py-3
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#f47b3a]
                        "
                      >
                        Explore Now

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                          className="
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                            group-hover/button:-translate-y-1
                          "
                        />
                      </Link>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>

          {/* =====================================================
              LEFT ARROW
          ===================================================== */}

          <button
            type="button"
            aria-label="Previous destination"
            onClick={previousSlide}
            className="
              group
              absolute
              left-4
              top-1/2
              z-50
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#103f4a]
              shadow-[0_8px_30px_rgba(0,0,0,0.16)]
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#f47b3a]
              hover:text-white
              sm:left-6
              sm:h-14
              sm:w-14
              md:left-8
              lg:left-10
              xl:left-12
            "
          >
            <ArrowLeft
              size={22}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </button>

          {/* =====================================================
              RIGHT ARROW
          ===================================================== */}

          <button
            type="button"
            aria-label="Next destination"
            onClick={nextSlide}
            className="
              group
              absolute
              right-4
              top-1/2
              z-50
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#103f4a]
              shadow-[0_8px_30px_rgba(0,0,0,0.16)]
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#f47b3a]
              hover:text-white
              sm:right-6
              sm:h-14
              sm:w-14
              md:right-8
              lg:right-10
              xl:right-12
            "
          >
            <ArrowRight
              size={22}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* =====================================================
            PROGRESS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            w-full
            max-w-md
            px-6
            sm:mt-10
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* Current */}

            <span
              className="
                text-xs
                font-medium
                text-[#103f4a]
              "
            >
              {formatNumber(activeIndex + 1)}
            </span>

            {/* Progress */}

            <div
              className="
                relative
                h-[2px]
                flex-1
                overflow-hidden
                bg-[#103f4a]/15
              "
            >
              <motion.div
                key={activeIndex}
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: isImageHovered ? "0%" : "100%",
                }}
                transition={{
                  duration: isImageHovered ? 0 : 4,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-y-0
                  left-0
                  bg-[#f47b3a]
                "
              />
            </div>

            {/* Total */}

            <span
              className="
                text-xs
                font-medium
                text-[#103f4a]
              "
            >
              {formatNumber(total)}
            </span>
          </div>

          {/* Dots */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {destinationList.map((destination, index) => (
              <button
                key={destination.id || index}
                type="button"
                aria-label={`Go to ${destination.name}`}
                onClick={() => setActiveIndex(index)}
                className="p-1"
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      index === activeIndex
                        ? "h-2.5 w-2.5 bg-[#f47b3a]"
                        : "h-2 w-2 bg-[#103f4a]/20"
                    }
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationSection;