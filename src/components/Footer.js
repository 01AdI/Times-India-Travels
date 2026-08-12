import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { tourCategories } from "../utils/TourPackage_data";

// ---------------------------------------------------------------------------
// CONTACT INFO
// ---------------------------------------------------------------------------

const contactInfo = {
  address:
    "C2/106, Flat No S2, 2nd Floor, Sneh Villa, Chitrakoot Scheme, Jaipur - 302021, Rajasthan",
  phone: "+91 9610605261",
  email: "tours@timesindiatravels.com",
};

// ---------------------------------------------------------------------------
// COMPANY LINKS
// ---------------------------------------------------------------------------

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About_Us" },
  { label: "Tour Packages", href: "/Tour" },
  { label: "Car Rental", href: "/CarRental" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact Us", href: "/Contact-Us" },
];

// ---------------------------------------------------------------------------
// TOUR PACKAGE LINKS
// Generated directly from tourCategories
//
// Object key = category slug
// category.name = displayed name
//
// Example:
// "golden-triangle-tours": {
//   name: "Golden Triangle Tours"
// }
//
// becomes:
// {
//   label: "Golden Triangle Tours",
//   href: "/Tour/golden-triangle-tours"
// }
// ---------------------------------------------------------------------------

const tourPackageLinks = Object.entries(tourCategories).map(
  ([id, category]) => ({
    label: category.name,
    href: `/Tour/${id}`,
  })
);

// ---------------------------------------------------------------------------
// FOOTER COLUMNS
// ---------------------------------------------------------------------------

const footerColumns = [
  {
    title: "Explore",
    links: [
      {
        label: "Wonders of India",
        href: "/wonders-of-india",
      },
      {
        label: "Destinations",
        href: "/destinations",
      },
      {
        label: "Fairs & Festivals",
        href: "/fair-and-festivals",
      },
      {
        label: "Private Day Tours",
        href: "/private-day-tours",
      },
    ],
  },

  {
    title: "Tour Packages",
    links: tourPackageLinks,
  },
];

// ---------------------------------------------------------------------------
// BOTTOM LINKS
// ---------------------------------------------------------------------------

const bottomLinks = [
  {
    label: "Testimonials",
    href: "/Testimonials",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-condition",
  },
  {
    label: "Privacy Policy",
    href: "/Privacy-Policy",
  },
  {
    label: "Refund Policy",
    href: "/Refund-Policy",
  },
  {
    label: "Disclaimer",
    href: "/Disclaimer",
  },
  {
    label: "Pay Online",
    href: "/pay-online",
  },
];

// ---------------------------------------------------------------------------
// SOCIAL LINKS
// ---------------------------------------------------------------------------

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/timesindiatravelsofficial",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/times_travels",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/timesindiatravels/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/times-india-travels-1a92633b/",
    icon: "linkedin",
  },
];

// ---------------------------------------------------------------------------
// FOOTER COMPONENT
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <>
      {/* ================================================================
          DECORATIVE SKYLINE
      ================================================================= */}

      <div className="relative w-full overflow-hidden bg-[#F2FAFB] leading-[0] pt-10">
        <img
          src="https://res.cloudinary.com/dgmsnixag/image/upload/v1786119995/india_skyline_teal_transparent_pplv6o.png"
          alt=""
          aria-hidden="true"
          decoding="async"
          width="1440"
          height="83"
          className="block w-full h-auto select-none pointer-events-none"
        />
      </div>

      {/* ================================================================
          FOOTER
      ================================================================= */}

      <footer className="bg-[#0f3b42] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-10 gap-y-14">

            {/* ==========================================================
                BRAND + NEWSLETTER
            =========================================================== */}

            <section className="lg:col-span-2">
              <p className="font-['Fraunces'] text-2xl tracking-wide text-white">
                Times India Travels
              </p>

              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA]">
                Bringing the world to India
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-xs">
                Hand-crafted journeys across India — from royal Rajasthan to
                the backwaters of the South — planned with care, guided with
                pride.
              </p>

              {/* Newsletter */}

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 max-w-xs"
              >
                <label
                  htmlFor="footer-newsletter"
                  className="text-[11px] uppercase tracking-[0.2em] text-white"
                >
                  Travel notes, occasionally
                </label>

                <div className="mt-3 flex items-center border-b border-white/25 focus-within:border-white/70 transition-colors">
                  <input
                    id="footer-newsletter"
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full bg-transparent py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </section>

            {/* ==========================================================
                COMPANY
            =========================================================== */}

            <nav aria-labelledby="footer-company">
              <h2
                id="footer-company"
                className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5"
              >
                Company
              </h2>

              <ul className="space-y-3.5 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ==========================================================
                EXPLORE + TOUR PACKAGE COLUMNS
            =========================================================== */}

            {footerColumns.map((column) => (
              <nav
                key={column.title}
                aria-labelledby={`footer-${column.title}`}
              >
                <h2
                  id={`footer-${column.title}`}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5"
                >
                  {column.title}
                </h2>

                <ul className="space-y-3.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* ==========================================================
                CONTACT
            =========================================================== */}

            <section aria-labelledby="footer-contact-heading">
              <h2
                id="footer-contact-heading"
                className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5"
              >
                Get in Touch
              </h2>

              <address className="not-italic space-y-4 text-sm">
                {/* Address */}

                <p className="flex gap-3 text-white/70">
                  <MapPin
                    className="w-4 h-4 shrink-0 mt-0.5 text-white/40"
                    aria-hidden="true"
                  />

                  <span>{contactInfo.address}</span>
                </p>

                {/* Phone */}

                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone
                    className="w-4 h-4 shrink-0 text-white/40"
                    aria-hidden="true"
                  />

                  <span>{contactInfo.phone}</span>
                </a>

                {/* Email */}

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-4 h-4 shrink-0 text-white/40"
                    aria-hidden="true"
                  />

                  <span>{contactInfo.email}</span>
                </a>
              </address>

              {/* ========================================================
                  SOCIAL LINKS
              ========================================================= */}

              <ul className="mt-8 flex gap-2.5">
                {socialLinks.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                    >
                      {/* Facebook */}

                      {icon === "facebook" && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z" />
                        </svg>
                      )}

                      {/* Twitter */}

                      {icon === "twitter" && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.9 2h6.4l4.4 5.8L18.9 2zm-1.1 17.8h1.7L8.3 4.1H6.5l11.3 15.7z" />
                        </svg>
                      )}

                      {/* Instagram */}

                      {icon === "instagram" && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-none stroke-current"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="5"
                          />

                          <circle cx="12" cy="12" r="4" />

                          <circle
                            cx="17.5"
                            cy="6.5"
                            r="1"
                            fill="currentColor"
                            stroke="none"
                          />
                        </svg>
                      )}

                      {/* LinkedIn */}

                      {icon === "linkedin" && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5zM3.5 9h3.4v11.5H3.5V9zm5.5 0h3.3v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.4v-5.4c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.5H9V9z" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* ================================================================
            BOTTOM BAR
        ================================================================= */}

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">

            <p className="text-xs text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Times India Travels. All rights
              reserved.
            </p>

            <nav aria-label="Legal">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                {bottomLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
