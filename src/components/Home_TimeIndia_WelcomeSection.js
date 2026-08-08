export default function Home_TimeIndia_WelcomeSection() {
  return (
    <section className="w-full bg-[#F2FAFB] py-24 px-6 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-22">
        {/* ================= Left Content ================= */}
        <div
        data-aos="fade-up" 
        data-aos-duration="3000"
        className="w-full lg:w-1/2 space-y-7">

          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-500"></span>

            <span
              className="font-['Inter'] text-[11px] uppercase tracking-[0.28em] text-cyan-700"
            >
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-['Fraunces'] text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[1.08] text-slate-950"
          >
            Welcome to{" "}
            <span className="italic text-cyan-500">
              Times India Travels
            </span>
          </h2>

          {/* Description */}
          <div
            className="space-y-5 font-['Inter'] text-base leading-relaxed text-neutral-700"
          >
            <p>
              Times India Travels is an ideal travel partner for travelers who
              wish to discover the incredible beauty, culture, and diversity of
              India. Our experienced team understands that every traveler is
              different, so every journey is planned around your interests,
              comfort, and schedule.
            </p>

            <p>
              From heritage cities and royal palaces to peaceful mountains,
              beaches, wildlife, and spiritual destinations, we design
              customized itineraries that let you travel at your own pace with
              complete flexibility.
            </p>

            <p>
              Our commitment to quality hospitality, comfortable stays,
              reliable transportation, and dedicated support ensures every trip
              becomes a memorable experience. Let us help you explore India in
              the way you've always imagined.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-12 border-t border-neutral-300 pt-6">
            <div>
              <h3 className="font-['Fraunces'] text-3xl font-medium text-slate-900">
                13+
              </h3>

              <p className="mt-1 font-['Inter'] text-xs uppercase tracking-wider text-neutral-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="font-['Fraunces'] text-3xl font-medium text-slate-900">
                197
              </h3>

              <p className="mt-1 font-['Inter'] text-xs uppercase tracking-wider text-neutral-500">
                TripAdvisor Reviews
              </p>
            </div>
          </div>
        </div>

        {/* ================= Right Image ================= */}
        <div 
        data-aos="fade-right"
        data-aos-duration="3000"
        className="relative w-full lg:w-1/2">

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/21/c0/e4/21c0e4658654b09297fec0479e581a6a.jpg"
              alt="Times India Travels"
              className="h-[430px] w-full object-cover lg:h-[550px]"
            />
          </div>

          {/* Floating Card */}
          <div
            className="absolute bottom-[-15%] left-0 right-0 rounded-2xl bg-white p-6 shadow-xl lg:left-[-10%] lg:right-0 lg:w-[330px]"
          >
            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 font-semibold text-white">
                T
              </div>

              <span className="font-['Inter'] text-xs uppercase tracking-wider text-neutral-500">
                Tripadvisor
              </span>
            </div>

            <h3 className="font-['Inter'] text-lg font-semibold text-slate-900">
              Times India Travels
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-amber-400">
                ★★★★★
              </span>

              <span className="font-['Inter'] text-sm text-neutral-500">
                197 Reviews
              </span>
            </div>

            <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-neutral-500">
              Ranked <strong className="font-bold text-black">#23</strong> among Outdoor Activities in Jaipur.
            </p>

            <div className="mt-5 flex gap-5 font-['Inter'] text-xs uppercase tracking-wider">

              <a
                href="#"
                className="border-b border-cyan-500 text-cyan-500 transition-colors hover:text-cyan-700"
              >
                Read Reviews
              </a>

              <a
                href="#"
                className="border-b border-neutral-300 text-neutral-500 transition-colors hover:text-slate-900"
              >
                Write Review
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}