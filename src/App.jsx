import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import { TemplateProvider } from "./context/TemplateContext"
import Templates from "./components/pages/Templates"
import CVCreatorApp from "./components/CreateCV/CVCreatorApp"
import Layout from "./components/Layout/Layout"

function App() {
 return (
  <TemplateProvider>
   <Router>
    <Routes>
     <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/create-cv/*" element={<CVCreatorApp />} />
      <Route path="/templates" element={<Templates />} />
     </Route>
    </Routes>
   </Router>
  </TemplateProvider>
 )
}

export default App
