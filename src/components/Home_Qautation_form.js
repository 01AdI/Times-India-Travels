import { useState } from "react";

export default function Home_Qautation_form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    duration: "",
    travelDate: "",
    adults: "",
    children: "",
    tourPackage: "",
    hotelType: "",
    reference: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", form);
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/[0.08] px-4 py-3.5 text-sm text-white placeholder-white/45 focus:outline-none focus:border-[#F58634] focus:ring-2 focus:ring-[#F58634]/20 focus:bg-white/[0.11] transition-all duration-300";

  const labelClass =
    "block text-[11px] uppercase tracking-[0.12em] text-white/75 mb-2 font-['Inter'] font-medium";

  const selectClass = inputClass + " appearance-none cursor-pointer";

  return (
    <section id="quatation" className="relative w-full py-24 px-6 md:px-14 overflow-hidden border-t border-[#C9A24B]/25 bg-[#F2FAFB] flex items-center justify-center">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2200&q=85"
        alt="India travel"
      />

      {/* =========================================================
          DARK OVERLAY
      ========================================================== */}

      {/* Overall dark layer */}
      <div className="absolute inset-0 bg-[#050B14]/40" />

      {/* Stronger center darkness behind the form */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(18,77,86,0.18) 0%, rgba(18,77,86,0.12) 45%, rgba(18,77,86,0.28) 100%)",
        }}
      />

      {/* Subtle orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(245,134,52,0.08), transparent 30%), radial-gradient(circle at 85% 80%, rgba(30,165,190,0.08), transparent 30%)",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div className="relative max-w-4xl w-full mx-auto z-10">
        {/* =======================================================
            HEADING
        ======================================================== */}
        <div className="text-center mb-10">
          <span className="font-['Inter'] text-[13px] font-semibold uppercase tracking-[0.28em] text-[#F58634]">
            Plan Your Trip
          </span>

          <h2 className="font-['Fraunces'] font-medium text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mt-4">
            Get a Free, No-Obligation Quote
          </h2>

          <p className="font-['Inter'] text-white/70 text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            Tell us roughly what you have in mind — we'll come back with a
            tailored itinerary, usually within one business day.
          </p>
        </div>

        {/* =======================================================
            TRUST STRIP
        ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 font-['Inter'] text-[12px] uppercase tracking-[0.06em] text-white/65">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58634]" />
            Govt. of India Approved
          </span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58634]" />
            24×7 Support
          </span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58634]" />
            100% Tailor-Made
          </span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58634]" />
            Solo Traveller Care
          </span>
        </div>

        {/* =======================================================
            FORM
        ======================================================== */}
        <form
          data-aos="zoom-in"
          data-aos-duration="2500"
          onSubmit={handleSubmit}
          className="
            relative
            rounded-3xl
            border border-white/15
            bg-[#124d56]/30
            backdrop-blur-xl
            p-7
            md:p-10
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#F58634]/50 to-transparent" />

          {/* =====================================================
              FORM GRID
          ====================================================== */}
          <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {/* NAME */}
            <div>
              <label className={labelClass} htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your full name"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            {/* NATIONALITY */}
            <div>
              <label className={labelClass} htmlFor="nationality">
                Nationality
              </label>

              <select
                id="nationality"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select nationality
                </option>

                <option value="us" className="bg-[#07111f]">
                  United States
                </option>

                <option value="uk" className="bg-[#07111f]">
                  United Kingdom
                </option>

                <option value="ca" className="bg-[#07111f]">
                  Canada
                </option>

                <option value="au" className="bg-[#07111f]">
                  Australia
                </option>

                <option value="other" className="bg-[#07111f]">
                  Other
                </option>
              </select>
            </div>

            {/* DURATION */}
            <div>
              <label className={labelClass} htmlFor="duration">
                Duration of Travel
              </label>

              <input
                id="duration"
                name="duration"
                type="text"
                value={form.duration}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 10 days"
              />
            </div>

            {/* TRAVEL DATE */}
            <div>
              <label className={labelClass} htmlFor="travelDate">
                Travel Date
              </label>

              <input
                id="travelDate"
                name="travelDate"
                type="date"
                value={form.travelDate}
                onChange={handleChange}
                className={inputClass + " [color-scheme:dark]"}
              />
            </div>

            {/* ADULTS */}
            <div>
              <label className={labelClass} htmlFor="adults">
                Adults
              </label>

              <select
                id="adults"
                name="adults"
                value={form.adults}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select
                </option>

                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-[#07111f]">
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* CHILDREN */}
            <div>
              <label className={labelClass} htmlFor="children">
                Children
              </label>

              <select
                id="children"
                name="children"
                value={form.children}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select
                </option>

                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n} className="bg-[#07111f]">
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* TOUR PACKAGE */}
            <div>
              <label className={labelClass} htmlFor="tourPackage">
                Tour Package
              </label>

              <select
                id="tourPackage"
                name="tourPackage"
                value={form.tourPackage}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select a package
                </option>

                <option value="golden-triangle" className="bg-[#07111f]">
                  Golden Triangle
                </option>

                <option value="rajasthan" className="bg-[#07111f]">
                  Rajasthan Tour
                </option>

                <option value="kerala" className="bg-[#07111f]">
                  Kerala Backwaters
                </option>

                <option value="himalayas" className="bg-[#07111f]">
                  Himalayan Adventure
                </option>

                <option value="custom" className="bg-[#07111f]">
                  Custom / Not Sure Yet
                </option>
              </select>
            </div>

            {/* HOTEL TYPE */}
            <div>
              <label className={labelClass} htmlFor="hotelType">
                Type of Hotel
              </label>

              <select
                id="hotelType"
                name="hotelType"
                value={form.hotelType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select
                </option>

                <option value="budget" className="bg-[#07111f]">
                  Budget
                </option>

                <option value="standard" className="bg-[#07111f]">
                  Standard
                </option>

                <option value="luxury" className="bg-[#07111f]">
                  Luxury
                </option>

                <option value="heritage" className="bg-[#07111f]">
                  Heritage Property
                </option>
              </select>
            </div>

            {/* REFERENCE */}
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="reference">
                How Did You Hear About Us?
              </label>

              <select
                id="reference"
                name="reference"
                value={form.reference}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" className="bg-[#07111f]">
                  Select
                </option>

                <option value="google" className="bg-[#07111f]">
                  Google Search
                </option>

                <option value="tripadvisor" className="bg-[#07111f]">
                  TripAdvisor
                </option>

                <option value="referral" className="bg-[#07111f]">
                  Friend / Family Referral
                </option>

                <option value="social" className="bg-[#07111f]">
                  Social Media
                </option>

                <option value="other" className="bg-[#07111f]">
                  Other
                </option>
              </select>
            </div>

            {/* DETAILS */}
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="details">
                Rough Itinerary & Details
              </label>

              <textarea
                id="details"
                name="details"
                rows={4}
                value={form.details}
                onChange={handleChange}
                className={inputClass + " resize-none"}
                placeholder="Tell us a little about what you're picturing — places you want to see, pace, budget range, anything helpful."
              />
            </div>
          </div>

          {/* =====================================================
              SUBMIT BUTTON
          ====================================================== */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#F58634]
                hover:bg-[#D9701F]
                hover:shadow-[0_10px_30px_rgba(245,134,52,0.25)]
                text-white
                font-['Inter']
                font-semibold
                text-sm
                tracking-wide
                rounded-full
                px-10
                py-4
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Submit Your Request
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
