import { useEffect, useState } from "react";
import { NavLink,useLocation } from "react-router";

import {
  ChevronDown,
  ArrowRight,
  Phone,
  Menu,
  X,
  MapPin,
  Mountain,
  Palmtree,
  PawPrint,
  Landmark,
  Globe2,
  Sparkles,
} from "lucide-react";


// ============================================================
// TOUR PACKAGE DATA
// ============================================================

const tourPackages = [
  {
    name: "Golden Triangle Tours",
    href: "/tour-packages/golden-triangle-tours",
    icon: Landmark,
  },
  {
    name: "Rajasthan Tours",
    href: "/tour-packages/rajasthan-tours",
    icon: Mountain,
  },
  {
    name: "South India Tours",
    href: "/tour-packages/south-india-tours",
    icon: Palmtree,
  },
  {
    name: "India Wildlife Tours",
    href: "/tour-packages/india-wildlife-tours",
    icon: PawPrint,
  },
  {
    name: "North & West India Tour",
    href: "/tour-packages/north-west-india-tour",
    icon: Globe2,
  },
  {
    name: "India & Nepal Tour",
    href: "/tour-packages/india-nepal-tour",
    icon: Sparkles,
  },
  {
    name: "Jammu & Kashmir Tour",
    href: "/tour-packages/jammu-kashmir-tour",
    icon: MapPin,
  },
];


// ============================================================
// NAVBAR
// ============================================================

export default function Navbar_2() {

  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);


  // ==========================================================
  // INTERSECTION OBSERVER
  // ==========================================================

  useEffect(() => {

    const hero = document.querySelector(".hero-section");

    /*
      If the current page doesn't have a hero-section,
      navbar should automatically start in solid mode.
    */

    if (!hero) {
      setIsScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          // Hero is visible
          setIsScrolled(false);

        } else {

          // Hero has left the viewport
          setIsScrolled(true);

        }

      },
      {
        threshold: 0.1,

        /*
          Gives us a slightly earlier transition
          instead of waiting until the hero completely disappears.
        */
        rootMargin: "-70px 0px 0px 0px",
      }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };

  }, [location.pathname]);


  // ==========================================================
  // CLOSE MOBILE MENU AFTER ROUTE CHANGE
  // ==========================================================

  useEffect(() => {

    setIsMobileOpen(false);
    setIsTourOpen(false);

  }, [location.pathname]);


  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-[100]

        px-4
        sm:px-6
        lg:px-8

        pt-3
        sm:pt-4

        transition-all
        duration-500
      `}
    >

      {/* ======================================================
          NAVBAR CONTAINER
      ====================================================== */}

      <div
        className={`
          max-w-7xl
          mx-auto

          flex
          items-center
          justify-between

          px-5
          sm:px-7
          lg:px-8
          py-5

          rounded-4xl

          border

          transition-all
          duration-500
          ease-out

          ${
            isScrolled

              ? `
                min-h-[68px]

                bg-[#124d56]/95
                backdrop-blur-xl

                border-white/10

                shadow-[0_12px_35px_-15px_rgba(0,0,0,0.45)]
              `

              : `
                min-h-[82px]

                bg-transparent

                border-transparent

                shadow-none
              `
          }
        `}
      >

        {/* ====================================================
            LOGO
        ==================================================== */}

        <NavLink
          to="/"
          aria-label="Times India Travels"
          className="
            shrink-0
            flex
            items-center

            transition-transform
            duration-300

            hover:scale-[1.15]
          "
        >

          <img
            src="https://res.cloudinary.com/dgmsnixag/image/upload/v1786170474/times_logo_dyybpz.png"
            alt="Times India Travels"
            className={`
              w-auto
              object-contain

              transition-all
              duration-500

              ${
                isScrolled
                  ? "h-[48px] sm:h-[52px]"
                  : "h-[58px] sm:h-[62px]"
              }
            `}
          />

        </NavLink>


        {/* ====================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <nav
          className="
            hidden
            lg:flex

            items-center
            gap-1

            ml-auto
            mr-6
          "
        >

          {/* HOME */}

          <DesktopNavLink
            to="/"
            label="Home"
            isScrolled={isScrolled}
          />


          {/* ABOUT */}

          <DesktopNavLink
            to="/about"
            label="About Us"
            isScrolled={isScrolled}
          />


          {/* ==================================================
              TOUR PACKAGES
          ================================================== */}

          <div
            className="relative "
            onMouseEnter={() => setIsTourOpen(true)}
            onMouseLeave={() => setIsTourOpen(false)}
          >

            <button
              type="button"
              onClick={() =>
                setIsTourOpen((prev) => !prev)
              }
              className={`
                relative
                cursor-pointer
                flex
                items-center
                gap-1.5

                px-4
                py-2.5

                rounded-full

                text-[15px]
                font-medium

                transition-all
                duration-200

                ${
                  isScrolled
                    ? `
                      text-white/90
                      hover:bg-white/10
                    `
                    : `
                      text-white
                      hover:bg-white/10
                    `
                }
              `}
            >

              Tour Packages

              <ChevronDown
                className={`
                  w-3.5
                  h-3.5

                  transition-transform
                  duration-300

                  ${
                    isTourOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>


            {/* =================================================
                DROPDOWN
            ================================================= */}

            <div
              className={`
                absolute

                top-full
                left-1/2

                -translate-x-1/2

                pt-3

                w-[330px]

                transition-all
                duration-200

                origin-top

                ${
                  isTourOpen

                    ? `
                      opacity-100
                      visible
                      translate-y-0
                    `

                    : `
                      opacity-0
                      invisible
                      -translate-y-2
                      pointer-events-none
                    `
                }
              `}
            >

              <div
                className="
                  bg-[#F2FAFB]

                  rounded-2xl

                  border
                  border-[#124d56]/10

                  shadow-[0_25px_70px_-25px_rgba(18,77,86,0.45)]

                  p-2

                  overflow-hidden
                "
              >

                {tourPackages.map(
                  ({
                    name,
                    href,
                    icon: Icon,
                  }) => (

                    <NavLink
                      key={name}
                      to={href}
                      className="
                        group

                        flex
                        items-center
                        gap-3

                        px-3
                        py-2.5

                        rounded-xl

                        hover:bg-[#124d56]/[0.07]

                        transition-all
                        duration-200
                      "
                    >

                      {/* Icon */}

                      <span
                        className="
                          w-9
                          h-9

                          shrink-0

                          flex
                          items-center
                          justify-center

                          rounded-lg

                          bg-[#124d56]/10

                          group-hover:bg-[#124d56]/15

                          transition-colors
                        "
                      >

                        <Icon
                          className="
                            w-4
                            h-4

                            text-[#124d56]
                          "
                          strokeWidth={1.7}
                        />

                      </span>


                      {/* Text */}

                      <span
                        className="
                          text-[13px]

                          font-medium

                          text-[#124d56]
                        "
                      >
                        {name}
                      </span>


                      {/* Arrow */}

                      <ArrowRight
                        className="
                          ml-auto

                          w-3.5
                          h-3.5

                          text-[#124d56]/25

                          opacity-0
                          -translate-x-1

                          group-hover:opacity-100
                          group-hover:translate-x-0

                          transition-all
                        "
                      />

                    </NavLink>

                  )
                )}


                {/* VIEW ALL */}

                <div
                  className="
                    border-t
                    border-[#124d56]/10

                    mt-1
                    pt-1
                  "
                >

                  <NavLink
                    to="/tour-packages"
                    className="
                      group

                      flex
                      items-center
                      justify-between

                      px-3
                      py-3

                      rounded-xl

                      text-[#124d56]

                      hover:bg-[#124d56]/[0.07]

                      text-[13px]
                      font-semibold
                    "
                  >

                    View All Tour Packages

                    <ArrowRight
                      className="
                        w-4
                        h-4

                        transition-transform
                        duration-200

                        group-hover:translate-x-1
                      "
                    />

                  </NavLink>

                </div>

              </div>

            </div>

          </div>


          {/* CAR RENTAL */}

          <DesktopNavLink
            to="/car-rental"
            label="Car Rental"
            isScrolled={isScrolled}
          />


          {/* BLOG */}

          <DesktopNavLink
            to="/blog"
            label="Blog"
            isScrolled={isScrolled}
          />

        </nav>


        {/* ====================================================
            RIGHT SIDE
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* PHONE */}

          <a
            href="tel:+919610605261"
            className={`
              hidden
              xl:flex

              items-center
              gap-2
            
              px-4
              py-2

              rounded-full

              border

              text-[12px]
              font-medium

              transition-all
              duration-300

              ${
                isScrolled

                  ? `
                    border-white/15
                    text-white/90

                    hover:bg-white/10
                  `

                  : `
                    border-white/20
                    text-white

                    hover:bg-white/10
                  `
              }
            `}
          >

            <Phone
              className="w-3.5 h-3.5"
            />

            +91 96106 05261

          </a>


          {/* CONTACT BUTTON */}

          <NavLink
            to="/contact"
            className="
              hidden
              sm:flex

              items-center
              gap-2

              px-5
              py-2.5

              rounded-full

              bg-[#F58634]

              hover:bg-[#D9701F]

              text-white

              text-[13px]
              font-semibold

              shadow-[0_8px_20px_-8px_rgba(245,134,52,0.7)]

              hover:shadow-[0_10px_25px_-8px_rgba(245,134,52,0.9)]

              transition-all
              duration-200
            "
          >

            Contact Us

            <ArrowRight
              className="w-3.5 h-3.5"
            />

          </NavLink>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setIsMobileOpen(
                (prev) => !prev
              )
            }
            aria-label={
              isMobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className={`
              lg:hidden

              w-10
              h-10

              flex
              items-center
              justify-center

              rounded-full

              transition-colors

              ${
                isScrolled
                  ? `
                    text-white
                    hover:bg-white/10
                  `
                  : `
                    text-white
                    hover:bg-white/10
                  `
              }
            `}
          >

            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}

          </button>

        </div>

      </div>


      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          lg:hidden

          max-w-7xl
          mx-auto

          overflow-hidden

          transition-all
          duration-300

          ${
            isMobileOpen
              ? `
                max-h-[600px]
                opacity-100
                mt-2
              `
              : `
                max-h-0
                opacity-0
              `
          }
        `}
      >

        <div
          className="
            bg-[#124d56]/98
            backdrop-blur-xl

            border
            border-white/10

            rounded-2xl

            p-3

            shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]
          "
        >

          <MobileNavLink
            to="/"
            label="Home"
          />

          <MobileNavLink
            to="/about"
            label="About Us"
          />

          <MobileNavLink
            to="/tour-packages"
            label="Tour Packages"
          />

          <MobileNavLink
            to="/car-rental"
            label="Car Rental"
          />

          <MobileNavLink
            to="/blog"
            label="Blog"
          />


          {/* MOBILE CONTACT */}

          <NavLink
            to="/contact"
            className="
              mt-2

              flex
              items-center
              justify-center
              gap-2

              w-full

              px-4
              py-3

              rounded-xl

              bg-[#F58634]

              hover:bg-[#D9701F]

              text-white

              text-sm
              font-semibold

              transition-colors
            "
          >

            Contact Us

            <ArrowRight
              className="w-4 h-4"
            />

          </NavLink>

        </div>

      </div>

    </header>
  );
}


// ============================================================
// DESKTOP NAV LINK
// ============================================================

function DesktopNavLink({
  to,
  label,
  isScrolled,
}) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative

        px-5
        py-2.5

        rounded-full

        text-[15px]
        font-medium

        transition-all
        duration-200

        ${
          isScrolled
            ? `
              text-white/90
              hover:bg-white/10
            `
            : `
              text-white
              hover:bg-white/10
            `
        }

        ${
          isActive
            ? "text-[#D4AF37]"
            : ""
        }

        after:absolute
        after:left-4
        after:right-4
        after:bottom-[3px]

        after:h-[2px]

        after:rounded-full

        after:bg-[#D4AF37]

        after:origin-center

        after:transition-transform
        after:duration-300

        ${
          isActive
            ? "after:scale-x-100"
            : "after:scale-x-0"
        }
      `}
    >
      {label}
    </NavLink>
  );
}


// ============================================================
// MOBILE NAV LINK
// ============================================================

function MobileNavLink({
  to,
  label,
}) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex
        items-center

        w-full

        px-4
        py-3

        rounded-xl

        text-sm
        font-medium

        transition-colors

        ${
          isActive
            ? `
              bg-white/10
              text-[#D4AF37]
            `
            : `
              text-white/90
              hover:bg-white/10
            `
        }
      `}
    >
      {label}
    </NavLink>
  );
}