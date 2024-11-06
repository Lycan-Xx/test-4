import React from "react"
import {
 BrowserRouter as Router,
 Route,
 Routes,
 useNavigate,
} from "react-router-dom"
import CreateCV from "./CreateCV"
import CreateCVLayout from "./CreateCVLayout/CreateCVLayout"
import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Summary from "./Summary"

const CVCreatorApp = () => {
 //  const navigate = useNavigate()

 //  const handleNextStep = (currentStep) => {
 //   navigate(`/create-cv/step-${currentStep + 1}`)
 //  }

 //  const handlePreviousStep = (currentStep) => {
 //   navigate(`/create-cv/step-${currentStep - 1}`)
 //  }

 return (
  <Routes>
   <Route element={<CreateCVLayout />}>
    <Route path="/" element={<CreateCV />} />
    <Route path="/personal-details" element={<PersonalDetails />} />
    <Route path="/education" element={<Education />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/summary" element={<Summary />} />
   </Route>
  </Routes>
 )
}

export default CVCreatorApp
