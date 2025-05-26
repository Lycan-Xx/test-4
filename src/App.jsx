import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./components/pages/HomePage"
import BusinessServices from "./components/pages/BusinessServices"
import CareerServices from "./components/pages/CareerServices"


function App() {
 return (
  <Router>
   <Routes>
    <Route element={<Layout />}>
     <Route path="/" element={<HomePage />} />
     <Route path="/business-services" element={<BusinessServices />} />
     <Route path="/career-services" element={<CareerServices />} />
    </Route>
   </Routes>
  </Router>
 )
}

export default App
