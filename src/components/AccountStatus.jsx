import React from "react"
import Crown from "../assets/crown.svg"

const AccountStatus = ({ heading, subtitle, button, bgColor }) => {
 return (
  <div
   className={`rounded-[16px] p-[1rem] lg:py-[24px] lg:px-[32px] flex flex-col mx-auto justify-center gap-y-[6px] align-middle w-full ${
    bgColor || "bg-gray-50"
   }`}
  >
   <h5 className="text-[20px] lg:text-2xl font-bold leading-[150%] font-lato">
    {heading}
   </h5>
   <p className="font-poppins lg:text-xl font-light text-gray-600 lg:w-[1064px] text-sm">
    {subtitle}
   </p>
   {button && (
    <div className="flex w-[100%] justify-end">
     <button className="md:w-[260px] md:h-[68px] rounded-[40px] bg-primary flex flex-row justify-center items-center py-[8.5px] px-[24px] ">
      <img className="w-[24px] h-[24px]" src={Crown} alt="" />
      <p className="text-white font-poppins text-[14px] md:text-[24px] font-light  md:font-bold ml-[8px]">
       Upgrade Now
      </p>
     </button>
    </div>
   )}
  </div>
 )
}

export default AccountStatus
