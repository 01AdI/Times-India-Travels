import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  LockKeyhole,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";

// ============================================================
// ANIMATION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// PAY ONLINE
// ============================================================

export default function PayOnline() {
  const [sameAsCustomer, setSameAsCustomer] = useState(false);

  const [formData, setFormData] = useState({
    amount: "",
    description: "",

    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    confirmEmail: "",
    telephone: "",

    billingName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingPostalCode: "",
    billingCountry: "",
    billingTelephone: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSameAsCustomer = (checked) => {
    setSameAsCustomer(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,

        billingName: prev.name,
        billingAddress: prev.address,
        billingCity: prev.city,
        billingState: prev.state,
        billingPostalCode: prev.postalCode,
        billingCountry: prev.country,
        billingTelephone: prev.telephone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        billingName: "",
        billingAddress: "",
        billingCity: "",
        billingState: "",
        billingPostalCode: "",
        billingCountry: "",
        billingTelephone: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // ========================================================
    // CONNECT YOUR PAYMENT GATEWAY HERE
    // ========================================================

    console.log("Payment form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-[#F2FAFB] text-[#0B3C49]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-28">

        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#124D56]/5
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-[#F58634]/5
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            bottom-[-180px]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-[#124D56]/5
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* TOP LABEL */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#F58634]" />

            <span
              className="
                font-['Inter']
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#F58634]
              "
            >
              Secure Payment
            </span>

            <span className="h-px w-10 bg-[#F58634]" />
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              mx-auto
              mt-7
              max-w-4xl
              text-center
              font-['Fraunces']
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.04em]
              text-[#0B3C49]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            Complete your
            <span className="block italic text-[#F58634]">
              journey securely.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-center
              font-['Inter']
              text-sm
              font-light
              leading-7
              tracking-wide
              text-[#61777B]
              sm:text-base
              sm:leading-8
            "
          >
            Make your payment securely through Times India
            Travels. Please enter the required details below so
            we can process your payment and associate it with
            your travel arrangements.
          </motion.p>

          {/* SECURITY INDICATOR */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <LockKeyhole
              size={15}
              strokeWidth={1.5}
              className="text-[#F58634]"
            />

            <span
              className="
                font-['Inter']
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#124D56]/60
              "
            >
              Secure Internet Payment
            </span>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          PAYMENT FORM
      ====================================================== */}

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="mx-auto max-w-5xl">

          <form onSubmit={handleSubmit}>

            {/* =================================================
                PAYMENT DETAILS
            ================================================== */}

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-[#124D56]/10
                bg-white
                shadow-[0_20px_60px_rgba(11,60,73,0.055)]
              "
            >

              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-b
                  border-[#124D56]/10
                  px-7
                  py-7
                  sm:px-10
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B3C49]
                      text-[#F58634]
                    "
                  >
                    <CreditCard
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>

                    <p
                      className="
                        font-['Inter']
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#F58634]
                      "
                    >
                      Payment
                    </p>

                    <h2
                      className="
                        mt-1
                        font-['Fraunces']
                        text-2xl
                        font-medium
                        text-[#0B3C49]
                        sm:text-3xl
                      "
                    >
                      Transaction Details
                    </h2>

                  </div>

                </div>

                <ShieldCheck
                  size={22}
                  strokeWidth={1.4}
                  className="hidden text-[#F58634] sm:block"
                />

              </div>


              {/* CONTENT */}

              <div className="grid gap-7 p-7 sm:p-10 md:grid-cols-2">

                <FormField
                  label="Sale Amount"
                  required
                  prefix="₹"
                >
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) =>
                      updateField("amount", e.target.value)
                    }
                    placeholder="Enter amount in INR"
                    required
                    className={inputClass}
                  />

                  <p className="mt-2 text-xs leading-5 text-[#8A9A9D]">
                    Please convert your payment amount into INR
                    before submitting.
                  </p>
                </FormField>


                <FormField
                  label="Description"
                  required
                >
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) =>
                      updateField(
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Tour name or payment purpose"
                    required
                    className={inputClass}
                  />

                  <p className="mt-2 text-xs leading-5 text-[#8A9A9D]">
                    Example: Golden Triangle Tour
                  </p>
                </FormField>

              </div>

            </motion.section>


            {/* =================================================
                CUSTOMER DETAILS
            ================================================== */}

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                mt-7
                overflow-hidden
                rounded-[28px]
                border
                border-[#124D56]/10
                bg-white
                shadow-[0_20px_60px_rgba(11,60,73,0.045)]
              "
            >

              {/* HEADER */}

              <SectionHeader
                icon={<UserRound size={21} strokeWidth={1.5} />}
                eyebrow="01"
                title="Customer Details"
              />

              {/* FORM */}

              <div className="p-7 sm:p-10">

                <div className="grid gap-7 md:grid-cols-2">

                  <FormField
                    label="Full Name"
                    required
                  >
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Telephone"
                    required
                  >
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) =>
                        updateField(
                          "telephone",
                          e.target.value
                        )
                      }
                      placeholder="+91 00000 00000"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Email Address"
                    required
                  >
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateField(
                          "email",
                          e.target.value
                        )
                      }
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Confirm Email"
                    required
                  >
                    <input
                      type="email"
                      value={formData.confirmEmail}
                      onChange={(e) =>
                        updateField(
                          "confirmEmail",
                          e.target.value
                        )
                      }
                      placeholder="Confirm your email"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <div className="md:col-span-2">

                    <FormField
                      label="Address"
                      required
                    >
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          updateField(
                            "address",
                            e.target.value
                          )
                        }
                        placeholder="Street address"
                        required
                        className={inputClass}
                      />
                    </FormField>

                  </div>


                  <FormField
                    label="City"
                    required
                  >
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        updateField(
                          "city",
                          e.target.value
                        )
                      }
                      placeholder="City"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="State / Province"
                    required
                  >
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) =>
                        updateField(
                          "state",
                          e.target.value
                        )
                      }
                      placeholder="State / Province"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="ZIP / Postal Code"
                    required
                  >
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) =>
                        updateField(
                          "postalCode",
                          e.target.value
                        )
                      }
                      placeholder="Postal code"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Country"
                    required
                  >
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        updateField(
                          "country",
                          e.target.value
                        )
                      }
                      required
                      className={selectClass}
                    >
                      <option value="">
                        Select country
                      </option>

                      <option value="India">
                        India
                      </option>

                      <option value="United Kingdom">
                        United Kingdom
                      </option>

                      <option value="United States">
                        United States
                      </option>

                      <option value="Australia">
                        Australia
                      </option>

                      <option value="Canada">
                        Canada
                      </option>

                      <option value="Germany">
                        Germany
                      </option>

                      <option value="France">
                        France
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>
                  </FormField>

                </div>

              </div>

            </motion.section>


            {/* =================================================
                BILLING ADDRESS
            ================================================== */}

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                mt-7
                overflow-hidden
                rounded-[28px]
                border
                border-[#124D56]/10
                bg-white
                shadow-[0_20px_60px_rgba(11,60,73,0.045)]
              "
            >

              <SectionHeader
                icon={<MapPin size={21} strokeWidth={1.5} />}
                eyebrow="02"
                title="Billing Address"
                rightContent={
                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      font-['Inter']
                      text-xs
                      font-medium
                      text-[#61777B]
                    "
                  >

                    <input
                      type="checkbox"
                      checked={sameAsCustomer}
                      onChange={(e) =>
                        handleSameAsCustomer(
                          e.target.checked
                        )
                      }
                      className="
                        h-4
                        w-4
                        accent-[#F58634]
                      "
                    />

                    Same as customer address

                  </label>
                }
              />


              <div className="p-7 sm:p-10">

                <div className="grid gap-7 md:grid-cols-2">

                  <FormField
                    label="Full Name"
                    required
                  >
                    <input
                      type="text"
                      value={formData.billingName}
                      onChange={(e) =>
                        updateField(
                          "billingName",
                          e.target.value
                        )
                      }
                      placeholder="Billing name"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Telephone"
                    required
                  >
                    <input
                      type="tel"
                      value={formData.billingTelephone}
                      onChange={(e) =>
                        updateField(
                          "billingTelephone",
                          e.target.value
                        )
                      }
                      placeholder="+91 00000 00000"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <div className="md:col-span-2">

                    <FormField
                      label="Address"
                      required
                    >
                      <input
                        type="text"
                        value={formData.billingAddress}
                        onChange={(e) =>
                          updateField(
                            "billingAddress",
                            e.target.value
                          )
                        }
                        placeholder="Billing street address"
                        required
                        className={inputClass}
                      />
                    </FormField>

                  </div>


                  <FormField
                    label="City"
                    required
                  >
                    <input
                      type="text"
                      value={formData.billingCity}
                      onChange={(e) =>
                        updateField(
                          "billingCity",
                          e.target.value
                        )
                      }
                      placeholder="City"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="State / Province"
                    required
                  >
                    <input
                      type="text"
                      value={formData.billingState}
                      onChange={(e) =>
                        updateField(
                          "billingState",
                          e.target.value
                        )
                      }
                      placeholder="State / Province"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="ZIP / Postal Code"
                    required
                  >
                    <input
                      type="text"
                      value={formData.billingPostalCode}
                      onChange={(e) =>
                        updateField(
                          "billingPostalCode",
                          e.target.value
                        )
                      }
                      placeholder="Postal code"
                      required
                      className={inputClass}
                    />
                  </FormField>


                  <FormField
                    label="Country"
                    required
                  >
                    <select
                      value={formData.billingCountry}
                      onChange={(e) =>
                        updateField(
                          "billingCountry",
                          e.target.value
                        )
                      }
                      required
                      className={selectClass}
                    >
                      <option value="">
                        Select country
                      </option>

                      <option value="India">
                        India
                      </option>

                      <option value="United Kingdom">
                        United Kingdom
                      </option>

                      <option value="United States">
                        United States
                      </option>

                      <option value="Australia">
                        Australia
                      </option>

                      <option value="Canada">
                        Canada
                      </option>

                      <option value="Germany">
                        Germany
                      </option>

                      <option value="France">
                        France
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>
                  </FormField>

                </div>

              </div>

            </motion.section>


            {/* =================================================
                PAYMENT SUMMARY
            ================================================== */}

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="
                mt-7
                rounded-[28px]
                bg-[#0B3C49]
                p-7
                sm:p-10
              "
            >

              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#F58634]/30
                        bg-[#F58634]/10
                      "
                    >
                      <WalletCards
                        size={19}
                        className="text-[#F58634]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>

                      <p
                        className="
                          font-['Inter']
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.3em]
                          text-[#F58634]
                        "
                      >
                        Secure Checkout
                      </p>

                      <h3
                        className="
                          mt-1
                          font-['Fraunces']
                          text-2xl
                          text-white
                          sm:text-3xl
                        "
                      >
                        Ready to make your payment?
                      </h3>

                    </div>

                  </div>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      font-['Inter']
                      text-sm
                      leading-7
                      text-white/60
                    "
                  >
                    Your payment information will be securely
                    processed through our payment gateway.
                  </p>

                </div>


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
                    px-8
                    py-4
                    font-['Inter']
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#e87827]
                    hover:shadow-[0_15px_35px_rgba(245,134,52,0.25)]
                  "
                >

                  <LockKeyhole
                    size={16}
                    strokeWidth={1.6}
                  />

                  Pay Securely

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </div>

            </motion.section>


            {/* =================================================
                SECURITY NOTE
            ================================================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="
                mt-7
                flex
                items-start
                justify-center
                gap-3
                text-center
              "
            >

              <ShieldCheck
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#F58634]"
              />

              <p
                className="
                  max-w-2xl
                  font-['Inter']
                  text-xs
                  leading-6
                  text-[#829396]
                "
              >
                Your payment details are transmitted securely.
                Times India Travels does not store your card
                information on this website.
              </p>

            </motion.div>

          </form>

        </div>

      </section>


      {/* =====================================================
          BRAND DIVIDER
      ====================================================== */}

      <div className="px-6 pb-12 sm:px-8 lg:px-12">

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-center
            gap-4
          "
        >

          <span className="h-px flex-1 bg-[#124D56]/10" />

          <span
            className="
              font-['Fraunces']
              text-sm
              italic
              text-[#124D56]/50
            "
          >
            India, thoughtfully experienced.
          </span>

          <span className="h-px flex-1 bg-[#124D56]/10" />

        </div>

      </div>

    </main>
  );
}


// ============================================================
// SECTION HEADER
// ============================================================

function SectionHeader({
  icon,
  eyebrow,
  title,
  rightContent,
}) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        border-b
        border-[#124D56]/10
        px-7
        py-7
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:px-10
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#0B3C49]
            text-[#F58634]
          "
        >
          {icon}
        </div>

        <div>

          <p
            className="
              font-['Inter']
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#F58634]
            "
          >
            Section {eyebrow}
          </p>

          <h2
            className="
              mt-1
              font-['Fraunces']
              text-2xl
              font-medium
              text-[#0B3C49]
              sm:text-3xl
            "
          >
            {title}
          </h2>

        </div>

      </div>

      {rightContent}

    </div>
  );
}


// ============================================================
// FORM FIELD
// ============================================================

function FormField({
  label,
  required = false,
  children,
}) {
  return (
    <div>

      <label
        className="
          mb-2.5
          block
          font-['Inter']
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#47676C]
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


// ============================================================
// INPUT STYLES
// ============================================================

const inputClass = `
  h-12
  w-full
  rounded-xl
  border
  border-[#124D56]/10
  bg-[#F8FBFB]
  px-4
  font-['Inter']
  text-sm
  text-[#0B3C49]
  outline-none
  transition-all
  duration-300
  placeholder:text-[#9BAAAC]
  focus:border-[#F58634]/60
  focus:bg-white
  focus:ring-4
  focus:ring-[#F58634]/5
`;

const selectClass = `
  h-12
  w-full
  rounded-xl
  border
  border-[#124D56]/10
  bg-[#F8FBFB]
  px-4
  font-['Inter']
  text-sm
  text-[#0B3C49]
  outline-none
  transition-all
  duration-300
  focus:border-[#F58634]/60
  focus:bg-white
  focus:ring-4
  focus:ring-[#F58634]/5
`;