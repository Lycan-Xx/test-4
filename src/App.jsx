import React from "react"
import "../src/index.css"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import ChoosePaymentMethods from "./components/PopUps/ChoosePaymentMethods"
import GenerateCV from "./components/PopUps/GenerateCV"
import DowngradePopup from "./components/PopUps/DowngradePopup"
import CoverLetter from "./components/pages/CoverLetter"
import Templates from "./components/pages/Templates"
import SideNav from "./components/SideNav"
import PaymentHistory from "./components/pages/PaymentHistory"
import CreateCVNav from "./components/CreateCVNav"

function App() {
 return (
  <div className="w-full mx-auto flex items-center justify-center">
   {/* <Homepage /> */}
   {/* <ChoosePaymentMethods /> */}
   {/* <GenerateCV /> */}
   {/* <DowngradePopup /> */}
   {/* <CoverLetter /> */}
   {/* <Templates /> */}
   {/* <SideNav /> */}
   {/* <PaymentHistory /> */}
   <CreateCVNav />
  </div>
 )
}

export default App
