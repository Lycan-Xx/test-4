import React from "react"
import "../src/index.css"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChoosePaymentMethods from "./components/PopUps/ChoosePaymentMethods"
import GenerateCV from "./components/PopUps/GenerateCV"
import DowngradePopup from "./components/PopUps/DowngradePopup"

function App() {
 return (
  <div className="w-full mx-auto flex items-center justify-center">
     {/* <Homepage /> */}
     {/* <ChoosePaymentMethods /> */}
       {/* <GenerateCV /> */}
       <DowngradePopup />
  </div>
 )
}

export default App
