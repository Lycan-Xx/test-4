import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import Layout from "./components/Layout/Layout"
import About from "./components/pages/About"
import CareerServices from "./components/pages/CareerServices"
import BusinessServices from "./components/pages/BusinessServices"
import WhyChooseUs from "./components/pages/WhyChooseUs"
import ContactUs from "./components/pages/ContactUs"

function App() {
 return (
  <Router>
   <Routes>
    <Route element={<Layout />}>
     <Route path="/" element={<Homepage />} />
     <Route path="/about" element={<About />} />
     <Route path="/CareerServices" element={<CareerServices />} />
     <Route path="/BusinessServices" element={<BusinessServices />} />
     <Route path="/WhyUs" element={<WhyChooseUs />} />
     <Route path="/Contact" element={<ContactUs />} />
    </Route>
   </Routes>
  </Router>
 )
}

export default App
