import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CalendarDays,
  Users,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function TourPackage_Sub_QuoteForm({
  isOpen,
  onClose,
  tour,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    duration: "",
    travelDate: "",
    adults: "2",
    children: "0",
    hotel: "",
    reference: "",
    itinerary: "",
  });

  // ============================================================
  // PREVENT BACKGROUND SCROLL
  // ============================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ============================================================
  // ESCAPE KEY
  // ============================================================

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // ============================================================
  // HANDLE INPUT
  // ============================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================================
  // HANDLE SUBMIT
  // ============================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", {
      tour: tour?.name || "",
      tourId: tour?.id || "",
      ...formData,
    });

    alert("Thank you! Your quote request has been received.");

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            overflow-y-auto
            bg-[#0B3C49]/85
            px-4
            py-6
            backdrop-blur-md
            sm:px-6
            sm:py-10
            md:px-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          {/* ==================================================
              MODAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[1180px]
              overflow-hidden
              rounded-[30px]
              bg-[#F2FAFB]
              shadow-[0_40px_120px_rgba(0,0,0,0.35)]
            "
          >
            {/* ==================================================
                SOFT DECORATIVE ELEMENTS
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-40
                -top-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#F58634]/[0.055]
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#124D56]/[0.035]
                blur-3xl
              "
            />

            {/* ==================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close quote form"
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#124D56]/10
                bg-white/80
                text-[#0B3C49]
                shadow-[0_8px_25px_rgba(11,60,73,0.06)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#F58634]/40
                hover:bg-[#F58634]
                hover:text-[#0B3C49]
                sm:right-7
                sm:top-7
              "
            >
              <X className="h-4 w-4" />
            </button>

            {/* ==================================================
                MAIN CONTENT
            ================================================== */}

            <div
              className="
                relative
                px-6
                py-12
                sm:px-10
                sm:py-14
                md:px-16
                md:py-16
                lg:px-20
                lg:py-20
              "
            >
              {/* =================================================
                  HEADER
              ================================================== */}

              <div className="max-w-[760px]">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      font-['Fraunces']
                      text-lg
                      italic
                      text-[#F58634]
                    "
                  >
                    Let's begin
                  </span>

                  <span className="h-px w-12 bg-[#124D56]/20" />

                  <span
                    className="
                      font-['Inter']
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#124D56]/65
                    "
                  >
                    Travel Enquiry
                  </span>
                </div>

                <h2
                  className="
                    mt-7
                    font-['Fraunces']
                    text-4xl
                    font-medium
                    leading-[0.98]
                    tracking-[-0.045em]
                    text-[#0B3C49]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-[70px]
                  "
                >
                  Let's plan your
                  <span className="block italic text-[#F58634]">
                    journey to India.
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-[620px]
                    font-['Inter']
                    text-sm
                    leading-7
                    text-[#536D72]
                    md:text-[15px]
                  "
                >
                  Share a few details about your travel plans and
                  our specialists will create a personalised
                  itinerary and quote around the way you want to
                  experience India.
                </p>
              </div>

              {/* =================================================
                  SELECTED TOUR
              ================================================== */}

              <div
                className="
                  mt-12
                  flex
                  flex-col
                  gap-5
                  border-y
                  border-[#124D56]/10
                  py-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-8
                "
              >
                <div>
                  <p
                    className="
                      font-['Inter']
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#F58634]
                    "
                  >
                    Selected journey
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-[650px]
                      font-['Fraunces']
                      text-2xl
                      font-medium
                      leading-tight
                      text-[#0B3C49]
                      sm:text-3xl
                    "
                  >
                    {tour?.name || "Selected Tour Package"}
                  </p>
                </div>

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    font-['Inter']
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#124D56]/65
                  "
                >
                  <MapPin className="h-4 w-4 text-[#F58634]" />

                  {tour?.route?.length
                    ? `${tour.route.length} destinations`
                    : "India"}
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="mt-14"
              >
                {/* =================================================
                    SECTION 01
                ================================================== */}

                <FormSection
                  number="01"
                  title="Your details"
                  description="Tell us who we will be planning this journey for."
                />

                <div
                  className="
                    mt-8
                    grid
                    gap-x-7
                    gap-y-7
                    md:grid-cols-2
                  "
                >
                  {/* NAME */}

                  <Field label="Full Name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="premium-input"
                    />
                  </Field>

                  {/* EMAIL */}

                  <Field label="Email Address" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="premium-input"
                    />
                  </Field>

                  {/* PHONE */}

                  <Field label="Phone Number" required>
                    <div className="relative">
                      <Phone
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#124D56]/45
                        "
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="premium-input pl-11"
                      />
                    </div>
                  </Field>

                  {/* NATIONALITY */}

                  <Field label="Nationality" required>
                    <select
                      id="nationality"
                      name="nationality"
                      required
                      value={formData.nationality}
                      onChange={handleChange}
                      className="premium-input"
                    >
                      <option value="">
                        Select nationality
                      </option>

                      <option value="Indian">Indian</option>
                      <option value="American">American</option>
                      <option value="British">British</option>
                      <option value="Australian">Australian</option>
                      <option value="Canadian">Canadian</option>
                      <option value="German">German</option>
                      <option value="French">French</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                {/* =================================================
                    SECTION 02
                ================================================== */}

                <div className="mt-16">
                  <FormSection
                    number="02"
                    title="Travel details"
                    description="Help us understand when and with whom you are travelling."
                  />
                </div>

                <div
                  className="
                    mt-8
                    grid
                    gap-x-7
                    gap-y-7
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >
                  {/* DURATION */}

                  <Field label="Duration">
                    <div className="relative">
                      <Clock3
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#124D56]/45
                        "
                      />

                      <input
                        id="duration"
                        name="duration"
                        type="text"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="e.g. 7 days"
                        className="premium-input pl-11"
                      />
                    </div>
                  </Field>

                  {/* DATE */}

                  <Field label="Preferred Date">
                    <div className="relative">
                      <CalendarDays
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#124D56]/45
                        "
                      />

                      <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="premium-input pl-11"
                      />
                    </div>
                  </Field>

                  {/* ADULTS */}

                  <Field label="Adults">
                    <div className="relative">
                      <Users
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#124D56]/45
                        "
                      />

                      <select
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="premium-input pl-11"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                          (number) => (
                            <option
                              key={number}
                              value={number}
                            >
                              {number}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </Field>

                  {/* CHILDREN */}

                  <Field label="Children">
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="premium-input"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(
                        (number) => (
                          <option
                            key={number}
                            value={number}
                          >
                            {number}
                          </option>
                        )
                      )}
                    </select>
                  </Field>
                </div>

                {/* =================================================
                    SECTION 03
                ================================================== */}

                <div className="mt-16">
                  <FormSection
                    number="03"
                    title="Your preferences"
                    description="A little more detail helps us make your journey feel truly yours."
                  />
                </div>

                <div
                  className="
                    mt-8
                    grid
                    gap-x-7
                    gap-y-7
                    md:grid-cols-2
                  "
                >
                  {/* HOTEL */}

                  <Field label="Hotel Preference">
                    <select
                      id="hotel"
                      name="hotel"
                      value={formData.hotel}
                      onChange={handleChange}
                      className="premium-input"
                    >
                      <option value="">
                        Select hotel preference
                      </option>

                      <option value="3 Star">3 Star</option>
                      <option value="4 Star">4 Star</option>
                      <option value="5 Star">5 Star</option>
                      <option value="Luxury">
                        Luxury / Boutique
                      </option>
                      <option value="Heritage">
                        Heritage Hotels
                      </option>
                      <option value="Flexible">
                        Open to suggestions
                      </option>
                    </select>
                  </Field>

                  {/* REFERENCE */}

                  <Field label="How did you hear about us?">
                    <select
                      id="reference"
                      name="reference"
                      value={formData.reference}
                      onChange={handleChange}
                      className="premium-input"
                    >
                      <option value="">
                        Select an option
                      </option>

                      <option value="Google">Google</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Friend or Family">
                        Friend or Family
                      </option>
                      <option value="Travel Agent">
                        Travel Agent
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div className="mt-7">
                  <Field label="Tell us about your journey">
                    <textarea
                      id="itinerary"
                      name="itinerary"
                      rows="6"
                      value={formData.itinerary}
                      onChange={handleChange}
                      placeholder="Tell us about places you would like to visit, experiences you are interested in, your preferred pace, special occasions, dietary requirements, or anything else we should know..."
                      className="
                        premium-input
                        min-h-[170px]
                        resize-none
                        !py-5
                        leading-7
                      "
                    />
                  </Field>
                </div>

                {/* =================================================
                    FINAL CTA
                ================================================== */}

                <div
                  className="
                    mt-16
                    border-t
                    border-[#124D56]/10
                    pt-9
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-8
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                    "
                  >
                    {/* LEFT */}

                    <div className="max-w-[540px]">
                      <p
                        className="
                          font-['Fraunces']
                          text-xl
                          font-medium
                          text-[#0B3C49]
                          sm:text-2xl
                        "
                      >
                        Your journey starts here.
                      </p>

                      <p
                        className="
                          mt-2
                          font-['Inter']
                          text-xs
                          leading-6
                          text-[#71878B]
                        "
                      >
                        Send us your requirements and our travel
                        specialists will get back to you with a
                        personalised proposal.
                      </p>
                    </div>

                    {/* BUTTON */}

                    <button
                      type="submit"
                      className="
                        group
                        relative
                        inline-flex
                        h-[62px]
                        shrink-0
                        items-center
                        justify-center
                        gap-5
                        overflow-hidden
                        rounded-full
                        bg-[#0B3C49]
                        px-8
                        font-['Inter']
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white
                        shadow-[0_15px_40px_rgba(11,60,73,0.16)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:bg-[#F58634]
                        hover:text-[#0B3C49]
                        hover:shadow-[0_20px_50px_rgba(245,134,52,0.2)]
                        sm:px-10
                        cursor-pointer
                      "
                    >
                      <span className="relative z-10">
                        Request My Quote
                      </span>

                      <span
                        className="
                          relative
                          z-10
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:bg-[#0B3C49]/10
                        "
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  </div>

                  {/* PRIVACY */}

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#F58634]" />

                    <p
                      className="
                        font-['Inter']
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#124D56]/45
                      "
                    >
                      No obligation · Personalised planning ·
                      Expert assistance
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// FORM SECTION HEADER
// ============================================================

function FormSection({
  number,
  title,
  description,
}) {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        border-b
        border-[#124D56]/10
        pb-5
        sm:flex-row
        sm:items-end
        sm:justify-between
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            font-['Fraunces']
            text-2xl
            font-medium
            text-[#F58634]
          "
        >
          {number}
        </span>

        <div className="h-7 w-px bg-[#124D56]/15" />

        <h3
          className="
            font-['Fraunces']
            text-2xl
            font-medium
            text-[#0B3C49]
            sm:text-3xl
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          max-w-md
          font-['Inter']
          text-[10px]
          leading-5
          text-[#71878B]
          sm:text-right
        "
      >
        {description}
      </p>
    </div>
  );
}

// ============================================================
// FORM FIELD
// ============================================================

function Field({
  label,
  required = false,
  children,
}) {
  return (
    <div className="w-full">
      <label
        className="
          mb-3
          block
          font-['Inter']
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#124D56]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#F58634]">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}