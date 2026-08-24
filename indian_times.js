import React from "react";
import ReactDom from"react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
import Disclaimer from "./src/Disclaimer";
import PrivacyPolicy from "./src/Privacy_Policy";
import RefundPolicy from "./src/Refund_Policy";
import  Destination  from "./src/Destination";
import TermsCondition from "./src/Terms_Condition";



import ScrollToTop from "./src/utils/ScrollToTop";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// ============================================================
// ADMIN
// ============================================================

import AdminLayout from "./admin/layout/AdminLayout";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminPageNotFound from "./admin/pages/AdminPageNotFound";
import AdminTourEnquiries from "./admin/pages/tour-enquiry/AdminTourEnquiries";
import AdminTourEnquiryDetails from "./admin/pages/tour-enquiry/AdminTourEnquiryDetails";
import AdminTestimonials from "./admin/pages/testimonials/AdminTestimonials";
import AdminTestimonialsDetails from "./admin/pages/testimonials/AdminTestimonialDetails";
import AdminCreateTestimonial from "./admin/pages/testimonials/AdminCreateTestimonial";
import AdminBlogs from "./admin/pages/blogs/AdminBlogs";
import AdminBlogCreate from "./admin/pages/blogs/AdminBlogCreate";
import AdminBlogDetails from "./admin/pages/blogs/AdminBlogDetails";
import AdminBlogEdit from "./admin/pages/blogs/AdminBlogEdit";
import AdminHomeHero from "./admin/pages/home-hero-images/AdminHomeHero";
import AdminHomeHeroCreate from "./admin/pages/home-hero-images/AdminHomeHeroCreate";
import AdminHomeHeroEdit from "./admin/pages/home-hero-images/AdminHomeHeroEdit";
import AdminManagement from "./admin/pages/admin-managment/AdminManagement";
import ClientReviewVideos from "./admin/pages/home-client-video/ClientReviewVideos";
import ClientGallery from "./admin/pages/about-us-client-galley/ClientGallery";
import CarRentalPage from "./admin/pages/car-rental-enquiry/CarRentalPage";
import AdminTourPackages from "./admin/pages/tour-package/AdminTourPackages";
import AdminTourPackageCreate from "./admin/pages/tour-package/AdminTourPackageCreate";
import AdminTourPackageEdit from "./admin/pages/tour-package/AdminTourPackageEdit";
import AdminTourPackageDetails from "./admin/pages/tour-package/AdminTourPackageDetails";
import AdminTourCategories from "./admin/pages/tour-category/AdminTourCategories";
import AdminTourCategoryCreate from "./admin/pages/tour-category/AdminTourCategoryCreate";
import AdminTourCategoryEdit from "./admin/pages/tour-category/AdminTourCategoryEdit";
import AdminTourCategoryDetail from "./admin/pages/tour-category/AdminTourCategoryDetail";
import AdminDestinations from "./admin/pages/destination/AdminDestinations";
import AdminDestinationCreate from "./admin/pages/destination/AdminDestinationCreate";
import AdminDestinationEdit from "./admin/pages/destination/AdminDestinationEdit";
import AdminDestinationDetail from "./admin/pages/destination/AdminDestinationDetail";
import PageTransitionLoader from "./src/utils/PageTransitionLoader";
import PayOnline from "./src/Pay_Online";

function Main(){
    useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
    return(
    <>
      <BrowserRouter>
        {/* <PageTransitionLoader></PageTransitionLoader> */}
        <ScrollToTop></ScrollToTop>
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="/About_Us" element={<About_Us/>} />
            <Route path="/Tour" element={<TourPackage />} />
            <Route path="/destinations/:id" element={<Destination />}/>
            <Route path="/Tour/:category" element={<TourPackage_category />} />
            <Route path="/Tour/:category/:sub" element={<TourPackage_cat_sub />} />
            <Route path="/CarRental" element={<CarRental></CarRental>}/>
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact-Us" element={<ContactUs/>}/>
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Testimonials/:id" element={<Testimonial_Detail />} />
            <Route path="/Disclaimer" element={<Disclaimer></Disclaimer>}/>
            <Route path="/terms-and-condition" element={<TermsCondition></TermsCondition>}/>
            <Route path="/Privacy-Policy" element={<PrivacyPolicy></PrivacyPolicy>}/>
            <Route path="/Refund-Policy" element={<RefundPolicy></RefundPolicy>}/>
            <Route path="/pay-online" element={<PayOnline></PayOnline>} />
            
          </Route>

            {/* ADMIN PANEL */}

          <Route path="/admin">
              <Route index element={<AdminPageNotFound />} />
              {/* <Route index element={<Navigate to="/admin/login" replace />}/> */}
                {/* Public admin login */}
              <Route path="login" element={<AdminLogin />}/> {/* checked */}
                {/* Protected admin area */}
              <Route element={<AdminLayout />}> {/* checked */}
                <Route path="dashboard" element={<AdminDashboard />}/> {/*checked*/}
                <Route path="tour-enquiries" element={<AdminTourEnquiries />}/> 
                <Route path="tour-enquiries/:id" element={<AdminTourEnquiryDetails />} />
                <Route path="testimonials" element={<AdminTestimonials />}/>
                <Route path="testimonials/create" element={<AdminCreateTestimonial />} />
                <Route path="testimonials/:id" element={<AdminTestimonialsDetails />} />
                <Route path="blogs" element={<AdminBlogs />} />
                <Route path="blogs/create" element={<AdminBlogCreate />} />
                <Route path="blogs/:id" element={<AdminBlogDetails />} />
                <Route path="blogs/:id/edit" element={<AdminBlogEdit />} />
                <Route path="home-hero" element={<AdminHomeHero />} />
                <Route path="home-hero/create" element={<AdminHomeHeroCreate />} />
                <Route path="home-hero/edit/:id" element={<AdminHomeHeroEdit />} />
                <Route path="admin-management" element={<AdminManagement />} />
                <Route path="client-review-videos" element={<ClientReviewVideos />} />
                <Route path="client-gallery" element={<ClientGallery />} />
                <Route path="car-rental-enquiries" element={<CarRentalPage />} />
                <Route path="tour-packages" element={<AdminTourPackages />}/> {/*checked*/}
                <Route path="tour-packages/create" element={<AdminTourPackageCreate />}/> {/*checked*/}
                <Route path="tour-packages/:id" element={<AdminTourPackageDetails />} />
                <Route path="tour-packages/:id/edit" element={<AdminTourPackageEdit />} />
                <Route path="tour-categories" element={<AdminTourCategories />} />
                <Route path="tour-categories/create" element={<AdminTourCategoryCreate />} />
                <Route path="tour-categories/:id" element={<AdminTourCategoryDetail />} />
                <Route path="tour-categories/:id/edit" element={<AdminTourCategoryEdit />} />
                <Route path="destinations" element={<AdminDestinations />} />
                <Route path="destinations/create" element={<AdminDestinationCreate />} />
                <Route path="destinations/:id/edit" element={<AdminDestinationEdit />} />
                <Route path="destinations/:id" element={<AdminDestinationDetail />} />
              </Route>
          </Route>

        </Routes>
    </BrowserRouter>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<Main/>);