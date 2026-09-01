import { useParams, Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { tourCategories } from "./utils/TourPackage_data";
import TourPackage_Sub_Hero from "./components/TourPackage_Cat_Sub_Components/TourPackage_sub_Hero";
import TourPackage_Sub_Intro from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Into";
import TourPackage_Sub_Highlights from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Highlights";
import TourPackage_Sub_CTA from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_CTA";
import TourPackage_Sub_AtAGlance from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_AtAGlance";
import TourPackage_Sub_RelatedTours from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_RelatedTours";
import TourPackage_Sub_Itinerary from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Itinerary";
import TourPackage_Sub_Itinerary_2 from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Itineray_2";
import TourPackage_Sub_Itinerary_3 from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Itineray_3";
import TourPackage_Sub_Itinerary_4 from "./components/TourPackage_Cat_Sub_Components/TourPackage_Sub_Itinerary_4";

export default function TourPackage_cat_sub() {
  const { sub } = useParams();
  
  const tour = Object.values(tourCategories).flatMap((category) => category.packages).find((pkg) => pkg.id === sub);
  

  // If URL doesn't match any tour
  if (!tour) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#F2FAFB]">
        <div className="text-center">
          <h1 className="font-['Fraunces'] text-5xl text-[#0B3C49]">
            Tour Not Found
          </h1>

          <Link
            to="/Tour"
            className="inline-flex items-center gap-2 mt-6 bg-[#F58634] px-6 py-3 text-sm font-semibold text-[#0B3C49]"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
        <TourPackage_Sub_Hero tour={tour}></TourPackage_Sub_Hero>
        <TourPackage_Sub_Intro tour={tour}></TourPackage_Sub_Intro>
        {/* <TourPackage_Sub_AtAGlance tour={tour}></TourPackage_Sub_AtAGlance> */}
        {/* <TourPackage_Sub_Itinerary tour={tour}></TourPackage_Sub_Itinerary> */}
        {/* <TourPackage_Sub_Itinerary_2 tour={tour}></TourPackage_Sub_Itinerary_2> */}
        {/* <TourPackage_Sub_Itinerary_3 tour={tour}></TourPackage_Sub_Itinerary_3> */}
        <TourPackage_Sub_Itinerary_4 tour={tour}></TourPackage_Sub_Itinerary_4>
        {/* <TourPackage_Sub_Highlights tour={tour}></TourPackage_Sub_Highlights> */}
        <TourPackage_Sub_CTA tour={tour}></TourPackage_Sub_CTA>
        <TourPackage_Sub_RelatedTours tour={tour}></TourPackage_Sub_RelatedTours>
    </>
  );
}
