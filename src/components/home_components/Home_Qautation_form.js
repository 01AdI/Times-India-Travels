import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import CountrySelect from "../../utils/CountrySelect";

export default function Home_Qautation_form() {
  /* =========================================================
     FORM STATE
  ========================================================== */

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

  /* =========================================================
     TOUR PACKAGES
  ========================================================== */

  const tourPackages = [
    {
      id: "golden-triangle-tours",
      name: "Golden Triangle Tours",
    },
    {
      id: "rajasthan-tours",
      name: "Rajasthan Tours",
    },
    {
      id: "south-india-tours",
      name: "South India Tours",
    },
    {
      id: "india-wildlife-tours",
      name: "India Wildlife Tours",
    },
    {
      id: "north-west-india-tours",
      name: "North & West India Tours",
    },
    {
      id: "india-nepal-tours",
      name: "India & Nepal Tours",
    },
    {
      id: "jammu-kashmir-tours",
      name: "Jammu & Kashmir Tours",
    },
  ];

  /* =========================================================
     HANDLE INPUT CHANGE
  ========================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     HANDLE SUBMIT
  ========================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote request:", form);
  };

  /* =========================================================
     COMMON INPUT STYLE
  ========================================================== */

  const inputClass = `
    w-full
    h-[52px]
    rounded-xl
    border
    border-white/20
    bg-white/[0.08]
    px-4
    py-3
    text-sm
    text-white
    placeholder-white/45
    focus:outline-none
    focus:border-[#F58634]
    focus:ring-2
    focus:ring-[#F58634]/20
    focus:bg-white/[0.11]
    transition-all
    duration-300
  `;

  /* =========================================================
     LABEL STYLE
  ========================================================== */

  const labelClass = `
    block
    text-[11px]
    uppercase
    tracking-[0.12em]
    text-white/75
    mb-2
    font-['Inter']
    font-medium
  `;

  /* =========================================================
     SELECT STYLE
  ========================================================== */

  const selectClass = `
    w-full
    h-[52px]
    rounded-xl
    border
    border-white/20
    bg-white/[0.08]
    pl-4
    pr-12
    py-3
    text-sm
    text-white
    cursor-pointer
    appearance-none
    focus:outline-none
    focus:border-[#F58634]
    focus:ring-2
    focus:ring-[#F58634]/20
    focus:bg-white/[0.11]
    transition-all
    duration-300
  `;

  /* =========================================================
     REUSABLE SELECT WRAPPER
  ========================================================== */

  const SelectWrapper = ({ children }) => {
    return (
      <div className="relative w-full">
        {children}

        <ChevronDown
          size={18}
          strokeWidth={1.8}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-white/60
            pointer-events-none
          "
        />
      </div>
    );
  };

  /* =========================================================
     DATE VALUE
  ========================================================== */

  const selectedTravelDate = form.travelDate
    ? new Date(`${form.travelDate}T00:00:00`)
    : null;

  /* =========================================================
     DATE CHANGE
  ========================================================== */

  const handleDateChange = (date) => {
    if (!date) {
      setForm((prev) => ({
        ...prev,
        travelDate: "",
      }));

      return;
    }

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    setForm((prev) => ({
      ...prev,
      travelDate: `${year}-${month}-${day}`,
    }));
  };

  /* =========================================================
     RETURN
  ========================================================== */

  return (
    <section
      id="quatation"
      className="
        relative
        w-full
        py-24
        px-6
        md:px-14
        overflow-hidden
        border-t
        border-[#C9A24B]/25
        bg-[#F2FAFB]
        flex
        items-center
        justify-center
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-105
        "
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2200&q=85"
        alt="India travel"
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-[#050B14]/40" />

      {/* =====================================================
          CENTER DARKNESS
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(18,77,86,0.18) 0%, rgba(18,77,86,0.12) 45%, rgba(18,77,86,0.28) 100%)",
        }}
      />

      {/* =====================================================
          ORANGE / TEAL GLOW
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(245,134,52,0.08), transparent 30%), radial-gradient(circle at 85% 80%, rgba(30,165,190,0.08), transparent 30%)",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          max-w-4xl
          w-full
          mx-auto
          z-10
        "
      >
        {/* ===================================================
            HEADING
        ==================================================== */}

        <div className="text-center mb-10">
          <span
            className="
              font-['Inter']
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#F58634]
            "
          >
            Plan Your Trip
          </span>

          <h2
            className="
              font-['Fraunces']
              font-medium
              text-white
              text-[clamp(1.75rem,3.5vw,2.75rem)]
              mt-4
            "
          >
            Get a Free, No-Obligation Quote
          </h2>

          <p
            className="
              font-['Inter']
              text-white/70
              text-[15px]
              mt-4
              max-w-lg
              mx-auto
              leading-relaxed
            "
          >
            Tell us roughly what you have in mind — we'll
            come back with a tailored itinerary, usually
            within one business day.
          </p>
        </div>

        {/* ===================================================
            TRUST STRIP
        ==================================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            mb-12
            font-['Inter']
            text-[12px]
            uppercase
            tracking-[0.06em]
            text-white/65
          "
        >
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

        {/* ===================================================
            FORM
        ==================================================== */}

        <form
          data-aos="zoom-in"
          data-aos-duration="2500"
          onSubmit={handleSubmit}
          className="
            relative
            rounded-3xl
            border
            border-white/15
            bg-[#124d56]/30
            backdrop-blur-xl
            p-7
            md:p-10
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* TOP HIGHLIGHT */}

          <div
            className="
              absolute
              top-0
              left-10
              right-10
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#F58634]/50
              to-transparent
            "
          />

          {/* =================================================
              FORM GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-x-6
              gap-y-6
            "
          >
            {/* NAME */}

            <div>
              <label
                className={labelClass}
                htmlFor="name"
              >
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
              <label
                className={labelClass}
                htmlFor="email"
              >
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
              <label
                className={labelClass}
                htmlFor="phone"
              >
                Phone Number
              </label>

              <PhoneInput
                country="in"
                value={form.phone}
                onChange={(phone) =>
                  setForm((prev) => ({
                    ...prev,
                    phone,
                  }))
                }
                enableSearch
                searchPlaceholder="Search country..."
                inputProps={{
                  name: "phone",
                  id: "phone",
                  required: true,
                  autoComplete: "tel",
                }}
                containerClass="!w-full"
                inputClass="
                  !w-full
                  !h-[52px]
                  !rounded-xl
                  !border
                  !border-white/20
                  !bg-white/[0.08]
                  !text-white
                  !text-sm
                  !pl-[52px]
                  !pr-4
                  focus:!border-[#F58634]
                  focus:!ring-2
                  focus:!ring-[#F58634]/20
                  focus:!bg-white/[0.11]
                "
                buttonClass="
                  !rounded-l-xl
                  !border-white/20
                  !bg-white/[0.08]
                  hover:!bg-white/[0.12]
                "
                dropdownClass="
                  !bg-[#07111f]
                  !text-white
                "
                searchClass="
                  !bg-[#07111f]
                  !text-white
                "
                placeholder="Enter phone number"
              />
            </div>

            {/* NATIONALITY */}

            <div>
              <label
                className={labelClass}
                htmlFor="nationality"
              >
                Nationality
              </label>

              <div className="quotation-country-select">
                <CountrySelect
                  value={form.nationality}
                  onChange={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      nationality: value,
                    }))
                  }
                  name="nationality"
                  placeholder="Select your nationality"
                />
              </div>
            </div>

            {/* DURATION */}

            <div>
              <label
                className={labelClass}
                htmlFor="duration"
              >
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

            {/* =================================================
                TRAVEL DATE
            ================================================== */}

            <div>
              <label
                className={labelClass}
                htmlFor="travelDate"
              >
                Travel Date
              </label>

              <div className="relative w-full">
                <DatePicker
                  id="travelDate"
                  selected={selectedTravelDate}
                  onChange={handleDateChange}
                  minDate={new Date()}

                  /* Manual typing remains */

                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"

                  /* Field */

                  wrapperClassName="w-full"

                  className={`
                    ${inputClass}
                    !h-[56px]
                    !px-4
                    !pr-12
                    !text-[15px]
                    cursor-text
                  `}

                  /* Calendar opens BELOW */

                  popperPlacement="bottom-start"
                  showPopperArrow={false}

                  /* IMPORTANT:
                     We do NOT use the ugly native
                     month/year dropdowns anymore.
                  */

                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    changeMonth,
                    changeYear,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => {
                    const currentYear =
                      new Date().getFullYear();

                    const years = Array.from(
                      { length: 15 },
                      (_, index) =>
                        currentYear + index
                    );

                    const months = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ];

                    return (
                      <div className="quotation-datepicker-header">
                        {/* LEFT ARROW */}

                        <button
                          type="button"
                          onClick={decreaseMonth}
                          disabled={
                            prevMonthButtonDisabled
                          }
                          className="
                            quotation-datepicker-nav
                            quotation-datepicker-nav-left
                          "
                          aria-label="Previous month"
                        >
                          <span>‹</span>
                        </button>

                        {/* MONTH + YEAR */}

                        <div className="quotation-datepicker-selects">
                          {/* MONTH */}

                          <div className="quotation-datepicker-select-wrapper">
                            <select
                              value={date.getMonth()}
                              onChange={(e) =>
                                changeMonth(
                                  Number(e.target.value)
                                )
                              }
                              className="quotation-datepicker-select"
                              aria-label="Select month"
                            >
                              {months.map(
                                (month, index) => (
                                  <option
                                    key={month}
                                    value={index}
                                  >
                                    {month}
                                  </option>
                                )
                              )}
                            </select>

                            <ChevronDown
                              size={14}
                              strokeWidth={2}
                            />
                          </div>

                          {/* YEAR */}

                          <div className="quotation-datepicker-select-wrapper year">
                            <select
                              value={date.getFullYear()}
                              onChange={(e) =>
                                changeYear(
                                  Number(e.target.value)
                                )
                              }
                              className="quotation-datepicker-select"
                              aria-label="Select year"
                            >
                              {years.map((year) => (
                                <option
                                  key={year}
                                  value={year}
                                >
                                  {year}
                                </option>
                              ))}
                            </select>

                            <ChevronDown
                              size={14}
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* RIGHT ARROW */}

                        <button
                          type="button"
                          onClick={increaseMonth}
                          disabled={
                            nextMonthButtonDisabled
                          }
                          className="
                            quotation-datepicker-nav
                            quotation-datepicker-nav-right
                          "
                          aria-label="Next month"
                        >
                          <span>›</span>
                        </button>
                      </div>
                    );
                  }}

                  autoComplete="off"
                />

                {/* Calendar Icon */}

                <CalendarDays
                  size={19}
                  strokeWidth={1.8}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-white/55
                    pointer-events-none
                  "
                />
              </div>

              <p
                className="
                  mt-2
                  text-[10px]
                  text-white/45
                  font-['Inter']
                "
              >
                Select your preferred travel date
              </p>
            </div>

            {/* ADULTS */}

            <div>
              <label
                className={labelClass}
                htmlFor="adults"
              >
                Adults
              </label>

              <SelectWrapper>
                <select
                  id="adults"
                  name="adults"
                  value={form.adults}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">
                    Select number
                  </option>

                  {Array.from(
                    { length: 10 },
                    (_, index) => index + 1
                  ).map((number) => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}
                    </option>
                  ))}

                  <option value="10+">
                    10+
                  </option>
                </select>
              </SelectWrapper>
            </div>

            {/* CHILDREN */}

            <div>
              <label
                className={labelClass}
                htmlFor="children"
              >
                Children
              </label>

              <SelectWrapper>
                <select
                  id="children"
                  name="children"
                  value={form.children}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">
                    Select number
                  </option>

                  {Array.from(
                    { length: 7 },
                    (_, index) => index
                  ).map((number) => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
            </div>

            {/* TOUR PACKAGE */}

            <div>
              <label
                className={labelClass}
                htmlFor="tourPackage"
              >
                Tour Package
              </label>

              <SelectWrapper>
                <select
                  id="tourPackage"
                  name="tourPackage"
                  value={form.tourPackage}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">
                    Select a package
                  </option>

                  {tourPackages.map((pkg) => (
                    <option
                      key={pkg.id}
                      value={pkg.id}
                    >
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
            </div>

            {/* HOTEL TYPE */}

            <div>
              <label
                className={labelClass}
                htmlFor="hotelType"
              >
                Type of Hotel
              </label>

              <SelectWrapper>
                <select
                  id="hotelType"
                  name="hotelType"
                  value={form.hotelType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">
                    Select hotel type
                  </option>

                  <option value="heritage-hotels">
                    Heritage Hotels
                  </option>

                  <option value="5-star-luxury">
                    5 Star Luxury
                  </option>

                  <option value="4-star">
                    4 Star
                  </option>

                  <option value="3-star">
                    3 Star
                  </option>
                </select>
              </SelectWrapper>
            </div>

            {/* REFERENCE */}

            <div className="md:col-span-2">
              <label
                className={labelClass}
                htmlFor="reference"
              >
                How Did You Hear About Us?
              </label>

              <SelectWrapper>
                <select
                  id="reference"
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
              </SelectWrapper>
            </div>

            {/* DETAILS */}

            <div className="md:col-span-2">
              <label
                className={labelClass}
                htmlFor="details"
              >
                Rough Itinerary & Details
              </label>

              <textarea
                id="details"
                name="details"
                rows={4}
                value={form.details}
                onChange={handleChange}
                className={`
                  ${inputClass}
                  !h-auto
                  resize-none
                `}
                placeholder="Tell us a little about what you're picturing — places you want to see, pace, budget range, anything helpful."
              />
            </div>
          </div>

          {/* =================================================
              SUBMIT
          ================================================== */}

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