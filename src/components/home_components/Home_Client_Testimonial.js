import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "David & Carol",
    location: "United Kingdom",
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2023/06/David-and-Carol-from-UK-.mp4",
  },
  {
    id: 2,
    name: "John & Audrey",
    location: "Scotland",
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2023/06/John-and-Audrey-from-Scottland-.mp4",
  },
  {
    id: 3,
    name: "Jackie & Keith",
    location: "United Kingdom",
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2023/06/Jackie-Keith-from-UK-.mp4",
  },
  {
    id: 4,
    name: "David & Linda Valdes",
    location: "USA · Hollywood",
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2023/06/David-and-Linda-Valdes-USA-from-Hollywood-.mp4",
  },
  {
    id: 5,
    name: "Our Happy Travellers",
    location: "International",
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2019/07/memed-io-output-1.webm",
  },
];

export default function Home_Client_Testimonials() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % testimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideo(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentVideo];

  return (
    <section className="overflow-hidden w-full py-12 border-y border-[#C9A24B]/25 bg-[#F2FAFB] px-6 md:px-14">
      <div className="max-w-4xl mx-auto">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F58634]">
            Client Words
          </span>

          <h2 className="mt-3 font-['Fraunces'] text-4xl font-semibold text-[#123138] md:text-5xl">
            What Our Client Says
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-[#F58634]" />

        </div>

        {/* =========================
            VIDEO CONTAINER
        ========================== */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-[#1EA5BE]/20">

          {/* =========================
              PREVIOUS BUTTON
          ========================== */}
          <div className="absolute inset-y-0 left-4 flex items-center z-20">
            <button
              onClick={prevVideo}
              aria-label="Previous testimonial"
              className="
                cursor-pointer
                w-11
                h-11
                rounded-full
                bg-black/35
                backdrop-blur-md
                border
                border-white/20
                text-white
                text-xl
                hover:bg-[#F58634]
                transition-all
                duration-300
              "
            >
              ❮
            </button>
          </div>

          {/* =========================
              NEXT BUTTON
          ========================== */}
          <div className="absolute inset-y-0 right-4 flex items-center z-20">
            <button
              onClick={nextVideo}
              aria-label="Next testimonial"
              className="
                cursor-pointer
                w-11
                h-11
                rounded-full
                bg-black/35
                backdrop-blur-md
                border
                border-white/20
                text-white
                text-xl
                hover:bg-[#F58634]
                transition-all
                duration-300
              "
            >
              ❯
            </button>
          </div>

          {/* =========================
              VIDEO
          ========================== */}
          <div className="aspect-video rounded-2xl relative">
            <video
              key={currentTestimonial.id}
              className="w-full h-full object-cover rounded-2xl"
              controls
              autoPlay
              playsInline
              muted
              onEnded={nextVideo}
            >
              <source
                src={currentTestimonial.video}
                type={
                  currentTestimonial.video.endsWith(".webm")
                    ? "video/webm"
                    : "video/mp4"
                }
              />
            </video>

            {/* =========================
                FULL WIDTH TESTIMONIAL OVERLAY
            ========================== */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-10
                px-5
                py-3
                md:px-7
                md:py-3.5
                bg-[#032322]/85
                backdrop-blur-md
                border-t
                border-white/10
                pointer-events-none
              "
            >
              <div className="flex flex-col">

                {/* Name */}
                <span
                  className="
                    text-white
                    text-sm
                    md:text-base
                    font-semibold
                    leading-tight
                  "
                >
                  {currentTestimonial.name}
                </span>

                {/* Location */}
                <span
                  className="
                    mt-1
                    text-white/65
                    text-[11px]
                    md:text-xs
                    tracking-wide
                  "
                >
                  {currentTestimonial.location}
                </span>

              </div>
            </div>
          </div>
        </div>

        {/* =========================
            VIDEO INDICATORS
        ========================== */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentVideo(index)}
              aria-label={`View testimonial from ${testimonial.name}`}
              className={`
                transition-all
                duration-300
                rounded-full
                cursor-pointer
                ${
                  currentVideo === index
                    ? "w-3.5 h-2.5 bg-[#F58634]"
                    : "w-2.5 h-2.5 bg-black/30 hover:bg-black/60"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}