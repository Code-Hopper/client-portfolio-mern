import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import "./components/Components.scss"
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home } from "./components/pages/Home.jsx"
import { ServicePage } from "./components/pages/ServicePage.jsx"
import { ContactPage } from "./components/pages/ContactPage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:service" element={<ServicePage />} />
          <Route path="/getconnected" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
