import React from "react";
import ReactDom from"react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router";
import Homes from "./src/home";
import Layout from "./src/Layout";
import About_Us from "./src/About";
import CarRental from "./src/CarRental";
import TourPackage from "./src/TourPackages";
import Blog from "./src/Blog";
import TourPackage_cat_sub from "./src/TourPackage_cat_sub";
import TourPackage_category from "./src/TourPackage_Category";
import ContactUs from "./src/Contact_Us";
import Testimonials from "./src/Testimonial";
import Testimonial_Detail from "./src/Testimonial_Detail";

import ScrollToTop from "./src/utils/ScrollToTop";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Disclaimer from "./src/Disclaimer";
import PrivacyPolicy from "./src/Privacy_Policy";
import RefundPolicy from "./src/Refund_Policy";


function Main(){
    useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
    return(
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="/About_Us" element={<About_Us/>} />
            <Route path="/Tour" element={<TourPackage />} />
             <Route path="/Tour/:category" element={<TourPackage_category />} />
            <Route path="/Tour/:category/:sub" element={<TourPackage_cat_sub />} />
            <Route path="/CarRental" element={<CarRental></CarRental>}/>
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact-Us" element={<ContactUs/>}/>
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Testimonials/:id" element={<Testimonial_Detail />} />
            <Route path="/Disclaimer" element={<Disclaimer></Disclaimer>}/>
            <Route path="/Privacy-Policy" element={<PrivacyPolicy></PrivacyPolicy>}/>
            <Route path="/Refund-Policy" element={<RefundPolicy></RefundPolicy>}/>
          </Route>

        </Routes>
    </BrowserRouter>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<Main/>);