import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import CreateCVNav from "../CreateCVNav"
import PersonalDetails from "../PersonalDetails"
import Education from "../Education"
import Experience from "../Experience"

const CreateCV = () => {
 const [currentStep, setCurrentStep] = useState(1)
 const navigate = useNavigate()

 const handleNextStep = () => {
  setCurrentStep(currentStep + 1)
  navigate(`/create-cv/step-${currentStep + 1}`)
 }

 const handlePreviousStep = () => {
  setCurrentStep(currentStep - 1)
  navigate(`/create-cv/step-${currentStep - 1}`)
 }

 return (
  <div>
   <CreateCVNav
    currentStep={currentStep}
    onNext={handleNextStep}
    onPrevious={handlePreviousStep}
   />
   {currentStep === 1 && <PersonalDetails onNext={handleNextStep} />}
   {currentStep === 2 && (
    <Education onNext={handleNextStep} onPrevious={handlePreviousStep} />
   )}
   {currentStep === 3 && (
    <Experience
     onNext={handleNextStep}
     onPrevious={handlePreviousStep}
    />
   )}
   <Outlet />
  </div>
 )
}

export default CreateCV
