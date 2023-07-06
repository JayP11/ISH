import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";
import OurMenu from "./pages/OurMenu";
import { AiOutlineArrowUp } from "react-icons/ai";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <a
        href="http://Ishitaghelani.glossgenius.com"
        target="_blank"
        className="subscription-btn">
        Book Appointment
      </a>
      <div className="whats-app-main">
        <button className="whats-app" onClick={() => window.scrollTo(0, 0)}>
          <AiOutlineArrowUp className="float-icon" />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
