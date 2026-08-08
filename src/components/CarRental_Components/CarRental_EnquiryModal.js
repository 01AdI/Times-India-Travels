import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CarRental_EnquiryModal({
  isOpen,
  onClose,
  selectedCar = "",
}) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    travelDate: "",
    duration: "",
    adults: "1",
    children: "0",
    carType: "",
    pickup: "",
    dropoff: "",
    details: "",
  });

  // ----------------------------------------------------------
  // Automatically select the vehicle
  // ----------------------------------------------------------

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      carType: selectedCar || "",
    }));
  }, [selectedCar]);

  // ----------------------------------------------------------
  // Prevent background scrolling
  // ----------------------------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ----------------------------------------------------------
  // ESC key
  // ----------------------------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // ----------------------------------------------------------
  // Don't render anything when closed
  // ----------------------------------------------------------

  if (!isOpen) {
    return null;
  }

  // ----------------------------------------------------------
  // Handle inputs
  // ----------------------------------------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ----------------------------------------------------------
  // Submit
  // ----------------------------------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Car Rental Enquiry:", form);

    // Backend will be connected here later.
    setSubmitted(true);
  };

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

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        p-3
        sm:p-5
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="car-enquiry-title"
    >
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="
          absolute
          inset-0
          cursor-default
          bg-[#061B1F]/70
          backdrop-blur-md
        "
      />

      {/* =====================================================
          MODAL
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-4xl
          max-h-[94vh]
          flex-col
          overflow-hidden
          rounded-[26px]
          bg-[#F2FAFB]
          shadow-[0_40px_120px_rgba(0,0,0,0.4)]
          animate-[modalIn_.3s_ease-out]
        "
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
            py-6
            sm:px-9
            sm:py-7
          "
        >
          {/* Decorative glow */}

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
              Private Enquiry
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
              Plan Your Journey
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                font-['Inter']
                text-sm
                leading-relaxed
                text-white/65
              "
            >
              Tell us a little about your journey and we'll help you
              arrange the right vehicle and travel experience.
            </p>

            {/* Selected vehicle */}

            {selectedCar && (
              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F58634]" />

                <span className="font-['Inter'] text-xs text-white/70">
                  Vehicle selected:
                </span>

                <span className="font-['Inter'] text-xs font-semibold text-white">
                  {selectedCar}
                </span>
              </div>
            )}
          </div>

          {/* Close button */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white/70
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/20
              hover:text-white
              cursor-pointer
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
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 lg:p-9"
            >
              {/* ===============================================
                  FORM GRID
              ================================================ */}

              <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="car-enquiry-name"
                    className={labelClass}
                  >
                    Name
                  </label>

                  <input
                    id="car-enquiry-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="car-enquiry-email"
                    className={labelClass}
                  >
                    Email
                  </label>

                  <input
                    id="car-enquiry-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="car-enquiry-phone"
                    className={labelClass}
                  >
                    Phone
                  </label>

                  <input
                    id="car-enquiry-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                    required
                  />
                </div>

                {/* NATIONALITY */}

                <div>
                  <label
                    htmlFor="car-enquiry-nationality"
                    className={labelClass}
                  >
                    Nationality
                  </label>

                  <input
                    id="car-enquiry-nationality"
                    name="nationality"
                    type="text"
                    value={form.nationality}
                    onChange={handleChange}
                    placeholder="e.g. United States"
                    className={inputClass}
                  />
                </div>

                {/* TRAVEL DATE */}

                <div>
                  <label
                    htmlFor="car-enquiry-date"
                    className={labelClass}
                  >
                    Travel Date
                  </label>

                  <input
                    id="car-enquiry-date"
                    name="travelDate"
                    type="date"
                    value={form.travelDate}
                    onChange={handleChange}
                    className={`${inputClass} [color-scheme:light]`}
                  />
                </div>

                {/* DURATION */}

                <div>
                  <label
                    htmlFor="car-enquiry-duration"
                    className={labelClass}
                  >
                    Duration
                  </label>

                  <input
                    id="car-enquiry-duration"
                    name="duration"
                    type="text"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="e.g. 7 days"
                    className={inputClass}
                  />
                </div>

                {/* ADULTS */}

                <div>
                  <label
                    htmlFor="car-enquiry-adults"
                    className={labelClass}
                  >
                    Adults
                  </label>

                  <select
                    id="car-enquiry-adults"
                    name="adults"
                    value={form.adults}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                      <option
                        key={number}
                        value={number}
                      >
                        {number}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CHILDREN */}

                <div>
                  <label
                    htmlFor="car-enquiry-children"
                    className={labelClass}
                  >
                    Children
                  </label>

                  <select
                    id="car-enquiry-children"
                    name="children"
                    value={form.children}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {[0, 1, 2, 3, 4, 5].map((number) => (
                      <option
                        key={number}
                        value={number}
                      >
                        {number}
                      </option>
                    ))}
                  </select>
                </div>

                {/* VEHICLE */}

                <div>
                  <label
                    htmlFor="car-enquiry-car"
                    className={labelClass}
                  >
                    Vehicle
                  </label>

                  <select
                    id="car-enquiry-car"
                    name="carType"
                    value={form.carType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">
                      Select a vehicle
                    </option>

                    <option value="Toyota Etios">
                      Toyota Etios
                    </option>

                    <option value="Toyota Innova">
                      Toyota Innova
                    </option>

                    <option value="Tempo Traveller">
                      Tempo Traveller
                    </option>

                    <option value="Luxury Bus">
                      Luxury Bus
                    </option>

                    <option value="Not Sure Yet">
                      Not Sure Yet
                    </option>
                  </select>
                </div>

                {/* PICKUP */}

                <div>
                  <label
                    htmlFor="car-enquiry-pickup"
                    className={labelClass}
                  >
                    Pickup Location
                  </label>

                  <input
                    id="car-enquiry-pickup"
                    name="pickup"
                    type="text"
                    value={form.pickup}
                    onChange={handleChange}
                    placeholder="e.g. Jaipur Airport"
                    className={inputClass}
                  />
                </div>

                {/* DROP OFF */}

                <div>
                  <label
                    htmlFor="car-enquiry-dropoff"
                    className={labelClass}
                  >
                    Drop-off Location
                  </label>

                  <input
                    id="car-enquiry-dropoff"
                    name="dropoff"
                    type="text"
                    value={form.dropoff}
                    onChange={handleChange}
                    placeholder="e.g. Delhi"
                    className={inputClass}
                  />
                </div>

                {/* DETAILS */}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="car-enquiry-details"
                    className={labelClass}
                  >
                    Tell Us About Your Journey
                  </label>

                  <textarea
                    id="car-enquiry-details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Tell us where you'd like to go, places you want to visit, your preferred pace, or anything else we should know..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              {/* ===============================================
                  BOTTOM
              ================================================ */}

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
          ) : (
            /* =================================================
               SUCCESS STATE
            ================================================== */

            <div
              className="
                flex
                min-h-[420px]
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

              <h3
                className="
                  mt-6
                  font-['Fraunces']
                  text-3xl
                  font-medium
                  text-[#0B3C49]
                "
              >
                Enquiry Received
              </h3>

              <p
                className="
                  mt-3
                  max-w-md
                  font-['Inter']
                  text-sm
                  leading-relaxed
                  text-[#124d56]/60
                "
              >
                Thank you for reaching out. Our travel team
                will review your requirements and get back to
                you with a tailored response.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  mt-7
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
                "
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}