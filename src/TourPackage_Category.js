import { useParams } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { tourCategories } from "./utils/TourPackage_data";

import TourPackage_category_Hero from "./components/TourPackage_Category_Component/Tour_Category_Hero";
import TourPackage_Category_Intro from "./components/TourPackage_Category_Component/Tour_Category_Into";
import TourPackage_Category_SubCategory from "./components/TourPackage_Category_Component/Tour_Category_SubCategory";
import TourPackage_Category_Highlights from "./components/TourPackage_Category_Component/Tour_Category_Highlight";
import TourPackage_Category_CTA from "./components/TourPackage_Category_Component/Tour_Category_CTA";

export default function TourPackage_category() {
  const { category } = useParams();

  // ============================================================
  // SPECIAL PACKAGES
  // Collect every package from every category where featured === true
  // ============================================================

  let categoryData;

  if (category === "Most-Popular") {
    const featuredPackages = Object.values(tourCategories).flatMap((category) =>
      (category.packages || []).filter((pkg) => pkg.featured === true),
    );

    categoryData = {
      id: "Most-Popular",
      name: "Most Popular Packages",
      tagline: "Our Most Loved Journeys",
      description:
        "Explore the journeys our travelers love most, carefully selected from across India for unforgettable experiences.",
      heroImage:
        "https://i.pinimg.com/1200x/d3/75/cd/d375cda84fea2e01fdbc96fa3d985735.jpg",
      packages: featuredPackages,
    };
  } else {
    // ============================================================
    // NORMAL TOUR CATEGORY
    // ============================================================

    categoryData = tourCategories[category];
  }

  // ============================================================
  // CATEGORY NOT FOUND
  // ============================================================

  if (!categoryData) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-['Fraunces'] text-4xl font-semibold text-[#0B3C49]">
          Tour Category Not Found
        </h1>

        <Link
          to="/Tour"
          className="inline-flex items-center gap-2 mt-6 bg-[#F58634] px-6 py-3 text-sm font-semibold text-[#0B3C49]"
        >
          View All Tours
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    );
  }

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <>
      <TourPackage_category_Hero data={categoryData} />

      {/* 
      <TourPackage_Category_Intro data={categoryData} />
      */}

      <TourPackage_Category_Highlights data={categoryData} />

      <TourPackage_Category_SubCategory subcategories={categoryData.packages} />

      <TourPackage_Category_CTA data={categoryData} />
    </>
  );
}
