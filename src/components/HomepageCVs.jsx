import React from 'react'
import PlusCircle from "../assets/PlusCircle.svg"


const HomepageCVs = () => {
  return (
   <article className="flex md:flex-row gap-[32px] items-center md:py-[32px] border-b-2">
    <div className="md:w-[276px] md:h-[380px] rounded-lg border-gray-300 border-[0.5px] flex items-center align-middle justify-center ">
     <img className="hover:bg-primary" src={PlusCircle} alt="" />{" "}
    </div>
    <div className="flex flex-col md:w-[284px]">
     <h4 className="text-greytextlight font-bold leading-[150%] font-lato">
      Create New CV
     </h4>
     <p className="font-poppins font-light text-base text-greytext leading-[150%]">
      For each job application, create a unique résumé. Increase your chances of
      employment!
     </p>
    </div>
   </article>
  )
}

export default HomepageCVs