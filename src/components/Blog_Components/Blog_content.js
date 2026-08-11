import { useState } from "react";

/* ============================================================
   CATEGORIES
============================================================ */

const CATEGORIES = [
  "All",
  "Rajasthan",
  "Kerala",
  "Wildlife",
  "Culture",
  "Family Travel",
];

/* ============================================================
   FEATURED STORY
============================================================ */

const FEATURED = {
  category: "Rajasthan",
  location: "Jaisalmer · Ranthambore · Varanasi",
  title:
    "Things to Explore When Traveling to Jaisalmer, Ranthambore & Varanasi",
  excerpt:
    "Three very different faces of India in one loop — a sandstone fort rising out of the Thar desert, tiger territory at dawn, and the oldest living city on the Ganges. Here's how the three fit together on one unforgettable itinerary.",
  date: "Sep 12, 2022",
  readTime: "6 min read",
  seed: "jaisalmer-fort-1",
};

/* ============================================================
   JOURNAL POSTS
============================================================ */

const POSTS = [
  {
    number: "02",
    category: "Rajasthan",
    location: "Jaipur · Agra · Udaipur",
    title:
      "Things to Explore When Traveling to Jaipur, Agra & Udaipur",
    shortExcerpt:
      "The classic Golden Triangle extension — pink sandstone, marble domes, and a lake palace that seems to float.",
    expandedText:
      "The classic Golden Triangle extension — pink sandstone, marble domes, and a lake palace that seems to float. If you're travelling for seven days, Jaipur deserves at least two nights, Agra deserves an early morning, and Udaipur is where you slow everything down. This route brings together architecture, royal history, local food and some of India's most unforgettable landscapes.",
    date: "Aug 4, 2022",
    readTime: "5 min read",
    seed: "jaipur-hawa-mahal",
  },

  {
    number: "03",
    category: "Family Travel",
    location: "India",
    title: "Holiday Packages in India for Family Travel",
    shortExcerpt:
      "Multigenerational trips need a different pace — fewer transfers, more downtime, activities that work for everyone.",
    expandedText:
      "Multigenerational trips need a different pace — fewer transfers, more downtime, and activities that work for a seven-year-old as comfortably as they work for a grandparent. From relaxed heritage stays to private guides and carefully planned travel days, the right itinerary can make India incredibly rewarding for the whole family.",
    date: "Jul 22, 2022",
    readTime: "7 min read",
    seed: "family-india-travel",
  },

  {
    number: "04",
    category: "Kerala",
    location: "Alleppey · Kerala",
    title: "A Slow Journey Through the Kerala Backwaters",
    shortExcerpt:
      "Two nights on a converted rice barge, drifting past coconut groves and fishing villages.",
    expandedText:
      "Two nights on a converted rice barge, drifting past coconut groves and fishing villages. No itinerary is really required here — the water sets the pace. Wake up to mist over the canals, watch fishermen return with their morning catch and let the landscape become the journey itself.",
    date: "Jun 30, 2022",
    readTime: "8 min read",
    seed: "kerala-backwaters",
  },

  {
    number: "05",
    category: "Culture",
    location: "Varanasi · Uttar Pradesh",
    title: "Sunrise on the Ghats: A Morning in Varanasi",
    shortExcerpt:
      "Boats push off before the light changes. Here's what to expect from a dawn ride along the Ganges.",
    expandedText:
      "Boats push off before the light changes. A sunrise ride along the Ganges is one of those experiences that becomes difficult to describe once you've actually seen it. The city slowly wakes around you while temple bells, chanting and the sounds of daily life begin to fill the riverfront.",
    date: "Jun 8, 2022",
    readTime: "4 min read",
    seed: "varanasi-ghats",
  },

  {
    number: "06",
    category: "Wildlife",
    location: "Ranthambore · Rajasthan",
    title: "Tracking Tigers in Ranthambore National Park",
    shortExcerpt:
      "Six safari drives, one park, and what we learned about reading pug marks, patience and timing.",
    expandedText:
      "Six safari drives, one park, and what we learned about reading pug marks, patience and timing. Wildlife travel is rarely about guarantees. It is about understanding the forest, listening to experienced naturalists and being willing to wait. Ranthambore rewards that patience with extraordinary encounters.",
    date: "May 19, 2022",
    readTime: "6 min read",
    seed: "ranthambore-tiger",
  },

  {
    number: "07",
    category: "Rajasthan",
    location: "Delhi · Agra · Jaipur",
    title: "Planning the Golden Triangle: Delhi, Agra, Jaipur in 7 Days",
    shortExcerpt:
      "The most-booked route in India, mapped day by day — including the detour most first-time visitors skip.",
    expandedText:
      "The most-booked route in India, mapped day by day. Delhi introduces you to India's incredible scale, Agra brings the Taj Mahal into view and Jaipur closes the journey with colour, architecture and royal history. With the right pacing, seven days can be enough to experience all three without feeling rushed.",
    date: "Apr 27, 2022",
    readTime: "5 min read",
    seed: "delhi-agra-jaipur",
  },
];

/* ============================================================
   META ROW
============================================================ */

function MetaRow({ date, readTime, light = false }) {
  return (
    <div
      className={`
        flex
        items-center
        gap-3
        font-['IBM_Plex_Mono']
        text-[10px]
        uppercase
        tracking-[0.05em]
        ${light ? "text-white/55" : "text-[#0B3C49]/40"}
      `}
    >
      <span>{date}</span>

      <span
        className={`
          h-1
          w-1
          rounded-full
          ${light ? "bg-white/30" : "bg-[#0B3C49]/25"}
        `}
      />

      <span>{readTime}</span>
    </div>
  );
}

/* ============================================================
   FEATURED STORY
============================================================ */

function FeaturedStory() {
  return (
    <article
      className="
        group
        relative
        mb-14
        overflow-hidden
        rounded-[32px]
        bg-[#0B3C49]
        shadow-[0_25px_70px_rgba(11,60,73,0.12)]
      "
    >
      {/* IMAGE */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${FEATURED.seed}/1600/1000`}
          alt={FEATURED.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            group-hover:scale-[1.07]
          "
          loading="eager"
        />

        {/* BLACK CINEMATIC OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/90
            via-black/55
            to-black/10
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-2/3
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
          "
        />
      </div>

      {/* TOP LABEL */}

      <div
        className="
          absolute
          left-7
          top-7
          z-10
          flex
          items-center
          gap-4
          md:left-10
          md:top-10
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/30
            backdrop-blur-md
          "
        >
          <span
            className="
              font-['IBM_Plex_Mono']
              text-[11px]
              text-white
            "
          >
            01
          </span>
        </div>

        <div className="hidden h-px w-12 bg-white/25 sm:block" />

        <span
          className="
            font-['Inter']
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/75
          "
        >
          Featured story
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[620px]
          items-end
          p-7
          md:p-10
          lg:p-14
        "
      >
        <div
          className="
            max-w-3xl
            transition-transform
            duration-700
            group-hover:-translate-y-2
          "
        >
          {/* CATEGORY */}

          <div className="mb-5 flex items-center gap-3">
            <span
              className="
                font-['Inter']
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#F58634]
              "
            >
              {FEATURED.category}
            </span>

            <span className="h-px w-8 bg-[#F58634]/70" />

            <span
              className="
                hidden
                font-['IBM_Plex_Mono']
                text-[9px]
                uppercase
                text-white/50
                sm:block
              "
            >
              {FEATURED.location}
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              max-w-3xl
              font-['Fraunces']
              text-[clamp(2.4rem,5vw,4.7rem)]
              font-medium
              leading-[0.98]
              tracking-[-0.025em]
              text-white
            "
          >
            {FEATURED.title}
          </h2>

          {/* EXCERPT */}

          <p
            className="
              mt-6
              max-w-2xl
              font-['Inter']
              text-[14px]
              leading-[1.75]
              text-white/70
              md:text-[15px]
            "
          >
            {FEATURED.excerpt}
          </p>

          {/* BOTTOM */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <MetaRow
              date={FEATURED.date}
              readTime={FEATURED.readTime}
              light
            />

            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-3
                border-b
                border-white/30
                pb-2
                font-['Inter']
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-500
                group-hover:border-[#F58634]
              "
            >
              <span>Explore story</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F58634]
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   JOURNAL CARD
============================================================ */

function JournalCard({ post, expanded, onToggle }) {
  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-[28px]
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          expanded
            ? "min-h-[560px] bg-[#0B3C49] shadow-[0_30px_80px_rgba(11,60,73,0.22)]"
            : "bg-transparent shadow-[0_8px_30px_rgba(11,60,73,0.04)]"
        }
      `}
    >
      {/* IMAGE AREA */}

      <div
        onClick={onToggle}
        className={`
          relative
          cursor-pointer
          overflow-hidden
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            expanded
              ? "min-h-[560px] rounded-[28px]"
              : "aspect-[16/11] rounded-[26px]"
          }
        `}
      >
        {/* IMAGE */}

        <img
          src={`https://picsum.photos/seed/${post.seed}/1400/1000`}
          alt={post.title}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            ${
              expanded
                ? "scale-[1.04] group-hover:scale-[1.07]"
                : "group-hover:scale-[1.08]"
            }
          `}
          loading="lazy"
        />

        {/* BLACK OVERLAY */}

        <div
          className={`
            absolute
            inset-0
            transition-all
            duration-700
            ${
              expanded
                ? "bg-gradient-to-t from-black/95 via-black/55 to-black/5"
                : "bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            }
          `}
        />

        {/* EXPANDED SIDE OVERLAY */}

        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-transparent
            to-transparent
            transition-opacity
            duration-700
            ${expanded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* NUMBER */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/30
            backdrop-blur-md
          "
        >
          <span
            className="
              font-['IBM_Plex_Mono']
              text-[10px]
              text-white
            "
          >
            {post.number}
          </span>
        </div>

        {/* CATEGORY */}

        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-white/20
            bg-black/30
            px-3.5
            py-2
            backdrop-blur-md
          "
        >
          <span
            className="
              font-['Inter']
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
            "
          >
            {post.category}
          </span>
        </div>

        {/* COLLAPSED CONTENT */}

        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            p-5
            transition-all
            duration-500
            ${
              expanded
                ? "translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-[#F58634]" />

            <span
              className="
                font-['IBM_Plex_Mono']
                text-[9px]
                uppercase
                tracking-[0.08em]
                text-white/70
              "
            >
              {post.location}
            </span>
          </div>

          <h3
            className="
              max-w-lg
              font-['Fraunces']
              text-[clamp(1.5rem,2.6vw,2.2rem)]
              font-medium
              leading-[1.08]
              text-white
            "
          >
            {post.title}
          </h3>
        </div>

        {/* EXPANDED CONTENT */}

        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            p-7
            md:p-10
            lg:p-12
            transition-all
            duration-700
            ${
              expanded
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-8 opacity-0"
            }
          `}
        >
          <div className="max-w-3xl">
            {/* CATEGORY / LOCATION */}

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="
                  font-['Inter']
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#F58634]
                "
              >
                {post.category}
              </span>

              <span className="h-px w-8 bg-[#F58634]/70" />

              <span
                className="
                  font-['IBM_Plex_Mono']
                  text-[9px]
                  uppercase
                  tracking-[0.06em]
                  text-white/55
                "
              >
                {post.location}
              </span>
            </div>

            {/* TITLE */}

            <h3
              className="
                max-w-3xl
                font-['Fraunces']
                text-[clamp(2rem,4vw,3.6rem)]
                font-medium
                leading-[1]
                tracking-[-0.02em]
                text-white
              "
            >
              {post.title}
            </h3>

            {/* EXPANDED TEXT */}

            <p
              className="
                mt-5
                max-w-2xl
                font-['Inter']
                text-[13px]
                leading-[1.8]
                text-white/70
                md:text-[14px]
              "
            >
              {post.expandedText}
            </p>

            {/* BOTTOM ROW */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <MetaRow
                date={post.date}
                readTime={post.readTime}
                light
              />

              {/* READ MORE */}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();

                  // Replace this with your actual route.
                  window.location.href = "#";
                }}
                className="
                  group/read
                  inline-flex
                  w-fit
                  cursor-pointer
                  items-center
                  gap-3
                  border-b
                  border-[#F58634]/50
                  bg-transparent
                  pb-2
                  font-['Inter']
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#F58634]
                "
              >
                <span>Read More</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F58634]
                    text-white
                    transition-transform
                    duration-300
                    group-hover/read:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* CLOSE BUTTON */}

        {expanded && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="
              absolute
              right-6
              top-6
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/40
              font-['Inter']
              text-lg
              font-light
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:rotate-90
              hover:bg-black/70
            "
            aria-label="Close story"
          >
            ×
          </button>
        )}
      </div>
    </article>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function BlogJournal() {
  const [active, setActive] = useState("All");

  // Controls which individual journal card expands.
  const [expandedPost, setExpandedPost] = useState(null);

  /* ============================================================
     FILTERED POSTS
  ============================================================ */

  const visiblePosts =
    active === "All"
      ? POSTS
      : POSTS.filter((post) => post.category === active);

  /* ============================================================
     CATEGORY CHANGE
  ============================================================ */

  const handleCategoryChange = (category) => {
    setActive(category);
    setExpandedPost(null);
  };

  /* ============================================================
     CARD TOGGLE
  ============================================================ */

  const handleCardToggle = (number) => {
    setExpandedPost((current) =>
      current === number ? null : number
    );
  };

  return (
    <section className="bg-[#F2FAFB] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* ==================================================
            SECTION INTRO
        ================================================== */}

        <div className="mb-12 max-w-2xl md:mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F58634]" />

            <span
              className="
                font-['Inter']
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#F58634]
              "
            >
              The Journal
            </span>
          </div>

          <h2
            className="
              mt-5
              font-['Fraunces']
              text-[clamp(2.3rem,4vw,3.7rem)]
              font-medium
              leading-[1.03]
              tracking-[-0.02em]
              text-[#0B3C49]
            "
          >
            Notes from the road,
            <br />
            <span className="text-[#124D56]/40">
              before you book it.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-['Inter']
              text-[15px]
              leading-[1.75]
              text-[#124D56]/60
            "
          >
            Field-tested routes, honest timing advice, and the details our
            travellers wished someone had told them first.
          </p>
        </div>

        {/* ==================================================
            CATEGORY FILTER
        ================================================== */}

        <div
          className="
            mb-12
            flex
            flex-wrap
            gap-2
            md:mb-14
          "
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`
                cursor-pointer
                rounded-full
                border
                px-5
                py-2
                font-['Inter']
                text-[12px]
                font-medium
                transition-all
                duration-300
                ${
                  active === cat
                    ? `
                      border-[#124D56]
                      bg-[#124D56]
                      text-white
                      shadow-[0_5px_18px_rgba(18,77,86,0.15)]
                    `
                    : `
                      border-[#124D56]/15
                      bg-transparent
                      text-[#124D56]/65
                      hover:border-[#124D56]/35
                      hover:bg-white
                      hover:text-[#0B3C49]
                    `
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==================================================
            FEATURED STORY
        ================================================== */}

        {active === "All" && <FeaturedStory />}

        {/* ==================================================
            JOURNAL GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-10
            md:grid-cols-2
            lg:gap-x-12
            lg:gap-y-12
          "
        >
          {visiblePosts.map((post) => (
            <JournalCard
              key={post.number}
              post={post}
              expanded={expandedPost === post.number}
              onToggle={() => handleCardToggle(post.number)}
            />
          ))}
        </div>

        {/* ==================================================
            LOAD MORE
        ================================================== */}

        <div className="mt-20 text-center md:mt-24">
          <button
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#124D56]/20
              bg-transparent
              px-7
              py-3
              font-['Inter']
              text-[12px]
              font-semibold
              text-[#124D56]
              transition-all
              duration-300
              hover:border-[#124D56]
              hover:bg-[#124D56]
              hover:text-white
              hover:shadow-[0_8px_25px_rgba(18,77,86,0.15)]
              cursor-pointer
            "
          >
            <span>Load more stories</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            >
              ↓
            </span>
          </button>
        </div>

        {/* ==================================================
            FOOTER LABEL
        ================================================== */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
            font-['IBM_Plex_Mono']
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-[#124D56]/25
          "
        >
          <span className="text-[#124D56] text-[14px]">
            Times India Travels
          </span>

          <span className="h-px w-8 bg-[#124D56]/15" />

          <span className="text-[#124D56] text-[14px]">
            Stories from India
          </span>
        </div>

      </div>
    </section>
  );
}
