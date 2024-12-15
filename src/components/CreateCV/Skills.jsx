import React from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import { useTemplate } from "../../context/TemplateContext"

const Skills = () => {
 const { selectedTemplate } = useTemplate()

 return (
  <main className="flex flex-col md:flex-row gap-[50px] md:gap-[130px] w-full justify-center px-[10vw]">
   <section
    className="md:w-[50vw]  flex flex-col justify-between  h-screen"
    action=""
   >
    <section>
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Skills.
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">Highlight 8 - 10 of your top skills.</p>
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
   <section className="border-[1px] border-[#d0d5dd] md:h-[100vh] md:w-[45vw]">
    {selectedTemplate ? (
     <img
      className="object-cover md:h-[100vh]"
      src={selectedTemplate.template}
      alt={selectedTemplate.name}
     />
    ) : (
     <p>Select a template to preview here</p>
    )}
   </section>
  </main>
 )
}

export default Skills
