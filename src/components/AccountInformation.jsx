import React from "react"
import AccountStatus from "./AccountStatus"
import ProfilePic from "../assets/PersonalDetailsProfilePic.jpg"
import ProfileCamera from "../assets/ProfileCamera.svg"
import { Link } from "react-router-dom"

const AccountInformation = () => {
 return (
  <main className="flex flex-col justify-center align-middle items-center w-full">
   <AccountStatus
    heading={"Account Information"}
    subtitle={"Edit your account information"}
    button={false}
   />
   <form
    className="flex flex-col items-start justify-start w-full gap-[24px]"
    action=""
   >
    <div className="relative">
     <img className="relative h-[200px] w-[200px]" src={ProfilePic} alt="" />
     <img
      className="absolute bottom-[1rem] right-[1rem]"
      src={ProfileCamera}
      alt=""
     />
    </div>
    <div className="flex flex-col md:flex-row w-full gap-[16px]">
     <input
      className="rounded-[40px] h-12 input"
      type="text"
      placeholder="First Name"
     />
     <input
      className="rounded-[40px] h-12 input "
      type="text"
      placeholder="Last Name"
     />
    </div>
    <div className="w-full">
     <input
      className="rounded-[40px] h-12 input"
      type="text"
      placeholder="Ozzyabel@gmail.com"
     />
    </div>
    <Link className="text-primary font-bold cursor-pointer flex text-right justify-end items-end w-full leading-[150%] font-lato text-xl">
     Save Changes
    </Link>
   </form>
  </main>
 )
}

export default AccountInformation
