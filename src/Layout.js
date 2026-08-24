import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Navbar_2 from "./components/Navbar_2";
import Footer from "./components/Footer";
import FloatingQuoteButton from "./FloatingQuoteButton";

export default function Layout() {
  return (
    <div >
      <Navbar_2/>
      <Outlet /> {/*All pages will render here */}  
      <Footer></Footer>
      <FloatingQuoteButton></FloatingQuoteButton>
    </div>
  );
}
