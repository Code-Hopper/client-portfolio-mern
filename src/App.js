import { useEffect } from "react"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import "./components/Components.scss"
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

// import pages
import { Home } from "./components/pages/Home.jsx"
import { ServicePage } from "./components/pages/ServicePage.jsx"
import { ContactPage } from "./components/pages/ContactPage.jsx"
import AboutMePage from "./components/pages/AboutMePage.jsx"

import AOS from "aos"

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const ScrollFix = () => {
    const location = useLocation();

    useEffect(() => {
      document.body.style.overflow = "auto";
    }, [location.pathname]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollFix />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:service" element={<ServicePage />} />
          <Route path="/getconnected" element={<ContactPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
