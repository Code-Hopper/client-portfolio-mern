import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import "./components/Components.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home } from "./components/pages/Home.jsx"

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
