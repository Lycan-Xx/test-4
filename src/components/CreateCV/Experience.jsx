import React from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import ExperienceList from "./ExperienceList"
import { useTemplate } from "../../context/TemplateContext"

const Experience = () => {
 const { selectedTemplate } = useTemplate()
 return (
  <main className="flex flex-row justify-between align-middle h-screen px-[10vw]">
   <section
    className="md:w-[45vw] flex flex-col justify-between  h-screen"
    action=""
   >
    <section>
     <header className="flex flex-col md:flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Experience.
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">Review your experience history.</p>
     <ExperienceList />
    </section>

    <div className="flex flex-row justify-between flex-grow-1 ">
     <button className="rounded-[40px] border-[1px] border-[#98a2b3] px-[57px] h-[46px] text-[20px] font-bold font-lato">
      Back
     </button>
     <button className="rounded-[40px] text-white  bg-primary font-lato px-[24px]">
      Save & Next
     </button>
    </div>
   </section>
   <section className="border-[1px] border-[#d0d5dd] md:w-[45vw]">
    {selectedTemplate ? (
     <img src={selectedTemplate.template} alt={selectedTemplate.name} />
    ) : (
     <p>Select a template to preview here</p>
    )}
   </section>
  </main>
 )
}

export default Experience
