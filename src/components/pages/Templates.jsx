import React from "react"
import TopRatedTemplates from "../TopRatedTemplates"

const Templates = () => {
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
     
  </section>
 )
}

export default Templates
