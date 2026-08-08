
import { useEffect, useState } from "react";
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Home,
  Mountain,
  Sparkles,
  Trees,
  Menu,
  Shield,
  MapPin,
  Clock3,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tourPackages = [
    {
      name: "Golden Triangle Tours",
      icon: Home,
      href: "/tour-packages/golden-triangle-tours",
    },
    {
      name: "Rajasthan Tours",
      icon: Mountain,
      href: "/tour-packages/rajasthan-tours",
    },
    {
      name: "South India Tours",
      icon: Sparkles,
      href: "/tour-packages/south-india-tours",
    },
    {
      name: "India Wildlife Tours",
      icon: Trees,
      href: "/tour-packages/india-wildlife-tours",
    },
    {
      name: "North & West India Tour",
      icon: Menu,
      href: "/tour-packages/north-west-india-tour",
    },
    {
      name: "India & Nepal Tour",
      icon: Shield,
      href: "/tour-packages/india-nepal-tour",
    },
    {
      name: "Jammu & Kashmir Tour",
      icon: MapPin,
      href: "/tour-packages/jammu-kashmir-tour",
    },
    {
      name: "Private Day Tours",
      icon: Clock3,
      href: "/private-day-tours",
    },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        px-4
        sm:px-6
        lg:px-8
        transition-all
        duration-300
        ${
          isScrolled
            ? "pt-3"
            : "pt-5"
        }
      `}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-5
          sm:px-6
          py-3
          rounded-full
          border
          transition-all
          duration-300

          ${
            isScrolled
              ? `
                bg-[#124d56]/95
                backdrop-blur-xl
                border-white/10
                shadow-[0_15px_40px_-15px_rgba(18,49,56,0.45)]
              `
              : `
                bg-white/90
                backdrop-blur-md
                border-white/60
                shadow-[0_15px_40px_-15px_rgba(18,49,56,0.35)]
              `
          }
        `}
      >
        {/* =========================================================
            LOGO
        ========================================================= */}

        <a
          href="/"
          className="shrink-0 flex items-center"
          aria-label="Times India Travels"
        >
          <span
            className={`
              font-display
              font-semibold
              text-lg
              sm:text-xl
              tracking-tight
              transition-colors
              duration-300
              ${
                isScrolled
                  ? "text-white"
                  : "text-[#123138]"
              }
            `}
          >
            <span className="text-[#1EA5BE]">Times</span>{" "}
            <span className="text-[#F58634]">India</span>{" "}
            <span
              className={
                isScrolled
                  ? "text-white"
                  : "text-[#123138]"
              }
            >
              Travels
            </span>
          </span>
        </a>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}

        <nav
          className={`
            hidden
            lg:flex
            items-center
            gap-1
            text-sm
            font-medium
            ${
              isScrolled
                ? "text-white"
                : "text-[#123138]"
            }
          `}
        >
          {/* Home */}

          <a
            href="/"
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              ${
                isScrolled
                  ? "hover:bg-white/10"
                  : "hover:bg-[#123138]/5"
              }
            `}
          >
            Home
          </a>

          {/* About */}

          <a
            href="/about"
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              ${
                isScrolled
                  ? "hover:bg-white/10"
                  : "hover:bg-[#123138]/5"
              }
            `}
          >
            About Us
          </a>

          {/* =====================================================
              TOUR PACKAGES DROPDOWN
          ===================================================== */}

          <div className="group relative">
            <button
              type="button"
              className={`
                flex
                items-center
                gap-1
                px-4
                py-2
                rounded-full
                transition-colors
                ${
                  isScrolled
                    ? "hover:bg-white/10"
                    : "hover:bg-[#123138]/5"
                }
              `}
            >
              Tour Packages

              <ChevronDown
                className="
                  w-3.5
                  h-3.5
                  transition-transform
                  duration-200
                  group-hover:rotate-180
                "
              />
            </button>

            {/* Dropdown */}

            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                top-full
                pt-3
                w-80

                opacity-0
                invisible
                translate-y-2

                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0

                transition-all
                duration-200
              "
            >
              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-[0_25px_60px_-20px_rgba(18,49,56,0.35)]
                  border
                  border-[#123138]/5
                  p-2
                  overflow-hidden
                "
              >
                {tourPackages.map(
                  ({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      className="
                        group/item
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-xl
                        hover:bg-[#1EA5BE]/10
                        transition-colors
                      "
                    >
                      <span
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-[#1EA5BE]/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                          group-hover/item:bg-[#1EA5BE]/20
                          transition-colors
                        "
                      >
                        <Icon
                          className="
                            w-4
                            h-4
                            text-[#1EA5BE]
                          "
                          strokeWidth={1.8}
                        />
                      </span>

                      <span
                        className="
                          text-[10px]
                          text-[#123138]
                          font-medium
                        "
                      >
                        {name}
                      </span>
                    </a>
                  )
                )}

                {/* View all */}

                <div className="border-t border-[#123138]/10 mt-1 pt-1">
                  <a
                    href="/tour-packages"
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-[#F58634]/10
                      text-[#D9701F]
                      text-sm
                      font-semibold
                      transition-colors
                    "
                  >
                    View All Tour Packages

                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Car Rental */}

          <a
            href="/car-rental"
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              ${
                isScrolled
                  ? "hover:bg-white/10"
                  : "hover:bg-[#123138]/5"
              }
            `}
          >
            Car Rental
          </a>

          {/* Blog */}

          <a
            href="/blog"
            className={`
              px-4
              py-2
              rounded-full
              transition-colors
              ${
                isScrolled
                  ? "hover:bg-white/10"
                  : "hover:bg-[#123138]/5"
              }
            `}
          >
            Blog
          </a>
        </nav>

        {/* =========================================================
            RIGHT SIDE
        ========================================================= */}

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone */}

          <a
            href="tel:+919610605261"
            className={`
              hidden
              xl:flex
              items-center
              gap-2
              text-sm
              font-semibold
              rounded-full
              px-4
              py-2.5
              border
              transition-colors
              ${
                isScrolled
                  ? `
                    border-white/20
                    text-white
                    hover:bg-white/10
                  `
                  : `
                    border-[#1EA5BE]/40
                    text-[#116B7C]
                    hover:bg-[#1EA5BE]/10
                  `
              }
            `}
          >
            <Phone className="w-4 h-4" />

            +91 96106 05261
          </a>

          {/* Contact */}

          <a
            href="/contact"
            className="
              hidden
              sm:inline-flex
              items-center
              justify-center
              bg-[#F58634]
              hover:bg-[#D9701F]
              text-white
              text-sm
              font-semibold
              rounded-full
              px-5
              py-2.5
              transition-colors
            "
          >
            Contact Us
          </a>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )
            }
            aria-label="Toggle navigation menu"
            className={`
              lg:hidden
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              transition-colors
              ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-[#123138] hover:bg-[#123138]/5"
              }
            `}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ===========================================================
          MOBILE MENU
      =========================================================== */}

      {isMobileMenuOpen && (
        <div
          className="
            lg:hidden
            max-w-7xl
            mx-auto
            mt-2
            bg-white
            rounded-3xl
            shadow-[0_20px_50px_-20px_rgba(18,49,56,0.4)]
            border
            border-[#123138]/5
            p-4
          "
        >
          <nav className="flex flex-col gap-1">
            <a
              href="/"
              className="
                px-4
                py-3
                rounded-xl
                text-[#123138]
                hover:bg-[#1EA5BE]/10
              "
            >
              Home
            </a>

            <a
              href="/about"
              className="
                px-4
                py-3
                rounded-xl
                text-[#123138]
                hover:bg-[#1EA5BE]/10
              "
            >
              About Us
            </a>

            <a
              href="/tour-packages"
              className="
                px-4
                py-3
                rounded-xl
                text-[#123138]
                hover:bg-[#1EA5BE]/10
              "
            >
              Tour Packages
            </a>

            <a
              href="/car-rental"
              className="
                px-4
                py-3
                rounded-xl
                text-[#123138]
                hover:bg-[#1EA5BE]/10
              "
            >
              Car Rental
            </a>

            <a
              href="/blog"
              className="
                px-4
                py-3
                rounded-xl
                text-[#123138]
                hover:bg-[#1EA5BE]/10
              "
            >
              Blog
            </a>

            <a
              href="/contact"
              className="
                mt-2
                flex
                items-center
                justify-center
                bg-[#F58634]
                hover:bg-[#D9701F]
                text-white
                font-semibold
                rounded-xl
                px-4
                py-3
                transition-colors
              "
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
    
  );
}