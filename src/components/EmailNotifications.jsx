import { useState } from "react"
import { Switch } from "@mui/material"
import AccountStatus from "./AccountStatus"

const EmailNotifications = () => {
 const [isUpdateOn, setIsUpdateOn] = useState(false)
 const [isNewsLetterOn, setIsNewsLetterOn] = useState(false)

 const handleUpdateToggle = () => {
  setIsUpdateOn(!isUpdateOn)
 }

 const handleNewsLetterToggle = () => {
  setIsNewsLetterOn(!isNewsLetterOn)
 }

 return (
  <main className="flex flex-col border-[1px] border-gray-300 border-dashed rounded-[16px] my-[40px]">
   <AccountStatus
    heading={"Email Notification."}
    subtitle={"Add/Remove your social accounts."}
    button={false}
    bgColor="bg-white"
   />
   <div className=" py-[24px] px-[32px] flex flex-col mx-auto justify-center align-middle w-full">
    <div className="flex flex-row justify-between items-center align-middle border-b-[1px] border-gray-300 pb-[28px]">
     <div className="flex flex-col gap-[10px]">
      <h6 className="font-medium font-poppins text-[20px] text-gray-800">
       Update & Offers
      </h6>
      <p className="text-gray-500 font-lato font-light text-sm lg:text-base">
       New features special deals, discounts and more
      </p>
     </div>
     <Switch checked={isUpdateOn} onChange={handleUpdateToggle} />
    </div>
    <div className="flex flex-row justify-between items-center align-middle pt-[28px]">
     <div className="flex flex-col gap-[10px]">
      <h6 className="font-medium font-poppins text-[20px] text-gray-800">
       Newsletters
      </h6>
      <p className="text-gray-500 font-lato font-light text-sm lg:text-base">
       Useful resume & job tips
      </p>
     </div>
     <Switch checked={isNewsLetterOn} onChange={handleNewsLetterToggle} />
    </div>
   </div>
  </main>
 )
}

export default EmailNotifications
