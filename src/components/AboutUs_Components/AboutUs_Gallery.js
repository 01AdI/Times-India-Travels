import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryPhotos = [
  {
    src: "https://www.timesindiatravels.com/wp-content/uploads/2019/09/IMG_6376.jpg",
    number: "01",
    place: "India",
    title: "Moments that become memories",
  },
  {
    src: "https://www.timesindiatravels.com/wp-content/uploads/2019/09/IMG_6415.jpg",
    number: "02",
    place: "Rajasthan",
    title: "A journey through royal India",
  },
  {
    src: "https://www.timesindiatravels.com/wp-content/uploads/2019/09/IMG_6419.jpg",
    number: "03",
    place: "India",
    title: "India, experienced differently",
  },
  {
    src: "https://www.timesindiatravels.com/wp-content/uploads/2019/09/IMG_7638.jpg",
    number: "04",
    place: "India",
    title: "The stories between the destinations",
  },
  {
    src: "https://www.timesindiatravels.com/wp-content/uploads/2019/10/Travel-from-South-Africa-2.jpg",
    number: "05",
    place: "India",
    title: "Travellers from around the world",
  },
];

export default function AboutUs_Gallery() {

  const [current, setCurrent] = useState(0);

  const activePhoto = galleryPhotos[current];
    
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % galleryPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
    }, []);

  const nextPhoto = () => {
    setCurrent((prev) => (prev + 1) % galleryPhotos.length);
  };

  const previousPhoto = () => {
    setCurrent(
      (prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F2FAFB] py-13 md:py-14">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#124d56]/[0.035]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#F58634]/[0.035]
          blur-3xl
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">


        {/* =====================================================
            CENTERED SECTION HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">

          {/* Small label */}

          <span
            className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9701F]"
          >
            The Journey, Remembered
          </span>


          {/* Main heading */}

          <h2
            className="font-['Fraunces'] font-medium text-[#0B3C49] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-4"
          >
            Stories
            <br />
            <span className="italic">
              They Took Home.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              font-['Inter']
              text-[#124d56]/65
              text-[15px]
              leading-[1.8]
              mt-6
              max-w-xl
              mx-auto
            "
          >
            Some journeys end when you return home. The best ones stay
            with you. These are a few moments shared by travellers who
            discovered India with us.
          </p>

        </div>


        {/* =====================================================
            MAIN EDITORIAL GALLERY
        ====================================================== */}

        <div className="relative">


          {/* ===================================================
              FEATURED IMAGE FRAME
          ==================================================== */}

          <div className="relative">


            {/* =================================================
                IMAGE CONTAINER
            ================================================== */}

            <div
              className="
                relative
                h-[520px]
                md:h-[650px]
                lg:h-[720px]
                overflow-hidden
                rounded-[2rem]
                bg-[#124d56]
              "
            >


              {/* =================================================
                  BLURRED BACKGROUND IMAGE

                  This fills the complete frame while the actual
                  photograph remains uncropped in the foreground.
              ================================================== */}

              <AnimatePresence mode="wait">

                <motion.img
                  key={`background-${activePhoto.src}`}
                  src={activePhoto.src}
                  alt=""
                  aria-hidden="true"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    scale-110
                    blur-2xl
                    opacity-40
                  "
                />

              </AnimatePresence>


              {/* =================================================
                  TEAL OVERLAY
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[#124d56]/55
                  pointer-events-none
                "
              />


              {/* =================================================
                  ACTUAL PHOTOGRAPH

                  object-contain keeps the complete photograph
                  visible instead of cutting people's faces.
              ================================================== */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={activePhoto.src}
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    p-5
                    md:p-8
                    lg:p-10
                  "
                >

                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="
                      w-full
                      h-full
                      object-contain
                      rounded-[1.25rem]
                      drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                    "
                  />

                </motion.div>

              </AnimatePresence>


              {/* =================================================
                  BOTTOM GRADIENT

                  Helps the title remain readable.
              ================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-gradient-to-t
                  from-black/65
                  via-black/15
                  to-transparent
                  pointer-events-none
                "
              />


              {/* =================================================
                  TOP LEFT LABEL
              ================================================== */}

              <div
                className="
                  absolute
                  top-7
                  left-7
                  md:top-10
                  md:left-10
                "
              >

                <span
                  className="
                    inline-flex
                    items-center
                    gap-3
                    font-['Inter']
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/80
                  "
                >

                  <span className="w-8 h-px bg-[#F58634]" />

                  Traveller Stories

                </span>

              </div>


              {/* =================================================
                  IMAGE COUNTER
              ================================================== */}

              <div
                className="
                  absolute
                  top-7
                  right-7
                  md:top-10
                  md:right-10
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    font-['Fraunces']
                    text-white
                    text-xl
                  "
                >
                  {activePhoto.number}
                </span>

                <span className="w-8 h-px bg-white/40" />

                <span
                  className="
                    font-['Inter']
                    text-[10px]
                    tracking-[0.2em]
                    text-white/60
                  "
                >
                  {String(galleryPhotos.length).padStart(2, "0")}
                </span>

              </div>


              {/* =================================================
                  IMAGE TITLE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-8
                  left-7
                  right-7
                  md:bottom-12
                  md:left-12
                  md:right-12
                "
              >

                <AnimatePresence mode="wait">

                  <motion.div
                    key={activePhoto.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    {/* Location */}

                    <p
                      className="
                        font-['Inter']
                        text-[10px]
                        uppercase
                        tracking-[0.28em]
                        text-[#F58634]
                        font-semibold
                        mb-3
                      "
                    >
                      {activePhoto.place}
                    </p>


                    {/* Story title */}

                    <h3
                      className="
                        font-['Fraunces']
                        text-white
                        text-[clamp(2rem,4vw,3.5rem)]
                        leading-tight
                        max-w-2xl
                      "
                    >
                      {activePhoto.title}
                    </h3>

                  </motion.div>

                </AnimatePresence>

              </div>

            </div>


            {/* =================================================
                FLOATING NAVIGATION
            ================================================== */}

            <div
              className="
                absolute
                bottom-[-28px]
                right-6
                md:right-10
                flex
                items-center
                bg-[#124d56]
                rounded-full
                p-1.5
                shadow-[0_20px_45px_rgba(18,77,86,0.25)]
              "
            >

              {/* Previous */}

              <button
                type="button"
                onClick={previousPhoto}
                aria-label="Previous photograph"
                className="
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white/70
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <ArrowLeft className="w-4 h-4 cursor-pointer" />
              </button>


              {/* Next */}

              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photograph"
                className="
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#F58634]
                  text-white
                  hover:bg-[#D9701F]
                  transition-all
                  duration-300
                "
              >
                <ArrowRight className="w-4 h-4 cursor-pointer" />
              </button>

            </div>

          </div>


          {/* =====================================================
              PHOTO STORY REEL
          ====================================================== */}

          <div className="mt-14 md:mt-16">

            <div
              className="
                flex
                gap-4
                md:gap-6
                overflow-x-auto
                pb-4
                scrollbar-hide
              "
            >

              {galleryPhotos.map((photo, index) => {

                const isActive = index === current;

                return (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className="
                      group
                      relative
                      shrink-0
                      text-left
                    "
                  >

                    {/* =========================================
                        THUMBNAIL
                    ========================================== */}

                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-xl
                        transition-all
                        duration-500
                        cursor-pointer

                        ${
                          isActive
                            ? "w-[190px] md:w-[230px] h-[120px] md:h-[145px]"
                            : "w-[150px] md:w-[180px] h-[100px] md:h-[120px]"
                        }
                      `}
                    >

                      <img
                        src={photo.src}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />


                      {/* Thumbnail overlay */}

                      <div
                        className={`
                          absolute
                          inset-0
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-[#124d56]/10"
                              : "bg-[#124d56]/35 group-hover:bg-[#124d56]/10"
                          }
                        `}
                      />


                      {/* Orange active line */}

                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[3px]
                          bg-[#F58634]
                          transition-all
                          duration-500

                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />

                    </div>


                    {/* =========================================
                        THUMBNAIL INFORMATION
                    ========================================== */}

                    <div className="flex items-center gap-3 mt-3">

                      <span
                        className={`
                          font-['Inter']
                          text-[10px]
                          tracking-[0.15em]

                          ${
                            isActive
                              ? "text-[#F58634]"
                              : "text-[#124d56]/35"
                          }
                        `}
                      >
                        {photo.number}
                      </span>

                      <span
                        className={`
                          font-['Inter']
                          text-[10px]
                          uppercase
                          tracking-[0.15em]
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-[#124d56]"
                              : "text-[#124d56]/40"
                          }
                        `}
                      >
                        {photo.place}
                      </span>

                    </div>

                  </button>
                );
              })}

            </div>

          </div>


          {/* =====================================================
              BOTTOM BRAND STATEMENT
          ====================================================== */}

          <div
            className="
              mt-16
              md:mt-20
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
            "
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <span className="w-12 h-px bg-[#F58634]" />

              <span
                className="
                  font-['Inter']
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#124d56]/45
                "
              >
                Your journey awaits
              </span>

            </div>


            {/* Right */}

            <p
              className="
                font-['Fraunces']
                italic
                text-lg
                md:text-xl
                text-[#124d56]/65
              "
            >
              Come as a traveller. Leave with a story.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}