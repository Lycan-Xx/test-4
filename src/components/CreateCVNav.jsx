import React from "react"
import { Link, useLocation } from "react-router-dom"
import DownloadIcon from "../assets/DownloadIcon.svg"

const CreateCVNav = () => {
 const location = useLocation()

 const CVLinks = [
  {
   id: 1,
   text: "Personal Details",
   link: "/personal-details",
  },
  {
   id: 2,
   text: "Summary",
   link: "/summary",
  },
  {
   id: 3,
   text: "Experience",
   link: "/experience",
  },
  {
   id: 4,
   text: "Education",
   link: "/education",
  },
  {
   id: 5,
   text: "Skills",
   link: "/skills",
  },
 ]

 return (
  <main className="flex flex-row justify-between w-full">
   <nav className="flex flex-row gap-[12px]">
    {CVLinks.map((links) => {
     const { id, text, link } = links
     const isActive = location.pathname === link
     return (
      <Link to={link} key={id}>
       <p
        className={`flex whitespace-nowrap rounded-[26px] border-[1px] border-gray-300 justify-center items-center py-[12px] px-[40.5px] text-base text-gray-700 font-medium ${
         isActive ? "bg-[#fbe2b7]" : "bg-gray-100"
        }`}
       >
        {text}
       </p>
      </Link>
     )
    })}
   </nav>
   <button className="md:w-[260px] md:h-[48px] rounded-[40px] bg-primary flex flex-row justify-center items-center">
    <img className="w-[24px] h-[24px]" src={DownloadIcon} alt="" />
    <p className="text-white text-[20px] font-bold ml-[8px] font-lato">
     Import LinkedIn
    </p>
   </button>
  </main>
 )
}

export default CreateCVNav
