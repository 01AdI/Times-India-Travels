import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// 1. DATA
// ---------------------------------------------------------------------------

const contactInfo = {
  address:
    "C2/106, Flat No S2, 2nd Floor, Sneh Villa, Chitrakoot Scheme, Jaipur - 302021, Rajasthan",
  phone: "+91 9610605261",
  email: "tours@timesindiatravels.com",
};

// Primary site nav — mirrors the header. Pages beyond Home aren't built
// yet, but the links are here now so nothing needs to change structurally
// once About Us / Car Rental / Blog exist.
const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Car Rental", href: "/car-rental" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Wonders of India", href: "/wonders-of-india" },
      { label: "Destinations", href: "/destinations" },
      { label: "Fairs & Festivals", href: "/fair-and-festivals" },
      { label: "Private Day Tours", href: "/private-day-tours" },
    ],
  },
  {
    title: "Tour Packages",
    links: [
      { label: "Golden Triangle Tours", href: "/tour-packages/golden-triangle-tours" },
      { label: "Rajasthan Tours", href: "/tour-packages/rajasthan-tours" },
      { label: "South India Tours", href: "/tour-packages/south-india-tours" },
      { label: "India Wildlife Tours", href: "/tour-packages/india-wildlife-tours" },
      { label: "North & West India Tour", href: "/tour-packages/north-west-india-tour" },
      { label: "India & Nepal Tour", href: "/tour-packages/india-nepal-tour" },
      { label: "Jammu & Kashmir Tour", href: "/tour-packages/jammu-kashmir-tour" },
    ],
  },
];

const bottomLinks = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Terms & Conditions", href: "/terms-and-condition" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Pay Online", href: "/pay-online" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

// ---------------------------------------------------------------------------
// 2. COMPONENT
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <>
      {/* Decorative skyline above the footer */}
      <div className="relative w-full overflow-hidden bg-[#F2FAFB] leading-[0] pt-15">
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

      <footer className="bg-[#0f3b42] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-10 gap-y-14">
            {/* ---------------- BRAND + NEWSLETTER ---------------- */}
            <section className="lg:col-span-2">
              <p className="font-['Fraunces'] text-2xl tracking-wide text-white">
                Times India Travels
              </p>

              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA]">
                Bringing the world to India
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-xs">
                Hand-crafted journeys across India — from royal Rajasthan to the
                backwaters of the South — planned with care, guided with pride.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-xs">
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
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </section>

            {/* ---------------- PRIMARY SITE NAV ---------------- */}
            <nav aria-labelledby="footer-company">
              <h2 id="footer-company" className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5">
                Company
              </h2>
              <ul className="space-y-3.5 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ---------------- LINK COLUMNS ---------------- */}
            {footerColumns.map((column) => (
              <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
                <h2
                  id={`footer-${column.title}`}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5"
                >
                  {column.title}
                </h2>
                <ul className="space-y-3.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* ---------------- CONTACT ---------------- */}
            <section aria-labelledby="footer-contact-heading">
              <h2 id="footer-contact-heading" className="text-[11px] uppercase tracking-[0.2em] text-[#7BCBDA] mb-5">
                Get in Touch
              </h2>

              <address className="not-italic space-y-4 text-sm">
                <p className="flex gap-3 text-white/70">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/40" aria-hidden="true" />
                  <span>{contactInfo.address}</span>
                </p>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-white/40" aria-hidden="true" />
                  {contactInfo.phone}
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-white/40" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </address>

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
                      {icon === "facebook" && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                          <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z" />
                        </svg>
                      )}
                      {icon === "twitter" && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.9 2h6.4l4.4 5.8L18.9 2zm-1.1 17.8h1.7L8.3 4.1H6.5l11.3 15.7z" />
                        </svg>
                      )}
                      {icon === "instagram" && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                      )}
                      {icon === "linkedin" && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
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

        {/* ---------------- BOTTOM BAR ---------------- */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Times India Travels. All rights reserved.
            </p>

            <nav aria-label="Legal">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                {bottomLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white/80 transition-colors">
                      {link.label}
                    </a>
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