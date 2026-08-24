import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Destination_Category({ data }) {
  const categories = data?.category || [];

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  /*
  ============================================================
  ACTIVE CATEGORY
  ============================================================
  */

  const selectedCategory = categories[activeCategory];

  /*
  ============================================================
  GALLERY
  ============================================================
  */

  const gallery = selectedCategory?.destinations_gallery || [];

  const currentImage = gallery[activeImage];

  /*
  ============================================================
  CHANGE CATEGORY
  ============================================================
  */

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setActiveImage(0);
  };

  /*
  ============================================================
  AUTO CHANGE ONLY IMAGE
  ------------------------------------------------------------
  Category remains completely controlled by the user.
  ============================================================
  */

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % gallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gallery.length, activeCategory]);

  /*
  ============================================================
  CATEGORY COUNT
  ============================================================
  */

  const categoryNumber = (index) =>
    String(index + 1).padStart(2, "0");

  /*
  ============================================================
  EMPTY STATE
  ============================================================
  */

  if (!data || !categories.length) {
    return null;
  }

  return (
    <section
      id="destination-categories"
      className="
        relative
        overflow-hidden
        bg-[#124d56]
        py-13
        sm:py-13
        md:py-14
        lg:py-15
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F58634]/6
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-black/10
          blur-[100px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          sm:px-10
          lg:px-14
          xl:px-20
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-14
            max-w-3xl
            sm:mb-16
            lg:mb-20
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-cyan-300
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-cyan-300
                sm:text-xs
              "
            >
              Explore {data.name}
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              font-['Fraunces']
              text-4xl
              font-medium
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Journeys shaped by{" "}
            <span className="italic text-cyan-300">
              place.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/65
              sm:text-base
              sm:leading-8
            "
          >
            Choose a region to discover the landscapes,
            culture and experiences waiting within it.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[280px_minmax(0,1fr)]
            lg:gap-16
            xl:grid-cols-[320px_minmax(0,1fr)]
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — CATEGORY NAVIGATION
          ================================================= */}

          <div
            className="
              lg:sticky
              lg:top-28
            "
          >
            <div
              className="
                mb-6
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/35
              "
            >
              Explore regions
            </div>

            <div className="space-y-1">
              {categories.map((category, index) => {
                const isActive = index === activeCategory;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(index)}
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      border-b
                      border-white/10
                      py-5
                      text-left
                    "
                  >
                    {/* Active indicator */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-[#F58634]
                        transition-transform
                        duration-500
                        origin-top

                        ${
                          isActive
                            ? "scale-y-100"
                            : "scale-y-0"
                        }
                      `}
                    />

                    {/* Number */}

                    <span
                      className={`
                        pl-4
                        text-[10px]
                        tracking-[0.2em]
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-[#F58634]"
                            : "text-white/30 group-hover:text-white/60"
                        }
                      `}
                    >
                      {categoryNumber(index)}
                    </span>

                    {/* Name */}

                    <span
                      className={`
                        font-['Fraunces']
                        text-xl
                        transition-all
                        duration-300
                        sm:text-2xl

                        ${
                          isActive
                            ? "translate-x-1 text-white"
                            : "text-white/45 group-hover:text-white/80"
                        }
                      `}
                    >
                      {category.name}
                    </span>

                    {/* Arrow */}

                    <ChevronRight
                      size={16}
                      strokeWidth={1.5}
                      className={`
                        ml-auto
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "translate-x-0 text-[#F58634] opacity-100"
                            : "-translate-x-2 text-white opacity-0 group-hover:opacity-50"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* Category description */}

            <AnimatePresence mode="wait">
              <motion.p
                key={selectedCategory.id}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  mt-8
                  max-w-xs
                  text-sm
                  leading-7
                  text-white/50
                "
              >
                {selectedCategory.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* =================================================
              RIGHT — GALLERY
          ================================================= */}

          <div className="min-w-0">
            {/* =================================================
                IMAGE FRAME
            ================================================= */}

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[3px]
                bg-black/20
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  sm:aspect-[16/8.5]
                  lg:aspect-[16/8.2]
                  xl:aspect-[16/8]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selectedCategory.id}-${activeImage}`}
                    src={currentImage?.url}
                    alt={
                      currentImage?.caption ||
                      selectedCategory.name
                    }
                    initial={{
                      opacity: 0,
                      scale: 1.025,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </AnimatePresence>

                {/* Bottom gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-black/65
                    to-transparent
                  "
                />

                {/* Category label */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    items-center
                    gap-3
                    sm:left-7
                    sm:top-7
                  "
                >
                  <span
                    className="
                      h-px
                      w-8
                      bg-[#F58634]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-white/85
                    "
                  >
                    {selectedCategory.name}
                  </span>
                </div>

                {/* Image counter */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    text-[10px]
                    tracking-[0.2em]
                    text-white/70
                    sm:right-7
                    sm:top-7
                  "
                >
                  {String(activeImage + 1).padStart(2, "0")}
                  {" / "}
                  {String(gallery.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* =================================================
                IMAGE INFORMATION
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-6
                border-b
                border-white/10
                pb-8
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              {/* Caption */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory.id}-${activeImage}-caption`}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#F58634]
                    "
                  >
                    Currently viewing
                  </p>

                  <p
                    className="
                      mt-2
                      font-['Fraunces']
                      text-2xl
                      text-white
                      sm:text-3xl
                    "
                  >
                    {currentImage?.caption}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}

              <Link
                to={`/tour/${selectedCategory.id}`}
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-4
                  self-start
                  rounded-full
                  border
                  border-[#F58634]
                  px-5
                  py-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#F58634]
                  sm:self-auto
                "
              >
                View Tour Packages

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            {/* =================================================
                IMAGE PROGRESS
            ================================================= */}

            {gallery.length > 1 && (
              <div className="mt-6 flex gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className="
                      h-[2px]
                      flex-1
                      overflow-hidden
                      bg-white/15
                    "
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        width:
                          index === activeImage
                            ? "100%"
                            : "0%",
                      }}
                      transition={{
                        duration:
                          index === activeImage
                            ? 3
                            : 0.2,
                        ease: "linear",
                      }}
                      className="
                        block
                        h-full
                        bg-[#F58634]
                      "
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}