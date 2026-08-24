import { useParams } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { destinations } from "./utils/Destination_data";
import Destination_Hero from "./components/Destination_Components/Destination_Hero";
import Destination_Overview from "./components/Destination_Components/Destination_Overview";
import Destination_Category from "./components/Destination_Components/Destination_Category";
import Destination_CTA from "./components/Destination_Components/Destination_CTA";
import Destination_Other from "./components/Destination_Components/Destination_Other";

export default function Destination() {
  const { id } = useParams();

  const destinationData = destinations.find(
    (destination) => destination.id === id,
  );
  if (!destinationData) {
    return (
      <section className=" flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
            <h1 className="font-['Fraunces'] text-4xl font-semibold text-[#0B3C49]">
            Destination Not Found
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            The destination you are looking for does not exist or may have been
            removed.
            </p>

            <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#F58634] px-6 py-3 text-sm font-semibold text-[#0B3C49] 
            transition-colors duration-300 hover:bg-[#103F4A] hover:text-white"
            >
            View Destinations

            <ArrowRight className="h-4 w-4" />
            </Link>
      </section>
    );
  }

  return (
        <>
            <Destination_Hero data={destinationData}></Destination_Hero>
            <Destination_Overview data={destinationData} ></Destination_Overview>
            <Destination_Category  data={destinationData}></Destination_Category>
            <Destination_CTA data={destinationData}></Destination_CTA>
            <Destination_Other data={destinationData}></Destination_Other>
        </>
  );
}