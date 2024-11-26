import React from "react"
import Crown from "../assets/crown.svg"

const AccountStatus = ({ heading, subtitle, button, bgColor }) => {
 return (
  <div
   className={`rounded-[16px] py-[24px] px-[32px] flex flex-col mx-auto justify-center align-middle w-full ${
    bgColor || "bg-gray-50"
   }`}
  >
   <h5 className="text-2xl font-bold leading-[150%] font-lato">{heading}</h5>
   <p className="font-poppins text-xl font-light text-gray-600 lg:w-[1064px]">
    {subtitle}
   </p>
   {button && (
    <div className="flex w-[100%] justify-end">
     <button className="md:w-[260px] md:h-[68px] rounded-[40px] bg-primary flex flex-row justify-center items-center">
      <img className="w-[24px] h-[24px]" src={Crown} alt="" />
      <p className="text-white text-[24px] font-bold ml-[8px] font-lato">
       Upgrade Now
      </p>
     </button>
    </div>
   )}
  </div>
 )
}

export default AccountStatus
