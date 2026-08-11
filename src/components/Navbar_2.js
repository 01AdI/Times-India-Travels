import { useEffect, useState } from "react";
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


export default function Navbar_2() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    if (!hero) {
      setIsScrolled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0.1, rootMargin: "-70px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsTourOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-500">
      {/* rounded-[2rem] instead of rounded-4xl, which isn't a real
          Tailwind class and was very likely a no-op */}
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-7 lg:px-8 py-5 rounded-[2rem] border transition-all duration-500 ease-out ${
          isScrolled
            ? "min-h-[68px] bg-[#124d56]/95 backdrop-blur-xl border-white/10 shadow-[0_12px_35px_-15px_rgba(0,0,0,0.45)]"
            : "min-h-[82px] bg-transparent border-transparent shadow-none"
        }`}
      >
        <NavLink to="/" aria-label="Times India Travels" className="shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.15]">
          <img
            src="https://res.cloudinary.com/dgmsnixag/image/upload/v1786170474/times_logo_dyybpz.png"
            alt="Times India Travels"
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? "h-[48px] sm:h-[52px]" : "h-[58px] sm:h-[62px]"}`}
          />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1 ml-auto mr-6">
          <DesktopNavLink to="/" label="Home" />
          <DesktopNavLink to="/About_Us" label="About Us" />

          <div
            className="relative"
            onMouseEnter={() => setIsTourOpen(true)}
            onMouseLeave={() => setIsTourOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsTourOpen(true)}
              aria-haspopup="true"
              aria-expanded={isTourOpen}
              aria-controls="tour-packages-menu"
              className="relative cursor-pointer flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[15px] font-medium text-white hover:bg-white/10 transition-all duration-200"
            >
              Tour Packages
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isTourOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              id="tour-packages-menu"
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px] transition-all duration-200 origin-top ${
                isTourOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="relative rounded-3xl bg-[#0B3C49] shadow-[0_35px_80px_-25px_rgba(0,0,0,0.55)] overflow-hidden">
                {/* Signature thin orange top line, same as your other
                    premium blocks (CTA sections, feature cards) */}
                <div className="h-[2px] w-full bg-[#F58634]" />

                <div className="px-3 pt-4 pb-2">
                  <p className="px-3 mb-1 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F58634]">
                    Tour Packages
                  </p>
                </div>

                <div className="px-3 pb-2">
                  {categoryEntries.map(([id, data], index) => (
                    <NavLink
                      key={id}
                      to={`Tour/${id}`}
                      className="group flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/[0.06] transition-all duration-200"
                    >
                      <span className="font-['Fraunces'] text-lg font-light text-white/30 group-hover:text-[#F58634] transition-colors duration-200 w-6">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-['Inter'] text-[13px] font-medium text-white/85 group-hover:text-white transition-colors duration-200">
                        {data.name}
                      </span>
                      <ArrowRight className="ml-auto w-3.5 h-3.5 text-[#F58634] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </NavLink>
                  ))}
                </div>

                <div className="border-t border-white/10 px-3 py-2">
                  <NavLink
                    to="/Tour"
                    className="group flex items-center justify-between px-3 py-3 rounded-xl text-[#F58634] hover:bg-white/[0.06] text-[13px] font-semibold transition-colors duration-200"
                  >
                    View All Tour Packages
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <DesktopNavLink to="/CarRental" label="Car Rental" />
          <DesktopNavLink to="/Blog" label="Blog" />
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919610605261"
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-[12px] font-medium hover:bg-white/10 transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 96106 05261
          </a>

          <NavLink
            to="/Contact-Us"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F58634] hover:bg-[#D9701F] text-white text-[13px] font-semibold shadow-[0_8px_20px_-8px_rgba(245,134,52,0.7)] hover:shadow-[0_10px_25px_-8px_rgba(245,134,52,0.9)] transition-all duration-200"
          >
            Contact Us
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden max-w-7xl mx-auto overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#124d56]/98 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/About_Us" label="About Us" />
          <MobileNavLink to="/Tour" label="Tour Packages" />
          <MobileNavLink to="/CarRental" label="Car Rental" />
          <MobileNavLink to="/Blog" label="Blog" />

          <a
            href="tel:+919610605261"
            className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-white/15 text-white/90 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 96106 05261
          </a>

          <NavLink
            to="/Contact-Us"
            className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#F58634] hover:bg-[#D9701F] text-white text-sm font-semibold transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

// isScrolled removed from the signature — the navbar background is
// dark in both states now, so link text stays white regardless.
function DesktopNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative px-5 py-2.5 rounded-full text-[15px] font-medium text-white hover:bg-white/10 transition-all duration-200
        ${isActive ? "text-[#C9A24B]" : ""}
        after:absolute after:left-4 after:right-4 after:bottom-[3px] after:h-[2px] after:rounded-full after:bg-[#C9A24B] after:origin-center after:transition-transform after:duration-300
        ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
      `}
    >
      {label}
    </NavLink>
  );
}

function MobileNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors
        ${isActive ? "bg-white/10 text-[#C9A24B]" : "text-white/90 hover:bg-white/10"}
      `}
    >
      {label}
    </NavLink>
  );
}