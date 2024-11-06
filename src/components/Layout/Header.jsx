import React from "react"
import LogoBeeCV from "../../assets/LogoBeeCV.svg"
import { Link } from "react-router-dom"

const Header = () => {
 return (
  <header className="bg-white shadow font-lato py-[41px]">
   <div className="container mx-auto flex justify-between items-center">
    <div className="font-openSans font-semibold text-2xl flex-1 leading-[120%]">
     <img src={LogoBeeCV} alt="" />
    </div>
    <ul className="flex-1 flex flex-row gap-[24px] font-semibold font-lato text-[20px] text-[#344054] ">
     <a className="border-b-4 text-primary  border-primary" href="">Dashboard</a>
     <a href="">About </a>
     <a href="">Templates</a>
     <a href="">Pricing</a>
     <a href="">FAQs</a>
    </ul>
    <div className="profileBubble flex-1 flex flex-row justify-end gap-[16px]">
     <p className="font-bold font-lato text-[20px] ">Ozzy Abel</p>
     <img src="" alt="" />
    </div>
   </div>
  </header>
 )
}

export default Header
