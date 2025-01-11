import React from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import ExperienceList from "./ExperienceList"
import { useContext } from "react"
import { TemplateContext } from "../../context/TemplateContext"

const Education = () => {
 const { selectedTemplate } = useContext(TemplateContext)
 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:flex-row gap-[50px] md:gap-[130px] w-full justify-center"
  >
   <section
    className="md:w-[50vw] flex flex-col justify-between h-screen"
    action=""
   >
    <section>
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Education.
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">Review your education history.</p>
     <ExperienceList
      placeholder1="Course of Study"
      placeholder2="School Name - (Year of Graduation)"
      placeholder3="Grade(GPA)"
      addButtonText="Add Education"
     />
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
   {selectedTemplate ? (
    <img
     className="h-[100vh] w-full"
     src={selectedTemplate.template}
     alt={selectedTemplate.name}
    />
   ) : (
    <p>Select a template to preview here</p>
   )}
  </main>
 )
}

export default Education
