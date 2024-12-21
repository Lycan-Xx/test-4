import React from "react"
import { CiCirclePlus } from "react-icons/ci"

const HomepageCls = () => {
 return (
  <article className="flex md:flex-row gap-[32px] items-center md:py-[32px] border-b-2">
   <div className="md:w-[276px] md:h-[380px] rounded-lg border-gray-300 border-[0.5px] flex items-center align-middle justify-center  ">
    <CiCirclePlus className="hover:text-white text-gray-300 hover:bg-primary rounded-full text-[70px]" />{" "}
   </div>
   <div className="flex flex-col md:w-[284px]">
    <h4 className="text-greytextlight font-bold leading-[150%] font-lato">
     Generate your Cover Letter
    </h4>
    <p className="font-poppins font-light text-base text-greytext leading-[150%]">
     Stand out from competition with a compelling cover letter that showcases
     your unique qualifications
    </p>
   </div>
  </article>
 )
}

export default HomepageCls
