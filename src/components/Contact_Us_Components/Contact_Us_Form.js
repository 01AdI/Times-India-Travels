import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Users,
  Phone,
  MapPin,
  Sparkles,
  UserRound,
  Mail,
  Globe2,
  Clock3,
  Baby,
  Hotel,
  MapPinned,
  Megaphone,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export default function Contact_Us_PlanJourney() {
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
    tourPackage: "",
    reference: "",
    itinerary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Journey Request:", formData);

    alert(
      "Thank you! Your journey request has been received. Our travel specialist will contact you shortly."
    );
  };

  return (
    <section
    id="plan-your-journey"
      className="
        relative
        overflow-hidden
        bg-[#0B3C49]
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#F58634]/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-60
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F2FAFB]/[0.04]
          blur-[100px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1350px]
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.10]
          bg-[#082F39]
          shadow-[0_40px_120px_rgba(0,0,0,0.28)]
        "
      >
        <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT — VISUAL / EDITORIAL PANEL
          ================================================== */}

          <div
            className="
              relative
              min-h-[520px]
              overflow-hidden
              lg:min-h-[760px]
            "
          >

            {/* MAIN IMAGE */}

            <img
              src="https://i.pinimg.com/736x/ea/3b/aa/ea3baa720fabc7eceb9705826f139f97.jpg"
              alt="India travel"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071F27]
                via-[#0B3C49]/35
                to-[#0B3C49]/10
              "
            />

            {/* SECONDARY IMAGE */}

            <div
              className="
                absolute
                right-6
                top-6
                hidden
                h-44
                w-32
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                shadow-2xl
                sm:block
                lg:right-8
                lg:top-8
                lg:h-52
                lg:w-36
              "
            >
              <img
                src="https://i.pinimg.com/736x/33/71/0d/33710db2c6f74435a4b94b4929a08b40.jpg"
                alt="India destination"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-[#0B3C49]/20" />
            </div>

            {/* EDITORIAL CONTENT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-7
                sm:p-10
                lg:p-12
              "
            >

              {/* EYEBROW */}

              <div className="mb-6 flex items-center gap-4">

                <span
                  className="
                    font-['Fraunces']
                    text-xl
                    italic
                    text-[#F58634]
                  "
                >
                  Begin here
                </span>

                <span className="h-px w-12 bg-white/25" />

                <span
                  className="
                    font-['Inter']
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/60
                  "
                >
                  Your India
                </span>

              </div>

              {/* HEADING */}

              <h2
                className="
                  max-w-md
                  font-['Fraunces']
                  text-5xl
                  font-medium
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                "
              >
                Plan a journey

                <span className="block italic text-[#F58634]">
                  worth remembering.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-sm
                  font-['Inter']
                  text-sm
                  leading-7
                  text-white/65
                "
              >
                Tell us what you have in mind. We'll shape the
                details around the way you want to experience India.
              </p>

              {/* LOCATION MARKER */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.06]
                  "
                >
                  <MapPin className="h-3.5 w-3.5 text-[#F58634]" />
                </span>

                Rajasthan · Kerala · Kashmir · Beyond
              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              justify-center
              px-6
              py-12
              sm:px-10
              sm:py-14
              md:px-14
              lg:px-16
              xl:px-20
            "
          >

            {/* TOP LABEL */}

            <div className="mb-8 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <span
                  className="
                    font-['Fraunces']
                    text-xl
                    italic
                    text-[#F58634]
                  "
                >
                  01
                </span>

                <span className="h-px w-10 bg-white/15" />

                <span
                  className="
                    font-['Inter']
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-white/45
                  "
                >
                  Travel Enquiry
                </span>

              </div>

              <Sparkles className="h-4 w-4 text-[#F58634]" />

            </div>

            {/* FORM HEADING */}

            <h3
              className="
                max-w-xl
                font-['Fraunces']
                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Tell us about

              <span className="block italic text-[#F58634]">
                your journey.
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-lg
                font-['Inter']
                text-sm
                leading-7
                text-white/55
              "
            >
              A few details are all we need to start designing
              your perfect Indian escape.
            </p>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-10"
            >

              {/* =================================================
                  PERSONAL DETAILS
              ================================================== */}

              <div className="mb-5">

                <p
                  className="
                    font-['Inter']
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#F58634]
                  "
                >
                  Your details
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <Field
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  icon={<UserRound />}
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  icon={<Mail />}
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  required
                  icon={<Phone />}
                />

                <SelectField
                  label="Nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  options={[
                    "Indian",
                    "American",
                    "British",
                    "Australian",
                    "Canadian",
                    "German",
                    "French",
                    "Other",
                  ]}
                  icon={<Globe2 />}
                />

              </div>

              {/* =================================================
                  TRAVEL DETAILS
              ================================================== */}

              <div className="mb-5 mt-10">

                <p
                  className="
                    font-['Inter']
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#F58634]
                  "
                >
                  Your journey
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <Field
                  label="Duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="7 days"
                  icon={<Clock3 />}
                />

                {/* TRAVEL DATE */}

                <div>
                  <label className="mb-2 block font-['Inter'] text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Travel Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        h-4
                        w-4
                        -translate-y-1/2
                        text-[#F58634]
                      "
                    />

                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="
                        h-14
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-white/[0.13]
                        bg-white/[0.055]
                        px-4
                        pl-11
                        font-['Inter']
                        text-[11px]
                        font-medium
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        hover:border-white/25
                        focus:border-[#F58634]/70
                        focus:bg-white/[0.08]
                        focus:ring-1
                        focus:ring-[#F58634]/20
                      "
                    />

                  </div>
                </div>

                <SelectField
                  label="Adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  options={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                  ]}
                  icon={<Users />}
                />

                <SelectField
                  label="Children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  options={[
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                  ]}
                  icon={<Baby />}
                />

              </div>

              {/* =================================================
                  PREFERENCES
              ================================================== */}

              <div className="mb-5 mt-10">

                <p
                  className="
                    font-['Inter']
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#F58634]
                  "
                >
                  Preferences
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <SelectField
                  label="Hotel Preference"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  options={[
                    "3 Star",
                    "4 Star",
                    "5 Star",
                    "Luxury / Boutique",
                    "Heritage Hotels",
                    "Open to suggestions",
                  ]}
                  icon={<Hotel />}
                />

                <SelectField
                  label="Tour Package"
                  name="tourPackage"
                  value={formData.tourPackage}
                  onChange={handleChange}
                  options={[
                    "Golden Triangle",
                    "Rajasthan Tours",
                    "Kerala Tours",
                    "India Wildlife",
                    "Jammu & Kashmir",
                    "South India",
                    "India + Nepal",
                    "Custom Journey",
                  ]}
                  icon={<MapPinned />}
                />

                <SelectField
                  label="How did you hear about us?"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  options={[
                    "Google",
                    "Instagram",
                    "Facebook",
                    "YouTube",
                    "Friend or Family",
                    "Travel Agent",
                    "Other",
                  ]}
                  icon={<Megaphone />}
                />

              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div className="mt-4">

                <label className="mb-2 block font-['Inter'] text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Tell us about your journey
                </label>

                <div className="relative">

                  <MessageSquare
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      h-4
                      w-4
                      text-[#F58634]
                    "
                  />

                  <textarea
                    name="itinerary"
                    value={formData.itinerary}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Places you'd love to see, experiences you're interested in, special occasions..."
                    className="
                      min-h-[110px]
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.13]
                      bg-white/[0.055]
                      px-4
                      py-4
                      pl-11
                      font-['Inter']
                      text-[11px]
                      leading-6
                      text-white
                      outline-none
                      placeholder:text-white/30
                      transition-all
                      duration-300
                      hover:border-white/25
                      focus:border-[#F58634]/70
                      focus:bg-white/[0.08]
                      focus:ring-1
                      focus:ring-[#F58634]/20
                    "
                  />

                </div>

              </div>

              {/* =================================================
                  BOTTOM
              ================================================== */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-6
                  border-t
                  border-white/10
                  pt-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div>

                  <p
                    className="
                      font-['Inter']
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    "
                  >
                    No obligation
                  </p>

                  <p
                    className="
                      mt-1
                      font-['Inter']
                      text-[10px]
                      text-white/40
                    "
                  >
                    We'll respond with your personalised options.
                  </p>

                </div>

                {/* CTA */}

                <button
                  type="submit"
                  className="
                    group
                    relative
                    inline-flex
                    h-14
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    gap-4
                    overflow-hidden
                    rounded-full
                    bg-[#F58634]
                    px-7
                    font-['Inter']
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#0B3C49]
                    shadow-[0_15px_40px_rgba(245,134,52,0.20)]
                    transition-all
                    duration-500
                    hover:scale-[1.03]
                    hover:shadow-[0_20px_55px_rgba(245,134,52,0.32)]
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
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B3C49]
                      text-[#F58634]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>

                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PREMIUM TEXT FIELD
============================================================ */

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  icon,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="
          mb-2
          block
          font-['Inter']
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/45
        "
      >
        {label}
      </label>

      <div className="relative">

        {/* ICON */}

        <span
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            z-10
            flex
            h-4
            w-4
            -translate-y-1/2
            items-center
            justify-center
            text-[#F58634]
          "
        >
          {icon &&
            typeof icon.type === "function"
            ? icon
            : icon}
        </span>

        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="
            h-14
            w-full
            rounded-xl
            border
            border-white/[0.13]
            bg-white/[0.055]
            px-4
            pl-11
            font-['Inter']
            text-[11px]
            font-medium
            text-white
            outline-none
            placeholder:text-white/30
            transition-all
            duration-300
            hover:border-white/25
            hover:bg-white/[0.07]
            focus:border-[#F58634]/70
            focus:bg-white/[0.08]
            focus:ring-1
            focus:ring-[#F58634]/20
          "
        />

      </div>
    </div>
  );
}

/* ============================================================
   PREMIUM SELECT FIELD
============================================================ */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  icon,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="
          mb-2
          block
          font-['Inter']
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/45
        "
      >
        {label}
      </label>

      <div className="relative">

        {/* LEFT ICON */}

        <span
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-4
            w-4
            -translate-y-1/2
            items-center
            justify-center
            text-[#F58634]
          "
        >
          {icon}
        </span>

        {/* SELECT */}

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="
            h-14
            w-full
            cursor-pointer
            appearance-none
            rounded-xl
            border
            border-white/[0.13]
            bg-white/[0.055]
            px-4
            pl-11
            pr-11
            font-['Inter']
            text-[11px]
            font-medium
            text-white
            outline-none
            transition-all
            duration-300
            hover:border-white/25
            hover:bg-white/[0.07]
            focus:border-[#F58634]/70
            focus:bg-white/[0.08]
            focus:ring-1
            focus:ring-[#F58634]/20
          "
        >

          <option
            value=""
            className="bg-[#0B3C49] text-white"
          >
            Select
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0B3C49] text-white"
            >
              {option}
            </option>
          ))}

        </select>

        {/* RIGHT CHEVRON */}

        <ChevronDown
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-white/45
          "
        />

      </div>
    </div>
  );
}