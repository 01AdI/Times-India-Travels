import React from "react";
import ReactDom from"react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router";
import Homes from "./src/home";
import Layout from "./src/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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
            <Route path="/About-Us" element={<Homes/>} />
            <Route path="/Categories" element={<Homes />} />
            <Route path="/Categories/:selected" element={<Homes></Homes>}/>
            <Route path="/Categories/:selected/:sub" element={<Homes />} />
          </Route>

        </Routes>
    </BrowserRouter>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<Main/>);