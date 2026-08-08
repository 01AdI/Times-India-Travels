import React from "react";
import ReactDom from"react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router";
import Homes from "./src/home";
import Layout from "./src/Layout";
import About_Us from "./src/About";
import CarRental from "./src/CarRental";
import { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./src/Blog";


function Main(){
    useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
    return(
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="/About_Us" element={<About_Us/>} />
            <Route path="/Categories" element={<Homes />} />
            <Route path="/CarRental" element={<CarRental></CarRental>}/>
            <Route path="/Blog" element={<Blog />} />
          </Route>

        </Routes>
    </BrowserRouter>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<Main/>);