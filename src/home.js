import Home_HeroSection from "./components/home_components/HeroSection_home";
import Home_approved_by_govSection from "./components/home_components/Home_approved_by_govSection";
import Home_TimeIndia_WelcomeSection from "./components/home_components/Home_TimeIndia_WelcomeSection";
import Home_TripAdvisor from "./components/home_components/Home_TripAdvisor";
import Home_WhyChooseUs from "./components/home_components/Home_WhyChooseUs";
import Home_WhyChooseUs_2 from "./components/home_components/Home_WhyChooseUs_2";
import Home_ClientReview from "./components/home_components/Home_ClientReview";
import Home_ClientReview_2 from "./components/home_components/Home_ClientReview_2";
import Home_Client_Testimonials from "./components/home_components/Home_Client_Testimonial";
import Home_Travel_Grid from "./components/home_components/Home_Travel_Grid";
import Home_Qautation_form from "./components/home_components/Home_Qautation_form";
import Home_Qautation_form_2 from "./components/home_components/Home_Qautation_form_2";
import DestinationSection from "./components/home_components/DestinationSection";
import Affiliations from "./components/home_components/Affiliations";

import { useLocation } from "react-router";
import { useEffect } from "react";

export default function Homes(){
    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#quatation") {
      const element = document.getElementById("quatation");

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

    return(
        <>
            <Home_HeroSection></Home_HeroSection>
            <Home_approved_by_govSection></Home_approved_by_govSection>
            <Home_TimeIndia_WelcomeSection></Home_TimeIndia_WelcomeSection>
            <Home_TripAdvisor></Home_TripAdvisor>
            <Home_WhyChooseUs_2></Home_WhyChooseUs_2>
            <Home_Client_Testimonials></Home_Client_Testimonials>
            <Home_ClientReview></Home_ClientReview>
            <DestinationSection></DestinationSection>
            <Affiliations></Affiliations>
            <Home_Travel_Grid></Home_Travel_Grid>
            <Home_Qautation_form></Home_Qautation_form>
        </>
    )
}