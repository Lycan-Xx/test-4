import React from "react"
import AISparkle from "../assets/GreenSparkle.svg"
import ExperienceList from "./ExperienceList"

const Experience = () => {
 return (
  <main className="flex flex-row justify-between align-middle">
   <section className="w-[38vw]" action="">
    <header className="flex flex-row justify-between">
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
   <section className="border-[1px] border-[#d0d5dd] w-[45vw]"></section>
  </main>
 )
}

export default Experience
