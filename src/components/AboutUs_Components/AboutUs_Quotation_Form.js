import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AboutUs_Quotation_Form({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

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

  // ----------------------------------------------------------
  // Prevent background scrolling
  // ----------------------------------------------------------

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ----------------------------------------------------------
  // Handle input
  // ----------------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ----------------------------------------------------------
  // Submit
  // ----------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("About Us Quote Request:", form);

    setSubmitted(true);
  };

  // ----------------------------------------------------------
  // ESC key
  // ----------------------------------------------------------

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // ----------------------------------------------------------
  // Styling
  // ----------------------------------------------------------

  const inputClass = `
    w-full
    rounded-xl
    border
    border-[#124d56]/15
    bg-white
    px-4
    py-3
    text-sm
    text-[#0B3C49]
    placeholder:text-[#124d56]/35
    outline-none
    transition-all
    duration-300
    focus:border-[#F58634]
    focus:ring-4
    focus:ring-[#F58634]/10
  `;

  const labelClass = `
    block
    mb-2
    text-[10px]
    sm:text-[11px]
    uppercase
    tracking-[0.16em]
    font-semibold
    text-[#124d56]/65
  `;

  const selectClass = `${inputClass} cursor-pointer`;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-[#061B1F]/70
        p-4
        backdrop-blur-md
        md:p-8
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =====================================================
          MODAL
      ====================================================== */}

      <div
        className="
          relative
          my-6
          flex
          w-full
          max-w-5xl
          max-h-[94vh]
          flex-col
          overflow-hidden
          rounded-[26px]
          bg-[#F2FAFB]
          shadow-[0_40px_120px_rgba(0,0,0,0.4)]
          animate-[modalIn_.3s_ease-out]
        "
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            relative
            shrink-0
            overflow-hidden
            bg-[#124d56]
            px-6
            py-7
            sm:px-9
            sm:py-8
          "
        >
          {/* Orange decorative glow */}

          <div
            className="
              absolute
              -right-20
              -top-28
              h-64
              w-64
              rounded-full
              bg-[#F58634]/10
              blur-3xl
            "
          />

          {/* Teal decorative glow */}

          <div
            className="
              absolute
              -left-24
              -bottom-32
              h-64
              w-64
              rounded-full
              bg-white/[0.04]
              blur-3xl
            "
          />

          {/* Top orange accent */}

          <div
            className="
              absolute
              left-10
              right-10
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#F58634]
              to-transparent
              opacity-80
            "
          />

          <div className="relative pr-12">
            <p
              className="
                font-['Inter']
                text-[10px]
                sm:text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#F58634]
              "
            >
              Plan Your Journey
            </p>

            <h2
              className="
                mt-2
                font-['Fraunces']
                text-3xl
                sm:text-4xl
                font-medium
                tracking-tight
                text-white
              "
            >
              Tell Us About Your Trip
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                font-['Inter']
                text-sm
                leading-relaxed
                text-white/65
              "
            >
              Give us a few details about your plans and our
              travel experts will help shape the journey around
              you.
            </p>
          </div>

          {/* =================================================
              CLOSE BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quotation form"
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white/70
              transition-all
              duration-300
              hover:rotate-90
              hover:border-white/30
              hover:bg-white/20
              hover:text-white
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ===================================================
            SCROLLABLE CONTENT
        ==================================================== */}

        <div className="min-h-0 flex-1 overflow-y-auto">
          {!submitted ? (
            <>
              {/* =================================================
                  TRUST STRIP
              ================================================== */}

              <div
                className="
                  mx-5
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-7
                  gap-y-3
                  rounded-2xl
                  border
                  border-[#124d56]/10
                  bg-white
                  px-5
                  py-4
                  font-['Inter']
                  text-[10px]
                  uppercase
                  tracking-[0.07em]
                  text-[#124d56]/55
                  sm:mx-8
                  lg:mx-9
                "
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />
                  Govt. of India Approved
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />
                  24×7 Support
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />
                  100% Tailor-Made
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />
                  Personalised Planning
                </span>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="
                  mx-5
                  mb-6
                  mt-6
                  rounded-[24px]
                  border
                  border-[#124d56]/10
                  bg-white
                  p-5
                  shadow-[0_10px_40px_rgba(18,77,86,0.05)]
                  sm:mx-8
                  sm:p-7
                  lg:mx-9
                  lg:p-8
                "
              >
                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">

                  {/* =================================================
                      NAME
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-name"
                    >
                      Name
                    </label>

                    <input
                      id="about-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-email"
                    >
                      Email
                    </label>

                    <input
                      id="about-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* =================================================
                      PHONE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-phone"
                    >
                      Phone
                    </label>

                    <input
                      id="about-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  {/* =================================================
                      NATIONALITY
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-nationality"
                    >
                      Nationality
                    </label>

                    <input
                      id="about-nationality"
                      name="nationality"
                      type="text"
                      value={form.nationality}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g. United States"
                    />
                  </div>

                  {/* =================================================
                      DURATION
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-duration"
                    >
                      Duration of Travel
                    </label>

                    <input
                      id="about-duration"
                      name="duration"
                      type="text"
                      value={form.duration}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g. 10 days"
                    />
                  </div>

                  {/* =================================================
                      TRAVEL DATE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-date"
                    >
                      Travel Date
                    </label>

                    <input
                      id="about-date"
                      name="travelDate"
                      type="date"
                      value={form.travelDate}
                      onChange={handleChange}
                      className={`${inputClass} [color-scheme:light]`}
                    />
                  </div>

                  {/* =================================================
                      ADULTS
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-adults"
                    >
                      Adults
                    </label>

                    <select
                      id="about-adults"
                      name="adults"
                      value={form.adults}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select</option>

                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* =================================================
                      CHILDREN
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-children"
                    >
                      Children
                    </label>

                    <select
                      id="about-children"
                      name="children"
                      value={form.children}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select</option>

                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* =================================================
                      TOUR PACKAGE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-tour-package"
                    >
                      Tour Package
                    </label>

                    <select
                      id="about-tour-package"
                      name="tourPackage"
                      value={form.tourPackage}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">
                        Select a package
                      </option>

                      <option value="golden-triangle">
                        Golden Triangle
                      </option>

                      <option value="rajasthan">
                        Rajasthan Tour
                      </option>

                      <option value="kerala">
                        Kerala Backwaters
                      </option>

                      <option value="himalayas">
                        Himalayan Adventure
                      </option>

                      <option value="custom">
                        Custom / Not Sure Yet
                      </option>
                    </select>
                  </div>

                  {/* =================================================
                      HOTEL TYPE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="about-hotel-type"
                    >
                      Type of Hotel
                    </label>

                    <select
                      id="about-hotel-type"
                      name="hotelType"
                      value={form.hotelType}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="budget">
                        Budget
                      </option>

                      <option value="standard">
                        Standard
                      </option>

                      <option value="luxury">
                        Luxury
                      </option>

                      <option value="heritage">
                        Heritage Property
                      </option>
                    </select>
                  </div>

                  {/* =================================================
                      REFERENCE
                  ================================================== */}

                  <div className="sm:col-span-2">
                    <label
                      className={labelClass}
                      htmlFor="about-reference"
                    >
                      How Did You Hear About Us?
                    </label>

                    <select
                      id="about-reference"
                      name="reference"
                      value={form.reference}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="google">
                        Google Search
                      </option>

                      <option value="tripadvisor">
                        TripAdvisor
                      </option>

                      <option value="referral">
                        Friend / Family Referral
                      </option>

                      <option value="social">
                        Social Media
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* =================================================
                      DETAILS
                  ================================================== */}

                  <div className="sm:col-span-2">
                    <label
                      className={labelClass}
                      htmlFor="about-details"
                    >
                      Rough Itinerary & Details
                    </label>

                    <textarea
                      id="about-details"
                      name="details"
                      rows={4}
                      value={form.details}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us a little about what you're picturing — places you want to see, pace, budget range, anything helpful."
                    />
                  </div>
                </div>

                {/* =================================================
                    BOTTOM ACTION
                ================================================== */}

                <div
                  className="
                    mt-7
                    flex
                    flex-col-reverse
                    gap-5
                    border-t
                    border-[#124d56]/10
                    pt-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <p
                    className="
                      max-w-md
                      font-['Inter']
                      text-xs
                      leading-relaxed
                      text-[#124d56]/50
                    "
                  >
                    Share as much or as little as you know.
                    Our travel team will help shape the journey
                    around your requirements.
                  </p>

                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#F58634]
                      px-7
                      py-3.5
                      font-['Inter']
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_12px_30px_-12px_rgba(245,134,52,0.65)]
                      transition-all
                      duration-300
                      hover:bg-[#D9701F]
                      hover:shadow-[0_16px_35px_-10px_rgba(245,134,52,0.7)]
                      active:scale-[0.98]
                    "
                  >
                    Send Enquiry

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </form>

              {/* =================================================
                  FOOTER NOTE
              ================================================== */}

              <div className="px-6 pb-7 text-center">
                <p
                  className="
                    font-['Inter']
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-[#124d56]/35
                  "
                >
                  No obligation · Personalised planning · India
                  travel specialists
                </p>
              </div>
            </>
          ) : (
            /* =================================================
               SUCCESS STATE
            ================================================== */

            <div
              className="
                flex
                min-h-[500px]
                flex-col
                items-center
                justify-center
                px-6
                py-16
                text-center
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#124d56]/10
                "
              >
                <CheckCircle2
                  className="h-8 w-8 text-[#124d56]"
                />
              </div>

              <span
                className="
                  mt-6
                  font-['Inter']
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#F58634]
                "
              >
                Request Received
              </span>

              <h3
                className="
                  mt-3
                  font-['Fraunces']
                  text-3xl
                  sm:text-4xl
                  font-medium
                  text-[#0B3C49]
                "
              >
                Your journey starts here.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  font-['Inter']
                  text-sm
                  leading-relaxed
                  text-[#124d56]/60
                "
              >
                Thank you for reaching out to Times India
                Travels. Our travel team will review your
                request and get back to you with a tailored
                itinerary.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  mt-7
                  cursor-pointer
                  rounded-full
                  bg-[#124d56]
                  px-7
                  py-3
                  font-['Inter']
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0B3C49]
                  hover:shadow-[0_10px_30px_rgba(18,77,86,0.2)]
                "
              >
                Back to About Us
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}