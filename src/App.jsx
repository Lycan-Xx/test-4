import React from "react"
import "../src/index.css"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import ChoosePaymentMethods from "./components/PopUps/ChoosePaymentMethods"
import GenerateCV from "./components/PopUps/GenerateCV"
import DowngradePopup from "./components/PopUps/DowngradePopup"
import CoverLetter from "./components/pages/CoverLetter"
import Templates from "./components/pages/Templates"

function App() {
 return (
  <div className="w-full mx-auto flex items-center justify-center">
   {/* <Homepage /> */}
   {/* <ChoosePaymentMethods /> */}
   {/* <GenerateCV /> */}
   {/* <DowngradePopup /> */}
   {/* <CoverLetter /> */}
   <Templates />
  </div>
 )
}

export default App
