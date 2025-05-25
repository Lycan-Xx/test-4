import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import Layout from "./components/Layout/Layout"
import About from "./components/pages/About"
import BusinessServices from "./components/pages/BusinessServices"
import CareerServices from "./components/pages/CareerServices"
import WhyChooseUs from "./components/pages/WhyChooseUs"
import ContactUs from "./components/pages/ContactUs"
import Testimonial from "./components/pages/Testimonial.tsx"

function App() {
 return (
  <Router>
   <Routes>
    <Route element={<Layout />}>
     <Route path="/" element={<Homepage />} />
     <Route path="/about" element={<About />} />
     <Route path="/business-services" element={<BusinessServices />} />
     <Route path="/career-services" element={<CareerServices />} />
     <Route path="/WhyUs" element={<WhyChooseUs />} />
     <Route path="/Contact" element={<ContactUs />} />
     <Route path="/Testimonial" element={<Testimonial />} />
    </Route>
   </Routes>
  </Router>
 )
}

export default App
