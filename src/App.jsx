import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";
import Rooms from "./components/Rooms/Rooms";
import Facilities from "./components/Facilities/Facilities";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocialMedia from "./components/FloatingSocialMedia";
import DeluxeDoubleNonACRoom from "./components/SidebarComponent/DeluxeDoubleNonACRoom";
import DeluxeDoubleACRoom from "./components/SidebarComponent/DeluxeDoubleACRoom";
import DeluxeNonACTripleRoom from "./components/SidebarComponent/DeluxeNonACTripleRoom";
import DeluxeACTripleRoom from "./components/SidebarComponent/DeluxeACTripleRoom";
import DeluxeNonACFourBedRoom from "./components/SidebarComponent/DeluxeNonACFourBedRoom";
import DeluxeACFourBedRoom from "./components/SidebarComponent/DeluxeACFourBedRoom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms" element={<Rooms />} />
            {/* <Route path="/restaurant" element={<Restaurant/>}/> */}
            <Route path="/facilities" element={<Facilities />} />
            <Route
              path="/Deluxe_Double_Non-AC_Room"
              element={<DeluxeDoubleNonACRoom />}
            />
            <Route
              path="/Deluxe_Double_AC_Room"
              element={<DeluxeDoubleACRoom />}
            />
            <Route
              path="/Deluxe_Non-AC_Triple_Room"
              element={<DeluxeNonACTripleRoom />}
            />
            <Route
              path="/Deluxe_AC_Triple_Room"
              element={<DeluxeACTripleRoom />}
            />
            <Route
              path="/Deluxe_Non-AC_Four_Bed_Room"
              element={<DeluxeNonACFourBedRoom />}
            />
            <Route
              path="/Deluxe_AC_Four_Bed_Room"
              element={<DeluxeACFourBedRoom />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
      <FloatingSocialMedia />
    </>
  );
}

export default App;
