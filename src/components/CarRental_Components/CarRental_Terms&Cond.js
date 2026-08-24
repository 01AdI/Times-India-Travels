import { useEffect, useRef, useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  CalendarDays,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CountrySelect from "../../utils/CountrySelect";

// ==========================================================
// MONTHS
// ==========================================================

const MONTH_NAMES = [
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

// ==========================================================
// YEARS
// ==========================================================

const CURRENT_YEAR = new Date().getFullYear();

const YEAR_OPTIONS = Array.from(
  { length: 12 },
  (_, index) => CURRENT_YEAR + index
);

// ==========================================================
// VEHICLES
// ==========================================================

const VEHICLE_OPTIONS = [
  {
    value: "Toyota Etios",
    label: "Toyota Etios",
  },
  {
    value: "Toyota Innova",
    label: "Toyota Innova",
  },
  {
    value: "Tempo Traveller",
    label: "Tempo Traveller",
  },
  {
    value: "Luxury Bus",
    label: "Luxury Bus",
  },
  {
    value: "Not Sure Yet",
    label: "Not Sure Yet",
  },
];

// ==========================================================
// TOUR PACKAGES
// ==========================================================

const TOUR_PACKAGE_OPTIONS = [
  {
    value: "golden-triangle",
    label: "Golden Triangle",
  },
  {
    value: "rajasthan",
    label: "Rajasthan Tour",
  },
  {
    value: "kerala",
    label: "Kerala Backwaters",
  },
  {
    value: "himalayas",
    label: "Himalayan Adventure",
  },
  {
    value: "south-india",
    label: "South India Tour",
  },
  {
    value: "wildlife",
    label: "India Wildlife Tour",
  },
  {
    value: "custom",
    label: "Custom / Not Sure Yet",
  },
];

// ==========================================================
// INPUT STYLE
// ==========================================================

const inputClass =
  "w-full h-[52px] rounded-xl border border-[#124d56]/15 bg-white px-4 py-3 text-sm text-[#0B3C49] placeholder:text-[#124d56]/35 outline-none transition-all duration-300 focus:border-[#F58634] focus:ring-4 focus:ring-[#F58634]/10";

// ==========================================================
// LABEL STYLE
// ==========================================================

const labelClass =
  "block mb-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-[#124d56]/65";

// ==========================================================
// SELECT STYLE
// ==========================================================

const selectClass = `${inputClass} cursor-pointer appearance-none pl-4 pr-12`;

// ==========================================================
// SELECT WRAPPER
// ==========================================================

function SelectWrapper({ children }) {
  return (
    <div className="relative w-full">
      {children}

      <ChevronDown
        size={18}
        strokeWidth={1.8}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-[#124d56]/55
        "
        aria-hidden="true"
      />
    </div>
  );
}

// ==========================================================
// COMPONENT
// ==========================================================

export default function CarRental_EnquiryModal({
  isOpen,
  onClose,
  selectedCar = "",
}) {
  const [submitted, setSubmitted] = useState(false);

  const datePickerRef = useRef(null);

  // ========================================================
  // FORM STATE
  // ========================================================

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    duration: "",
    travelDate: "",
    adults: "",
    children: "",
    carType: "",
    tourPackage: "",
    hotelType: "",
    details: "",
  });

  // ========================================================
  // AUTO SELECT VEHICLE
  // ========================================================

  useEffect(() => {
    setForm((previous) => ({
      ...previous,
      carType: selectedCar || "",
    }));
  }, [selectedCar]);

  // ========================================================
  // RESET SUBMITTED STATE WHEN MODAL OPENS
  // ========================================================

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  // ========================================================
  // PREVENT BACKGROUND SCROLL
  // ========================================================

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ========================================================
  // ESC KEY
  // ========================================================

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // ========================================================
  // DON'T RENDER WHEN CLOSED
  // ========================================================

  if (!isOpen) {
    return null;
  }

  // ========================================================
  // HANDLE INPUT
  // ========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ========================================================
  // HANDLE TRAVEL DATE
  // ========================================================

  const selectedTravelDate = form.travelDate
    ? new Date(`${form.travelDate}T00:00:00`)
    : null;

  const handleTravelDateChange = (date) => {
    if (!date) {
      setForm((previous) => ({
        ...previous,
        travelDate: "",
      }));

      return;
    }

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    setForm((previous) => ({
      ...previous,
      travelDate: `${year}-${month}-${day}`,
    }));
  };

  // ========================================================
  // HANDLE SUBMIT
  // ========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Car Rental Enquiry:", form);

    // Backend will be connected later.
    setSubmitted(true);
  };

  // ========================================================
  // RETURN
  // ========================================================

  return (
    <div
      role="presentation"
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
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =====================================================
          DATEPICKER PORTAL
      ====================================================== */}

      <div id="car-rental-datepicker-portal" />

      {/* =====================================================
          MODAL
      ====================================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="car-enquiry-title"
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
        onMouseDown={(event) => event.stopPropagation()}
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
          {/* Orange glow */}

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

          {/* Teal glow */}

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

          {/* Orange accent */}

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

          {/* HEADER CONTENT */}

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
              Travel With Comfort
            </p>

            <h2
              id="car-enquiry-title"
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
              Plan Your Car Rental
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
              Tell us a few details about your journey and our travel experts
              will help arrange the right vehicle and travel experience.
            </p>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close car rental enquiry"
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
                  Chauffeur Driven
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />
                  Expert Planning
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
                      htmlFor="car-enquiry-name"
                    >
                      Name
                    </label>

                    <input
                      id="car-enquiry-name"
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
                      htmlFor="car-enquiry-email"
                    >
                      Email
                    </label>

                    <input
                      id="car-enquiry-email"
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
                      htmlFor="car-enquiry-phone"
                    >
                      Phone
                    </label>

                    <PhoneInput
                      country="in"
                      value={form.phone}
                      onChange={(phone) =>
                        setForm((previous) => ({
                          ...previous,
                          phone,
                        }))
                      }
                      enableSearch
                      searchPlaceholder="Search country..."
                      inputProps={{
                        name: "phone",
                        id: "car-enquiry-phone",
                        required: true,
                        autoComplete: "tel",
                      }}
                      containerClass="!w-full"
                      inputClass="
                        !w-full
                        !h-[52px]
                        !rounded-xl
                        !border
                        !border-[#124d56]/15
                        !bg-white
                        !text-[#0B3C49]
                        !text-sm
                        !pl-[52px]
                        !pr-4
                        focus:!border-[#F58634]
                        focus:!ring-4
                        focus:!ring-[#F58634]/10
                      "
                      buttonClass="
                        !rounded-l-xl
                        !border-[#124d56]/15
                        !bg-white
                        hover:!bg-[#F2FAFB]
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

                  {/* =================================================
                      NATIONALITY
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-nationality"
                    >
                      Nationality
                    </label>

                    <div className="quotation-country-select quotation-country-select--light">
                      <CountrySelect
                        value={form.nationality}
                        onChange={(value) =>
                          setForm((previous) => ({
                            ...previous,
                            nationality: value,
                          }))
                        }
                        name="nationality"
                        placeholder="Select nationality"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DURATION
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-duration"
                    >
                      Duration of Travel
                    </label>

                    <input
                      id="car-enquiry-duration"
                      name="duration"
                      type="text"
                      value={form.duration}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g. 7 days"
                    />
                  </div>

                  {/* =================================================
                      TRAVEL DATE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-date"
                    >
                      Travel Date
                    </label>

                    <div className="relative w-full">
                      <DatePicker
                        ref={datePickerRef}
                        id="car-enquiry-date"
                        selected={selectedTravelDate}
                        onChange={handleTravelDateChange}
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                        wrapperClassName="w-full"
                        className="
                          !w-full
                          !h-[52px]
                          !rounded-xl
                          !border
                          !border-[#124d56]/15
                          !bg-white
                          !px-4
                          !pr-12
                          !py-3
                          !text-sm
                          !text-[#0B3C49]
                          placeholder:!text-[#124d56]/35
                          focus:!border-[#F58634]
                          focus:!ring-4
                          focus:!ring-[#F58634]/10
                          outline-none
                          cursor-pointer
                        "
                        popperPlacement="bottom-start"
                        showPopperArrow={false}
                        withPortal
                        portalId="car-rental-datepicker-portal"
                        autoComplete="off"
                        calendarClassName="
                          !border-0
                          !rounded-[20px]
                          !overflow-hidden
                          !font-['Inter']
                          !shadow-[0_25px_70px_rgba(0,0,0,0.55)]
                        "
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div
                            className="
                              flex
                              h-[76px]
                              items-center
                              justify-between
                              gap-2
                              bg-gradient-to-br
                              from-[#124d56]
                              to-[#0d3d46]
                              px-3.5
                              py-3
                            "
                          >
                            {/* PREVIOUS MONTH */}

                            <button
                              type="button"
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                              aria-label="Previous month"
                              className="
                                flex
                                h-[38px]
                                w-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-white/12
                                bg-white/[0.06]
                                text-white/85
                                transition-all
                                duration-200
                                hover:border-[#F58634]/45
                                hover:bg-[#F58634]/16
                                hover:text-[#F58634]
                                hover:-translate-y-px
                                disabled:cursor-not-allowed
                                disabled:opacity-25
                              "
                            >
                              <ChevronLeftIcon
                                size={18}
                                strokeWidth={2}
                              />
                            </button>

                            {/* MONTH / YEAR */}

                            <div
                              className="
                                flex
                                flex-1
                                items-center
                                justify-center
                                gap-2
                              "
                            >
                              {/* MONTH */}

                              <div className="relative flex items-center">
                                <select
                                  value={date.getMonth()}
                                  onChange={(event) =>
                                    changeMonth(
                                      Number(event.target.value)
                                    )
                                  }
                                  className="
                                    h-[38px]
                                    min-w-[118px]
                                    cursor-pointer
                                    appearance-none
                                    rounded-[10px]
                                    border
                                    border-white/14
                                    bg-[#07111f]/45
                                    px-[13px]
                                    pr-8
                                    text-[13px]
                                    font-semibold
                                    text-white
                                    outline-none
                                    transition-all
                                    duration-200
                                    hover:border-[#F58634]/45
                                    hover:bg-[#07111f]/70
                                    focus:border-[#F58634]
                                    focus:ring-[3px]
                                    focus:ring-[#F58634]/15
                                  "
                                >
                                  {MONTH_NAMES.map((month, index) => (
                                    <option
                                      key={month}
                                      value={index}
                                      className="bg-[#07111f] text-white"
                                    >
                                      {month}
                                    </option>
                                  ))}
                                </select>

                                <ChevronDown
                                  size={13}
                                  className="
                                    pointer-events-none
                                    absolute
                                    right-2.5
                                    text-white/65
                                  "
                                />
                              </div>

                              {/* YEAR */}

                              <div className="relative flex items-center">
                                <select
                                  value={date.getFullYear()}
                                  onChange={(event) =>
                                    changeYear(
                                      Number(event.target.value)
                                    )
                                  }
                                  className="
                                    h-[38px]
                                    min-w-[88px]
                                    cursor-pointer
                                    appearance-none
                                    rounded-[10px]
                                    border
                                    border-white/14
                                    bg-[#07111f]/45
                                    px-[13px]
                                    pr-8
                                    text-[13px]
                                    font-semibold
                                    text-white
                                    outline-none
                                    transition-all
                                    duration-200
                                    hover:border-[#F58634]/45
                                    hover:bg-[#07111f]/70
                                    focus:border-[#F58634]
                                    focus:ring-[3px]
                                    focus:ring-[#F58634]/15
                                  "
                                >
                                  {YEAR_OPTIONS.map((year) => (
                                    <option
                                      key={year}
                                      value={year}
                                      className="bg-[#07111f] text-white"
                                    >
                                      {year}
                                    </option>
                                  ))}
                                </select>

                                <ChevronDown
                                  size={13}
                                  className="
                                    pointer-events-none
                                    absolute
                                    right-2.5
                                    text-white/65
                                  "
                                />
                              </div>
                            </div>

                            {/* NEXT MONTH */}

                            <button
                              type="button"
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                              aria-label="Next month"
                              className="
                                flex
                                h-[38px]
                                w-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-white/12
                                bg-white/[0.06]
                                text-white/85
                                transition-all
                                duration-200
                                hover:border-[#F58634]/45
                                hover:bg-[#F58634]/16
                                hover:text-[#F58634]
                                hover:-translate-y-px
                                disabled:cursor-not-allowed
                                disabled:opacity-25
                              "
                            >
                              <ChevronRightIcon
                                size={18}
                                strokeWidth={2}
                              />
                            </button>

                            {/* CLOSE CALENDAR */}

                            <button
                              type="button"
                              onClick={() =>
                                datePickerRef.current?.setOpen(false)
                              }
                              aria-label="Close calendar"
                              className="
                                ml-1.5
                                flex
                                h-[38px]
                                w-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-white/12
                                bg-white/[0.06]
                                text-white/60
                                transition-all
                                duration-200
                                hover:border-white/25
                                hover:bg-white/[0.12]
                                hover:text-white
                              "
                            >
                              <X size={16} strokeWidth={2} />
                            </button>
                          </div>
                        )}
                      />

                      <CalendarDays
                        size={19}
                        strokeWidth={1.8}
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          text-[#124d56]/45
                        "
                        aria-hidden="true"
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        font-['Inter']
                        text-[10px]
                        text-[#124d56]/40
                      "
                    >
                      Select your preferred travel date
                    </p>
                  </div>

                  {/* =================================================
                      ADULTS
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-adults"
                    >
                      Adults
                    </label>

                    <SelectWrapper>
                      <select
                        id="car-enquiry-adults"
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        className={selectClass}
                        required
                      >
                        <option value="">Select number</option>

                        {Array.from(
                          { length: 10 },
                          (_, index) => index + 1
                        ).map((number) => (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        ))}

                        <option value="10+">10+</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* =================================================
                      CHILDREN
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-children"
                    >
                      Children
                    </label>

                    <SelectWrapper>
                      <select
                        id="car-enquiry-children"
                        name="children"
                        value={form.children}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select number</option>

                        {Array.from(
                          { length: 7 },
                          (_, index) => index
                        ).map((number) => (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        ))}

                        <option value="6+">6+</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* =================================================
                      VEHICLE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-vehicle"
                    >
                      Vehicle
                    </label>

                    <SelectWrapper>
                      <select
                        id="car-enquiry-vehicle"
                        name="carType"
                        value={form.carType}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">
                          Select a vehicle
                        </option>

                        {VEHICLE_OPTIONS.map((vehicle) => (
                          <option
                            key={vehicle.value}
                            value={vehicle.value}
                          >
                            {vehicle.label}
                          </option>
                        ))}
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* =================================================
                      TOUR PACKAGE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-package"
                    >
                      Tour / Package
                    </label>

                    <SelectWrapper>
                      <select
                        id="car-enquiry-package"
                        name="tourPackage"
                        value={form.tourPackage}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">
                          Select a package
                        </option>

                        {TOUR_PACKAGE_OPTIONS.map((tour) => (
                          <option
                            key={tour.value}
                            value={tour.value}
                          >
                            {tour.label}
                          </option>
                        ))}
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* =================================================
                      HOTEL TYPE
                  ================================================== */}

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-hotel"
                    >
                      Type of Hotel
                    </label>

                    <SelectWrapper>
                      <select
                        id="car-enquiry-hotel"
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

                  {/* =================================================
                      DETAILS
                  ================================================== */}

                  <div className="sm:col-span-2">
                    <label
                      className={labelClass}
                      htmlFor="car-enquiry-details"
                    >
                      Tell Us About Your Journey
                    </label>

                    <textarea
                      id="car-enquiry-details"
                      name="details"
                      rows={4}
                      value={form.details}
                      onChange={handleChange}
                      className={`${inputClass} !h-auto resize-none`}
                      placeholder="Tell us where you'd like to go, places you want to visit, your preferred pace, budget range, or anything else we should know..."
                    />
                  </div>
                </div>

                {/* =================================================
                    ACTION
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
                    Share as much or as little as you know. Our travel team
                    will help arrange the right vehicle and travel experience.
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
                  FOOTER
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
                  No obligation · Personalised planning · India travel
                  specialists
                </p>
              </div>
            </>
          ) : (
            /* =================================================
               SUCCESS STATE
            ================================================= */

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
                <CheckCircle2 className="h-8 w-8 text-[#124d56]" />
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
                Enquiry Received
              </span>

              <h3
                className="
                  mt-3
                  font-['Fraunces']
                  text-3xl
                  font-medium
                  text-[#0B3C49]
                  sm:text-4xl
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
                Thank you for reaching out to Times India Travels. Our travel
                team will review your enquiry and get back to you with a
                tailored journey.
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
                Continue Exploring
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}