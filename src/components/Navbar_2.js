import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router";
import {
  ChevronDown,
  ArrowRight,
  Phone,
  Menu,
  X,
} from "lucide-react";

import { tourCategories } from "../utils/TourPackage_data";

const categoryEntries = Object.entries(tourCategories);

/* =========================================================
   HELPERS
========================================================= */

function getPackages(categoryData) {
  if (!categoryData) return [];

  return (
    categoryData.packages ||
    categoryData.subPackages ||
    categoryData.tours ||
    categoryData.tourPackages ||
    []
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar_2() {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isTourOpen, setIsTourOpen] = useState(false);

  /*
    Currently selected category.

    Initially null because we don't want
    packages to appear when the dropdown
    is first opened.
  */
  const [activeCategoryId, setActiveCategoryId] =
    useState(null);

  /*
    Controls whether the package panel
    is visible.

    false = category-only dropdown
    true  = category + package dropdown
  */
  const [showPackages, setShowPackages] =
    useState(false);

  /* =======================================================
     SCROLL / HERO DETECTION
  ======================================================= */

  useEffect(() => {
    const hero = document.querySelector(".hero-section");

    if (!hero) {
      setIsScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-70px 0px 0px 0px",
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [location.pathname]);

  /* =======================================================
     CLOSE MENUS ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setIsMobileOpen(false);
    setIsTourOpen(false);
    setShowPackages(false);
    setActiveCategoryId(null);
  }, [location.pathname]);

  /* =======================================================
     ACTIVE CATEGORY
  ======================================================= */

  const activeCategory = useMemo(() => {
    if (!activeCategoryId) {
      return null;
    }

    return (
      categoryEntries.find(
        ([id]) => id === activeCategoryId
      ) || null
    );
  }, [activeCategoryId]);

  const activeCategoryIdResolved =
    activeCategory?.[0];

  const activeCategoryData =
    activeCategory?.[1];

  /* =======================================================
     ACTIVE PACKAGES
  ======================================================= */

  const activePackages =
    getPackages(activeCategoryData);

  /* =======================================================
     CATEGORY HOVER
  ======================================================= */

  const handleCategoryHover = (id) => {
    setActiveCategoryId(id);
    setShowPackages(true);
  };

  /* =======================================================
     CATEGORY CLICK
  ======================================================= */

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
    setShowPackages(true);
  };

  /* =======================================================
     TOUR DROPDOWN OPEN
  ======================================================= */

  const handleTourOpen = () => {
    setIsTourOpen(true);

    /*
      Always start with only categories.
    */
    setShowPackages(false);
    setActiveCategoryId(null);
  };

  /* =======================================================
     TOUR DROPDOWN CLOSE
  ======================================================= */

  const handleTourClose = () => {
    setIsTourOpen(false);

    setShowPackages(false);
    setActiveCategoryId(null);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <header
      className="
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
      "
    >
      {/* ===================================================
          NAVBAR CONTAINER
      =================================================== */}

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
          rounded-[2rem]
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
        {/* =================================================
            LOGO
        ================================================= */}

        <NavLink
          to="/"
          aria-label="Times India Travels"
          className="
            shrink-0
            flex
            items-center
            transition-transform
            duration-300
            hover:scale-[1.05]
          "
        >
          <img
            src="https://res.cloudinary.com/images-backend/image/upload/v1786170474/times_logo_dyybpz.png"
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

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

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
          <DesktopNavLink
            to="/"
            label="Home"
          />

          <DesktopNavLink
            to="/About_Us"
            label="About Us"
          />

          {/* =================================================
              TOUR PACKAGES
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={handleTourOpen}
            onMouseLeave={handleTourClose}
          >
            {/* -----------------------------------------------
                TOUR PACKAGE BUTTON
            ----------------------------------------------- */}

            <button
              type="button"
              onClick={() => {
                if (isTourOpen) {
                  handleTourClose();
                } else {
                  handleTourOpen();
                }
              }}
              aria-haspopup="true"
              aria-expanded={isTourOpen}
              aria-controls="tour-packages-menu"
              className="
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
                text-white
                hover:bg-white/10
                transition-all
                duration-200
              "
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
              id="tour-packages-menu"
              className={`
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                pt-3

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
              {/* =================================================
                  DROPDOWN PANEL
              ================================================= */}

              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-[26px]
                  bg-[#0B3C49]
                  border
                  border-white/[0.07]
                  shadow-[0_35px_80px_-25px_rgba(0,0,0,0.55)]

                  transition-all
                  duration-300
                  ease-out

                  ${
                    showPackages
                      ? "w-[700px]"
                      : "w-[320px]"
                  }
                `}
              >
                {/* ---------------------------------------------
                    ORANGE TOP LINE
                --------------------------------------------- */}

                <div
                  className="
                    h-[2px]
                    w-full
                    bg-[#F58634]
                  "
                />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300

                    ${
                      showPackages
                        ? "grid-cols-[240px_1fr]"
                        : "grid-cols-[1fr]"
                    }
                  `}
                >
                  {/* =================================================
                      LEFT — CATEGORIES
                  ================================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      min-h-0
                      max-h-[430px]
                    "
                  >
                    {/* ---------------------------------------------
                        CATEGORY HEADER
                    --------------------------------------------- */}

                    <div
                      className="
                        px-5
                        pt-5
                        pb-3
                        shrink-0
                      "
                    >
                      <p
                        className="
                          font-['Inter']
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#F58634]
                        "
                      >
                        Explore India
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-white/35
                        "
                      >
                        Choose a journey
                      </p>
                    </div>

                    {/* ---------------------------------------------
                        CATEGORY LIST
                    --------------------------------------------- */}

                    <div
                      className="
                        flex-1
                        min-h-0
                        overflow-y-auto
                        px-3
                        pb-3
                        destination-dropdown-scroll
                      "
                    >
                      {categoryEntries.map(
                        ([id, data]) => {
                          const isActive =
                            id ===
                            activeCategoryIdResolved;

                          return (
                            <NavLink
                              key={id}
                              to={`/Tour/${id}`}
                              onMouseEnter={() =>
                                handleCategoryHover(
                                  id
                                )
                              }
                              onClick={() =>
                                handleCategoryClick(
                                  id
                                )
                              }
                              className={`
                                group
                                w-full
                                flex
                                items-center
                                justify-between
                                gap-3
                                px-3
                                py-3
                                rounded-xl
                                text-left
                                transition-all
                                duration-200

                                ${
                                  isActive
                                    ? `
                                      bg-[#1b5964]
                                      text-white
                                    `
                                    : `
                                      text-white/65
                                      hover:bg-white/[0.05]
                                      hover:text-white
                                    `
                                }
                              `}
                            >
                              {/* Category name */}

                              <span
                                className="
                                  font-['Inter']
                                  text-[12px]
                                  font-medium
                                  leading-5
                                "
                              >
                                {data.name}
                              </span>

                              {/* Arrow */}

                              <ArrowRight
                                className={`
                                  shrink-0
                                  w-3.5
                                  h-3.5
                                  transition-all
                                  duration-200

                                  ${
                                    isActive
                                      ? `
                                        opacity-100
                                        translate-x-0
                                        text-[#F58634]
                                      `
                                      : `
                                        opacity-0
                                        -translate-x-1
                                      `
                                  }
                                `}
                              />
                            </NavLink>
                          );
                        }
                      )}
                    </div>

                    {/* =================================================
                        EXPLORE ALL TOUR CATEGORIES
                    ================================================= */}

                    <div
                      className="
                        shrink-0
                        border-t
                        border-white/[0.08]
                        px-3
                        py-3
                      "
                    >
                      <NavLink
                        to="/Tour"
                        onClick={() => {
                          setIsTourOpen(false);
                          setShowPackages(false);
                          setActiveCategoryId(null);
                        }}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-3
                          w-full
                          px-3
                          py-3
                          rounded-xl

                          bg-white/[0.04]
                          hover:bg-[#F58634]

                          text-[#F58634]
                          hover:text-white

                          transition-all
                          duration-300
                        "
                      >
                        <div className="flex flex-col min-w-0">
                          <span
                            className="
                              font-['Inter']
                              text-[11px]
                              font-semibold
                            "
                          >
                            Explore All Tour Categories
                          </span>

                          <span
                            className="
                              mt-0.5
                              text-[9px]
                              text-white/35
                              group-hover:text-white/70
                              transition-colors
                            "
                          >
                            View every tour collection
                          </span>
                        </div>

                        <ArrowRight
                          className="
                            w-4
                            h-4
                            shrink-0
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </NavLink>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT — PACKAGES

                      ONLY APPEARS AFTER CATEGORY
                      HOVER / CLICK
                  ================================================= */}

                  {showPackages && (
                    <div
                      className="
                        flex
                        min-w-0
                        flex-col
                        border-l
                        border-white/[0.08]
                        min-h-0
                        max-h-[430px]
                        animate-[fadeIn_0.25s_ease-out]
                      "
                    >
                      {/* -------------------------------------------
                          PACKAGE HEADER
                      ------------------------------------------- */}

                      <div
                        className="
                          shrink-0
                          px-6
                          pt-5
                          pb-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >
                          <div className="min-w-0">
                            <p
                              className="
                                font-['Inter']
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-[#F58634]
                              "
                            >
                              Tour Collection
                            </p>

                            <h3
                              className="
                                mt-1
                                font-['Fraunces']
                                text-2xl
                                font-medium
                                leading-tight
                                text-white
                              "
                            >
                              {activeCategoryData?.name}
                            </h3>

                            {activeCategoryData?.tagline && (
                              <p
                                className="
                                  mt-1.5
                                  text-[11px]
                                  text-white/40
                                  line-clamp-2
                                "
                              >
                                {
                                  activeCategoryData.tagline
                                }
                              </p>
                            )}
                          </div>

                          {/* -----------------------------------------
                              VIEW ALL CATEGORY
                          ----------------------------------------- */}

                          {activeCategoryIdResolved && (
                            <NavLink
                              to={`/Tour/${activeCategoryIdResolved}`}
                              onClick={() => {
                                setIsTourOpen(false);
                                setShowPackages(false);
                              }}
                              className="
                                shrink-0
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#F58634]/60
                                px-3.5
                                py-2
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[#F58634]
                                transition-all
                                duration-300
                                hover:bg-[#F58634]
                                hover:text-white
                              "
                            >
                              View All

                              <ArrowRight
                                className="
                                  w-3
                                  h-3
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-0.5
                                "
                              />
                            </NavLink>
                          )}
                        </div>
                      </div>

                      {/* -------------------------------------------
                          PACKAGE LIST
                      ------------------------------------------- */}

                      <div
                        className="
                          flex-1
                          min-h-0
                          overflow-y-auto
                          px-6
                          pb-5
                          pr-4
                          destination-dropdown-scroll
                        "
                      >
                        {activePackages.length > 0 ? (
                          <div className="space-y-1">
                            {activePackages.map(
                              (
                                packageItem,
                                index
                              ) => {
                                const packageSlug =
                                  packageItem.slug ||
                                  packageItem.id;

                                const packageName =
                                  packageItem.name ||
                                  packageItem.title ||
                                  "Tour Package";

                                const packageImage =
                                  packageItem.thumbnail ||
                                  packageItem.thumbnailImage ||
                                  packageItem.heroImage ||
                                  packageItem.image;

                                /*
                                  Duration may be:

                                  "7 Days"

                                  OR:

                                  {
                                    days: 7,
                                    nights: 6,
                                    label: "7 Days / 6 Nights"
                                  }
                                */

                                const packageDuration =
                                  typeof packageItem.duration ===
                                  "string"
                                    ? packageItem.duration
                                    : packageItem
                                        .duration
                                        ?.label;

                                return (
                                  <NavLink
                                    key={
                                      packageItem.id ||
                                      packageItem.slug ||
                                      index
                                    }
                                    to={`/Tour/${activeCategoryIdResolved}/${packageSlug}`}
                                    onClick={() => {
                                      setIsTourOpen(
                                        false
                                      );
                                      setShowPackages(
                                        false
                                      );
                                    }}
                                    className="
                                      group
                                      flex
                                      items-center
                                      gap-3
                                      rounded-xl
                                      px-2.5
                                      py-2.5
                                      transition-all
                                      duration-200
                                      hover:bg-white/[0.06]
                                    "
                                  >
                                    {/* --------------------------------
                                        PACKAGE IMAGE
                                    -------------------------------- */}

                                    {packageImage ? (
                                      <div
                                        className="
                                          relative
                                          h-10
                                          w-14
                                          shrink-0
                                          overflow-hidden
                                          rounded-lg
                                          bg-white/5
                                        "
                                      >
                                        <img
                                          src={
                                            packageImage
                                          }
                                          alt={
                                            packageName
                                          }
                                          className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                          "
                                        />
                                      </div>
                                    ) : (
                                      <div
                                        className="
                                          h-10
                                          w-14
                                          shrink-0
                                          rounded-lg
                                          bg-white/[0.06]
                                        "
                                      />
                                    )}

                                    {/* --------------------------------
                                        PACKAGE INFORMATION
                                    -------------------------------- */}

                                    <div
                                      className="
                                        min-w-0
                                        flex-1
                                      "
                                    >
                                      <p
                                        className="
                                          truncate
                                          font-['Inter']
                                          text-[12px]
                                          font-medium
                                          text-white/85
                                          transition-colors
                                          duration-200
                                          group-hover:text-white
                                        "
                                      >
                                        {packageName}
                                      </p>

                                      {packageDuration && (
                                        <p
                                          className="
                                            mt-0.5
                                            text-[10px]
                                            text-white/35
                                          "
                                        >
                                          {
                                            packageDuration
                                          }
                                        </p>
                                      )}
                                    </div>

                                    {/* --------------------------------
                                        PACKAGE ARROW
                                    -------------------------------- */}

                                    <ArrowRight
                                      className="
                                        w-3.5
                                        h-3.5
                                        shrink-0
                                        text-[#F58634]
                                        opacity-0
                                        -translate-x-1
                                        transition-all
                                        duration-200
                                        group-hover:opacity-100
                                        group-hover:translate-x-0
                                      "
                                    />
                                  </NavLink>
                                );
                              }
                            )}
                          </div>
                        ) : (
                          /* -----------------------------------------
                             EMPTY STATE
                          ----------------------------------------- */

                          <div
                            className="
                              flex
                              h-full
                              items-center
                              justify-center
                              px-6
                              text-center
                            "
                          >
                            <div>
                              <p
                                className="
                                  font-['Fraunces']
                                  text-lg
                                  text-white/70
                                "
                              >
                                Explore this destination
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-[11px]
                                  text-white/30
                                "
                              >
                                View all available tours
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              OTHER NAV LINKS
          ================================================= */}

          <DesktopNavLink
            to="/CarRental"
            label="Car Rental"
          />

          <DesktopNavLink
            to="/Blog"
            label="Blog"
          />
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* Phone */}

          <a
            href="tel:+919610605261"
            className="
              hidden
              xl:flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/20
              text-white
              text-[12px]
              font-medium
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <Phone className="w-3.5 h-3.5" />

            +91 96106 05261
          </a>

          {/* Contact */}

          <NavLink
            to="/Contact-Us"
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

            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>

          {/* Mobile Button */}

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
            aria-expanded={isMobileOpen}
            className="
              lg:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              text-white
              hover:bg-white/10
              transition-colors
            "
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

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
              ? "max-h-[600px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
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
            to="/About_Us"
            label="About Us"
          />

          <MobileNavLink
            to="/Tour"
            label="Tour Packages"
          />

          <MobileNavLink
            to="/CarRental"
            label="Car Rental"
          />

          <MobileNavLink
            to="/Blog"
            label="Blog"
          />

          {/* Phone */}

          <a
            href="tel:+919610605261"
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
              border
              border-white/15
              text-white/90
              text-sm
              font-medium
              hover:bg-white/10
              transition-colors
            "
          >
            <Phone className="w-4 h-4" />

            +91 96106 05261
          </a>

          {/* Contact */}

          <NavLink
            to="/Contact-Us"
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

            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function DesktopNavLink({
  to,
  label,
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
        text-white
        hover:bg-white/10
        transition-all
        duration-200

        ${
          isActive
            ? "text-[#C9A24B]"
            : ""
        }

        after:absolute
        after:left-4
        after:right-4
        after:bottom-[3px]
        after:h-[2px]
        after:rounded-full
        after:bg-[#C9A24B]
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

/* =========================================================
   MOBILE NAV LINK
========================================================= */

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
            ? "bg-white/10 text-[#C9A24B]"
            : "text-white/90 hover:bg-white/10"
        }
      `}
    >
      {label}
    </NavLink>
  );
}