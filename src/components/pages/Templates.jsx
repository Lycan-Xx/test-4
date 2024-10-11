import React, { useState } from "react"
import TopRatedTemplates from "../TopRatedTemplates"
import { AllTemplates } from "../../data/templates"
import PremiumCrown from "../../assets/PremiumCrown.svg"

const Templates = () => {
 const [activeCV, setActiveCV] = useState("All")

 const handleButtonClick = (btn) => {
  setActiveCV(btn)
 }

 const filteredTemplates = AllTemplates.filter((item) => {
  if (activeCV === "All") return true
  if (activeCV === "Free") return !item.premium
  if (activeCV === "Premium") return item.premium
  return true
 })

 return (
  <section className="flex flex-col">
   <header>
    <div className="flex flex-col">
     <h4 className="font-bold text-[40px]">Templates.</h4>
     <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
      Choose one of these templates to build your CV.
     </p>
    </div>
   </header>
   <article className="flex flex-col bg-gray-100 mt-[32px] rounded-2xl py-[24px] px-[32px]">
    <header className="flex flex-row w-full justify-between pb-4">
     <h5 className="text-[24px] font-bold">Choose from top rated templates.</h5>
     {/* <i className="flex flex-row items-center text-primary gap-1 hover:cursor-pointer">
      View all <HiArrowRight />{" "}
     </i> */}
    </header>
    <TopRatedTemplates />
   </article>{" "}
   {/* All Free Premuim Templates  */}
   <section className="flex flex-col gap-6">
    <header className="flex flex-row gap-3">
     <button onClick={() => handleButtonClick("All")}>All</button>
     <button onClick={() => handleButtonClick("Free")}>Free</button>
     <button onClick={() => handleButtonClick("Premium")}>Premium</button>{" "}
    </header>
    <section className=" grid grid-cols-4 gap-16">
     {filteredTemplates.map((item) => {
      return (
       <div className="relative" key={item.id}>
        <img key={item.id} src={item.template} alt="" />
        {item.premium && (
         <img className="absolute top-0 left-0" src={PremiumCrown} alt="" />
        )}
       </div>
      )
     })}
    </section>
   </section>
  </section>
 )
}

export default Templates
