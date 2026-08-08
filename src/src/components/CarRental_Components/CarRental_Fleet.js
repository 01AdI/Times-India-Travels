import { Users, Luggage, ArrowRight } from "lucide-react";
import { useState } from "react";
import CarRental_EnquiryModal from "./CarRental_EnquiryModal";

const fleet = [
  {
    name: "Toyota Etios",
    tag: "Best for couples & solo travellers",
    seats: "4 seats",
    luggage: "2 bags",
    image:
      "https://www.timesindiatravels.com/wp-content/uploads/2018/05/Toyota-Etios.jpg",
  },
  {
    name: "Toyota Innova",
    tag: "Best for small families",
    seats: "6 seats",
    luggage: "4 bags",
    image:
      "https://www.timesindiatravels.com/wp-content/uploads/2018/05/innova.jpg",
  },
  {
    name: "Tempo Traveller",
    tag: "Best for groups up to 12",
    seats: "12 seats",
    luggage: "10 bags",
    image:
      "https://www.timesindiatravels.com/wp-content/uploads/2018/05/temo-trveller.jpg",
  },
  {
    name: "Luxury Bus",
    tag: "Best for large groups & tours",
    seats: "35+ seats",
    luggage: "Full hold",
    image:
      "https://www.timesindiatravels.com/wp-content/uploads/2018/05/bus.jpg",
  },
];

export default function CarRental_Fleet() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const openEnquiry = (vehicle = "") => {
    setSelectedVehicle(vehicle);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <section className="bg-[#124d56] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span
            className="
              font-['Inter']
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#F58634]
              sm:text-xs
            "
          >
            Choose your ride
          </span>

          <h2
            className="
              mt-4
              font-['Fraunces']
              text-[clamp(2rem,4vw,3rem)]
              font-medium
              text-white
            "
          >
            Our Fleet
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-10 bg-[#F58634]" />

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-['Inter']
              text-sm
              leading-relaxed
              text-white/60
              sm:text-base
            "
          >
            Thoughtfully selected vehicles for everything from intimate escapes
            to larger family and group journeys.
          </p>
        </div>

        {/* ==================================================
            FLEET GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {fleet.map((car) => (
            <article
              key={car.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white
                shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_65px_-30px_rgba(0,0,0,0.55)]
              "
            >
              {/* ==================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  h-[300px]
                  cursor-pointer
                  overflow-hidden
                  sm:h-[340px]
                "
              >
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    cursor-pointer
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071f23]/85
                    via-[#071f23]/20
                    to-transparent
                  "
                />

                {/* Badge */}

                <div className="absolute left-5 top-5">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-white/90
                      px-3.5
                      py-1.5
                      font-['Inter']
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#124d56]
                      backdrop-blur-md
                    "
                  >
                    Chauffeur Driven
                  </span>
                </div>

                {/* Vehicle title */}

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p
                    className="
                      font-['Inter']
                      text-[11px]
                      uppercase
                      tracking-[0.2em]
                      text-white/65
                    "
                  >
                    {car.tag}
                  </p>

                  <h3
                    className="
                      mt-1
                      font-['Fraunces']
                      text-2xl
                      font-medium
                      sm:text-3xl
                    "
                  >
                    {car.name}
                  </h3>
                </div>
              </div>

              {/* ==================================================
                  CARD CONTENT
              ================================================== */}

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-6">
                  {/* Seats */}

                  <div className="flex items-center gap-2 text-[#124d56]/65">
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F2FAFB]
                      "
                    >
                      <Users className="h-4 w-4 text-[#124d56]" />
                    </span>

                    <span className="font-['Inter'] text-sm">{car.seats}</span>
                  </div>

                  {/* Luggage */}

                  <div className="flex items-center gap-2 text-[#124d56]/65">
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F2FAFB]
                      "
                    >
                      <Luggage className="h-4 w-4 text-[#124d56]" />
                    </span>

                    <span className="font-['Inter'] text-sm">
                      {car.luggage}
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    ENQUIRE BUTTON
                ================================================== */}

                <button
                  type="button"
                  onClick={() => openEnquiry(car.name)}
                  className="
                    group/link
                    mt-6
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2
                    font-['Inter']
                    text-sm
                    font-semibold
                    text-[#124d56]
                    transition-colors
                    duration-300
                    hover:text-[#F58634]
                  "
                >
                  Enquire about this vehicle
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#124d56]/8
                      transition-colors
                      group-hover/link:bg-[#F58634]/10
                    "
                  >
                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CarRental_EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
        selectedCar={selectedVehicle}
      />
    </section>
  );
}
