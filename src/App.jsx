import React from "react"
import "../src/index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateCV from "./components/pages/CreateCV.jsx"
import PersonalDetails from "./components/PersonalDetails"
import Summary from "./components/Summary.jsx"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
// import ChoosePaymentMethods from "./components/PopUps/ChoosePaymentMethods"
// import GenerateCV from "./components/PopUps/GenerateCV"
// import DowngradePopup from "./components/PopUps/DowngradePopup"
// import CoverLetter from "./components/pages/CoverLetter"
// import Templates from "./components/pages/Templates"
// import SideNav from "./components/SideNav"
// import PaymentHistory from "./components/pages/PaymentHistory"
// import CreateCVNav from "./components/CreateCVNav"

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/create-cv/*" element={<CreateCV />} />
    <Route path="personal-details" element={<PersonalDetails />} />
    <Route path="summary" element={<Summary />} />
    <Route path="experience" element={<Experience />} />
    <Route path="education" element={<Education />} />
    <Route path="skills" element={<Skills />} />
   </Routes>
  </Router>
 )
}

export default App
