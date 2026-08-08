import Home_HeroSection from "./components/HeroSection_home";
import Home_approved_by_govSection from "./components/Home_approved_by_govSection";
import Home_TimeIndia_WelcomeSection from "./components/Home_TimeIndia_WelcomeSection";
import Home_TripAdvisor from "./components/Home_TripAdvisor";
import Home_WhyChooseUs from "./components/Home_WhyChooseUs";
import Home_WhyChooseUs_2 from "./components/Home_WhyChooseUs_2";
import Home_ClientReview from "./components/Home_ClientReview";
import Home_ClientReview_2 from "./components/Home_ClientReview_2";
import Home_Client_Testimonials from "./components/Home_Client_Testimonial";
import Home_Quote from "./components/Home_Quote";
import Home_Travel_Grid from "./components/Home_Travel_Grid";
import Home_Qautation_form from "./components/Home_Qautation_form";
import Home_Qautation_form_2 from "./components/Home_Qautation_form_2";
import Footer from "./components/Footer";


export default function Homes(){

    return(
        <>
            <Home_HeroSection></Home_HeroSection>
            <Home_approved_by_govSection></Home_approved_by_govSection>
            <Home_TimeIndia_WelcomeSection></Home_TimeIndia_WelcomeSection>
            <Home_TripAdvisor></Home_TripAdvisor>
            <Home_WhyChooseUs_2></Home_WhyChooseUs_2>
            <Home_Client_Testimonials></Home_Client_Testimonials>
            <Home_ClientReview></Home_ClientReview>
            <Home_Quote></Home_Quote>
            <Home_Travel_Grid></Home_Travel_Grid>
            <Home_Qautation_form></Home_Qautation_form>
        </>
    )
}