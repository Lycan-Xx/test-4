import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import { TemplateProvider } from "./context/TemplateContext"
import Templates from "./components/pages/BusinessServices"
import Settings from "./components/pages/WhyChooseUs"
import PaymentHistory from "./components/pages/CareerServices"
import CVCreatorApp from "./components/CreateCV/CVCreatorApp"
import Layout from "./components/Layout/Layout"
import { NavProvider } from "./context/NavContext"
import UpgradeSubscription from "./components/pages/ContactUs"

function App() {
 return (
  <NavProvider>
   <TemplateProvider>
    <Router>
     <Routes>
      <Route element={<Layout />}>
       <Route path="/" element={<Homepage />} />
       <Route path="/create-cv/*" element={<CVCreatorApp />} />
             <Route path="/templates" element={<Templates />} />
             <Route path="/settings" element={<Settings />}  />
                                     <Route path="/payment-history" element={<PaymentHistory />} />
                                     <Route path="/upgrade" element={<UpgradeSubscription />} />
      </Route>
     </Routes>
    </Router>
   </TemplateProvider>
  </NavProvider>
 )
}

export default App
