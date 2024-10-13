import React from "react"
import DoubleArrowRight from "../assets/DoubleArrowRight.svg"
import LogoBeeCV from "../assets/LogoBeeCV.svg"
import DashboardIcon from "../assets/DashboardIcon.svg"
import SettingsIcon from "../assets/SettingsIcon.svg"
import LogOutIcon from "../assets/LogOutIcon.svg"
import crown from "../assets/crown.svg"
import ProfilePic from "../assets/X.svg"

const SideNav = () => {
 return (
  <nav className="flex flex-col px-[30px]">
   <header className="flex flex-col gap-[19px] mt-[32px ]">
    <img src={DoubleArrowRight} alt="" />
    <div className="font-openSans font-semibold text-2xl flex-1 leading-[120%]">
     <img src={LogoBeeCV} alt="" />
    </div>
   </header>
   <img src={DashboardIcon} alt="" />
   <img src={SettingsIcon} alt="" />
   <img src={ProfilePic} alt="" />
   <img src={crown} alt="" />
   <img src={LogOutIcon} alt="" />
  </nav>
 )
}

export default SideNav
