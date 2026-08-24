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

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 12 }, (_, index) => CURRENT_YEAR + index);

const inputClass =
  "w-full h-[52px] rounded-xl border border-[#124d56]/15 bg-white px-4 py-3 text-sm text-[#0B3C49] placeholder:text-[#124d56]/35 outline-none transition-all duration-300 focus:border-[#F58634] focus:ring-4 focus:ring-[#F58634]/10";

const labelClass =
  "block mb-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-[#124d56]/65";

const selectClass = `${inputClass} cursor-pointer appearance-none pl-4 pr-12`;

function SelectWrapper({ children }) {
  return (
    <div className="relative w-full">
      {children}
      <ChevronDown
        size={18}
        strokeWidth={1.8}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#124d56]/55"
        aria-hidden="true"
      />
    </div>
  );
}

export default function AboutUs_Quotation_Form({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const datePickerRef = useRef(null);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  // Backend is intentionally NOT connected yet.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("About Us Quote Request:", form);
    setSubmitted(true);
  };

  const selectedTravelDate = form.travelDate
    ? new Date(`${form.travelDate}T00:00:00`)
    : null;

  const handleTravelDateChange = (date) => {
    if (!date) {
      setForm((previous) => ({ ...previous, travelDate: "" }));
      return;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    setForm((previous) => ({ ...previous, travelDate: `${year}-${month}-${day}` }));
  };

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#061B1F]/70 p-4 backdrop-blur-md md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div id="quotation-datepicker-portal" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quotation-form-heading"
        className="relative my-6 flex w-full max-w-5xl max-h-[94vh] flex-col overflow-hidden rounded-[26px] bg-[#F2FAFB] shadow-[0_40px_120px_rgba(0,0,0,0.4)] animate-[modalIn_.3s_ease-out]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative shrink-0 overflow-hidden bg-[#124d56] px-6 py-7 sm:px-9 sm:py-8">
          <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#F58634]/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-32 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F58634] to-transparent opacity-80" />

          <div className="relative pr-12">
            <p className="font-['Inter'] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F58634]">
              Plan Your Journey
            </p>

            <h2
              id="quotation-form-heading"
              className="mt-2 font-['Fraunces'] text-3xl sm:text-4xl font-medium tracking-tight text-white"
            >
              Tell Us About Your Trip
            </h2>

            <p className="mt-3 max-w-xl font-['Inter'] text-sm leading-relaxed text-white/65">
              Give us a few details about your plans and our travel experts will
              help shape the journey around you.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quotation form"
            className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/70 transition-all duration-300 hover:rotate-90 hover:border-white/30 hover:bg-white/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {!submitted ? (
            <>
              <div className="mx-5 mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-[#124d56]/10 bg-white px-5 py-4 font-['Inter'] text-[10px] uppercase tracking-[0.07em] text-[#124d56]/55 sm:mx-8 lg:mx-9">
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

              <form
                onSubmit={handleSubmit}
                className="mx-5 mb-6 mt-6 rounded-[24px] border border-[#124d56]/10 bg-white p-5 shadow-[0_10px_40px_rgba(18,77,86,0.05)] sm:mx-8 sm:p-7 lg:mx-9 lg:p-8"
              >
                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="about-name">
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

                  <div>
                    <label className={labelClass} htmlFor="about-email">
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

                  <div>
                    <label className={labelClass} htmlFor="about-phone">
                      Phone
                    </label>
                    <PhoneInput
                      country="in"
                      value={form.phone}
                      onChange={(phone) => setForm((previous) => ({ ...previous, phone }))}
                      enableSearch
                      searchPlaceholder="Search country..."
                      inputProps={{
                        name: "phone",
                        id: "about-phone",
                        required: true,
                        autoComplete: "tel",
                      }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-[52px] !rounded-xl !border !border-[#124d56]/15 !bg-white !text-[#0B3C49] !text-sm !pl-[52px] !pr-4 focus:!border-[#F58634] focus:!ring-4 focus:!ring-[#F58634]/10"
                      buttonClass="!rounded-l-xl !border-[#124d56]/15 !bg-white hover:!bg-[#F2FAFB]"
                      dropdownClass="!bg-[#07111f] !text-white"
                      searchClass="!bg-[#07111f] !text-white"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-nationality">
                      Nationality
                    </label>
                    <div className="quotation-country-select quotation-country-select--light">
                      <CountrySelect
                        value={form.nationality}
                        onChange={(value) =>
                          setForm((previous) => ({ ...previous, nationality: value }))
                        }
                        name="nationality"
                        placeholder="Select nationality"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-duration">
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

                  <div>
                    <label className={labelClass} htmlFor="about-date">
                      Travel Date
                    </label>

                    <div className="relative w-full">
                      <DatePicker
                        ref={datePickerRef}
                        id="about-date"
                        selected={selectedTravelDate}
                        onChange={handleTravelDateChange}
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                        wrapperClassName="w-full"
                        className="!w-full !h-[52px] !rounded-xl !border !border-[#124d56]/15 !bg-white !px-4 !pr-12 !py-3 !text-sm !text-[#0B3C49] placeholder:!text-[#124d56]/35 focus:!border-[#F58634] focus:!ring-4 focus:!ring-[#F58634]/10 outline-none cursor-pointer"
                        popperPlacement="bottom-start"
                        showPopperArrow={false}
                        withPortal
                        portalId="quotation-datepicker-portal"
                        autoComplete="off"
                        calendarClassName="!border-0 !rounded-[20px] !overflow-hidden !font-['Inter'] !shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div className="flex h-[76px] items-center justify-between gap-2 bg-gradient-to-br from-[#124d56] to-[#0d3d46] px-3.5 py-3">
                            <button
                              type="button"
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                              aria-label="Previous month"
                              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.06] text-white/85 transition-all duration-200 hover:border-[#F58634]/45 hover:bg-[#F58634]/16 hover:text-[#F58634] hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:translate-y-0 disabled:hover:bg-white/[0.06] disabled:hover:text-white/85"
                            >
                              <ChevronLeftIcon size={18} strokeWidth={2} />
                            </button>

                            <div className="flex flex-1 items-center justify-center gap-2">
                              <div className="relative flex items-center">
                                <select
                                  value={date.getMonth()}
                                  onChange={(event) => changeMonth(Number(event.target.value))}
                                  className="h-[38px] min-w-[118px] cursor-pointer appearance-none rounded-[10px] border border-white/14 bg-[#07111f]/45 px-[13px] pr-8 text-[13px] font-semibold text-white outline-none transition-all duration-200 hover:border-[#F58634]/45 hover:bg-[#07111f]/70 focus:border-[#F58634] focus:ring-[3px] focus:ring-[#F58634]/15"
                                >
                                  {MONTH_NAMES.map((month, index) => (
                                    <option key={month} value={index} className="bg-[#07111f] text-white">
                                      {month}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  size={13}
                                  className="pointer-events-none absolute right-2.5 text-white/65"
                                />
                              </div>

                              <div className="relative flex items-center">
                                <select
                                  value={date.getFullYear()}
                                  onChange={(event) => changeYear(Number(event.target.value))}
                                  className="h-[38px] min-w-[88px] cursor-pointer appearance-none rounded-[10px] border border-white/14 bg-[#07111f]/45 px-[13px] pr-8 text-[13px] font-semibold text-white outline-none transition-all duration-200 hover:border-[#F58634]/45 hover:bg-[#07111f]/70 focus:border-[#F58634] focus:ring-[3px] focus:ring-[#F58634]/15"
                                >
                                  {YEAR_OPTIONS.map((year) => (
                                    <option key={year} value={year} className="bg-[#07111f] text-white">
                                      {year}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  size={13}
                                  className="pointer-events-none absolute right-2.5 text-white/65"
                                />
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                              aria-label="Next month"
                              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.06] text-white/85 transition-all duration-200 hover:border-[#F58634]/45 hover:bg-[#F58634]/16 hover:text-[#F58634] hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:translate-y-0 disabled:hover:bg-white/[0.06] disabled:hover:text-white/85"
                            >
                              <ChevronRightIcon size={18} strokeWidth={2} />
                            </button>

                            <button
                              type="button"
                              onClick={() => datePickerRef.current?.setOpen(false)}
                              aria-label="Close calendar"
                              className="ml-1.5 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.06] text-white/60 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] hover:text-white"
                            >
                              <X size={16} strokeWidth={2} />
                            </button>
                          </div>
                        )}
                      />

                      <CalendarDays
                        size={19}
                        strokeWidth={1.8}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#124d56]/45"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-2 font-['Inter'] text-[10px] text-[#124d56]/40">
                      Select your preferred travel date
                    </p>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-adults">
                      Adults
                    </label>
                    <SelectWrapper>
                      <select
                        id="about-adults"
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        className={selectClass}
                        required
                      >
                        <option value="">Select number</option>
                        {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        ))}
                        <option value="10+">10+</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-children">
                      Children
                    </label>
                    <SelectWrapper>
                      <select
                        id="about-children"
                        name="children"
                        value={form.children}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select number</option>
                        {Array.from({ length: 7 }, (_, index) => index).map((number) => (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        ))}
                        <option value="6+">6+</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-tour-package">
                      Tour Package
                    </label>
                    <SelectWrapper>
                      <select
                        id="about-tour-package"
                        name="tourPackage"
                        value={form.tourPackage}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select a package</option>
                        <option value="golden-triangle">Golden Triangle</option>
                        <option value="rajasthan">Rajasthan Tour</option>
                        <option value="kerala">Kerala Backwaters</option>
                        <option value="himalayas">Himalayan Adventure</option>
                        <option value="custom">Custom / Not Sure Yet</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="about-hotel-type">
                      Type of Hotel
                    </label>
                    <SelectWrapper>
                      <select
                        id="about-hotel-type"
                        name="hotelType"
                        value={form.hotelType}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select hotel type</option>
                        <option value="heritage-hotels">Heritage Hotels</option>
                        <option value="5-star-luxury">5 Star Luxury</option>
                        <option value="4-star">4 Star</option>
                        <option value="3-star">3 Star</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="about-reference">
                      How Did You Hear About Us?
                    </label>
                    <SelectWrapper>
                      <select
                        id="about-reference"
                        name="reference"
                        value={form.reference}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select</option>
                        <option value="google">Google Search</option>
                        <option value="tripadvisor">TripAdvisor</option>
                        <option value="referral">Friend / Family Referral</option>
                        <option value="social">Social Media</option>
                        <option value="other">Other</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="about-details">
                      Rough Itinerary & Details
                    </label>
                    <textarea
                      id="about-details"
                      name="details"
                      rows={4}
                      value={form.details}
                      onChange={handleChange}
                      className={`${inputClass} !h-auto resize-none`}
                      placeholder="Tell us a little about what you're picturing — places you want to see, pace, budget range, anything helpful."
                    />
                  </div>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-5 border-t border-[#124d56]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md font-['Inter'] text-xs leading-relaxed text-[#124d56]/50">
                    Share as much or as little as you know. Our travel team will
                    help shape the journey around your requirements.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F58634] px-7 py-3.5 font-['Inter'] text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(245,134,52,0.65)] transition-all duration-300 hover:bg-[#D9701F] hover:shadow-[0_16px_35px_-10px_rgba(245,134,52,0.7)] active:scale-[0.98]"
                  >
                    Send Enquiry
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </form>

              <div className="px-6 pb-7 text-center">
                <p className="font-['Inter'] text-[10px] uppercase tracking-[0.12em] text-[#124d56]/35">
                  No obligation · Personalised planning · India travel specialists
                </p>
              </div>
            </>
          ) : (
            <div className="flex min-h-[500px] flex-col items-center justify-center px-6 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#124d56]/10">
                <CheckCircle2 className="h-8 w-8 text-[#124d56]" />
              </div>

              <span className="mt-6 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F58634]">
                Request Received
              </span>

              <h3 className="mt-3 font-['Fraunces'] text-3xl sm:text-4xl font-medium text-[#0B3C49]">
                Your journey starts here.
              </h3>

              <p className="mt-4 max-w-md font-['Inter'] text-sm leading-relaxed text-[#124d56]/60">
                Thank you for reaching out to Times India Travels. Our travel
                team will review your request and get back to you with a
                tailored itinerary.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-7 cursor-pointer rounded-full bg-[#124d56] px-7 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3C49] hover:shadow-[0_10px_30px_rgba(18,77,86,0.2)]"
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