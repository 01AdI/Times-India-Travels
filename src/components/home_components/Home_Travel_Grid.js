export default function Home_Travel_Grid() {
  const categories = [
    {
      id: "Most-Popular",
      categoryTitle: "Popular Tours",
      tagLine: "Our Most Loved Experiences",
      hoverDescription:
        "Discover India's most loved itineraries, handpicked by our travel experts for unforgettable journeys.",
      buttonText: "Explore Tours",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "destinations",
      categoryTitle: "Famous Destinations",
      tagLine: "Discover India's Icons",
      hoverDescription:
        "From royal palaces to Himalayan landscapes, explore the destinations that define Incredible India.",
      buttonText: "View Destinations",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "packages",
      categoryTitle: "Special Packages",
      tagLine: "Curated for Every Traveler",
      hoverDescription:
        "Luxury escapes, family vacations, honeymoon trips, and adventure tours crafted just for you.",
      buttonText: "Browse Packages",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "festivals",
      categoryTitle: "Festivals",
      tagLine: "Celebrate the Spirit of India",
      hoverDescription:
        "Witness India's colorful festivals and timeless traditions through unforgettable cultural experiences.",
      buttonText: "Discover Festivals",
      image:
        "https://i.pinimg.com/736x/4b/10/f1/4b10f1888e3e0c97425de555bcdb8a4e.jpg",
    },
  ];

  return (
    <section id="tour-packages" className="bg-[#F2FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1EA5BE] font-semibold tracking-[0.25em] uppercase text-sm">
            Explore India
          </p>

          <h2 className="font-['Fraunces'] mt-4 text-5xl font-semibold text-[#0B3C49]">
            Discover Incredible Destinations
          </h2>

          <p className="mt-5 text-[#6D6D6D] max-w-2xl mx-auto text-lg leading-relaxed">
            From majestic monuments and peaceful backwaters to colorful cities
            and breathtaking mountains, experience the beauty of India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            // Whole card is a link to that category's section further down
            // the page (#tours, #destinations, etc.) — this is what actually
            // makes "click a card, jump to that section" work.
            <a
              key={index}
              href={`/Tour/${category.id}`}
              aria-label={`Go to ${category.categoryTitle}`}
              className="group relative h-[520px] overflow-hidden rounded-3xl cursor-pointer block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F58634]/50"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.categoryTitle}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
              />

              {/* Overlay — reacts to hover AND keyboard focus */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent
                  transition-all duration-500
                  group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/35
                  group-focus-within:from-black/95 group-focus-within:via-black/80 group-focus-within:to-black/35"
              />

              {/* Arrow */}
              <div
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md
                  flex items-center justify-center text-white opacity-0 scale-75
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100
                  group-focus-within:opacity-100 group-focus-within:scale-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H9M17 7V15"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                {/* ---------------- NORMAL STATE ---------------- */}
                <div
                  className="transition-all duration-500
                    group-hover:opacity-0 group-hover:-translate-y-6
                    group-focus-within:opacity-0 group-focus-within:-translate-y-6"
                >
                  <p className="uppercase tracking-[0.28em] text-xs font-semibold text-[#7FE8F8]">
                    {category.categoryTitle}
                  </p>

                  <h3 className="font-['Fraunces'] mt-3 text-4xl font-semibold leading-tight text-white max-w-sm">
                    {category.tagLine}
                  </h3>
                </div>

                {/* ---------------- HOVER / FOCUS STATE ---------------- */}
                <div
                  className="absolute inset-x-8 bottom-8 opacity-0 translate-y-8
                    transition-all duration-500 delay-100
                    group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:opacity-100 group-focus-within:translate-y-0"
                >
                  <h3 className="font-['Fraunces'] text-4xl font-semibold text-white">
                    {category.categoryTitle}
                  </h3>

                  <div className="w-14 h-[3px] bg-[#F58634] rounded-full mt-3 mb-5" />

                  <p className="text-white/90 leading-relaxed max-w-sm">
                    {category.hoverDescription}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F58634] px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:bg-[#D9701F]">
                    {category.buttonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}