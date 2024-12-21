import React from "react"
import { CiCirclePlus } from "react-icons/ci"
import { Link } from "react-router-dom"

const HomepageCVs = () => {
 return (
  <article className="flex md:flex-row gap-[32px] items-center py-[32px] border-b-2">
   <div className="w-[138px] h-[190px] md:w-[276px] md:h-[380px] rounded-lg border-gray-300 border-[0.5px] flex items-center align-middle justify-center  ">
    <Link to={"/templates"}>
     <CiCirclePlus className="hover:text-white cursor-pointer text-gray-300 hover:bg-primary rounded-full text-[70px]" />{" "}
    </Link>
   </div>
   <div className="flex flex-col w-[188px] md:w-[284px]">
    <h4 className="text-greytextlight font-bold leading-[150%] font-lato text-[16px] whitespace-nowrap my-[16px] md:my-0">
     Create New CV
    </h4>
    <p className="font-poppins font-light md:text-base text-greytext leading-[150%] text-sm">
     For each job application, create a unique résumé. Increase your chances of
     employment!
    </p>
   </div>
  </article>
 )
}

export default HomepageCVs
