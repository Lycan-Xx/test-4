import React from "react"
import { Link, useLocation } from "react-router-dom"
import DownloadIcon from "../../assets/DownloadIcon.svg"

const CreateCVNav = () => {
 const location = useLocation()

 const CVLinks = [
  {
   id: 1,
   text: "Personal Details",
   link: "personal-details",
  },
  {
   id: 2,
   text: "Summary",
   link: "summary",
  },
  {
   id: 3,
   text: "Experience",
   link: "experience",
  },
  {
   id: 4,
   text: "Education",
   link: "education",
  },
  {
   id: 5,
   text: "Skills",
   link: "skills",
  },
 ]

 return (
  <main className="flex flex-col md:flex-row justify-between my-[30px] mx-auto w-full md:px-[10vw]">
   <nav className="flex flex-row md:gap-[6px] justify-between">
    {CVLinks.map((links) => {
     const { id, text, link } = links
     const isActive = location.pathname === link
     return (
      <Link to={link} key={id}>
       <p
        className={`flex text-wrap whitespace-nowrap rounded-[26px] border-[1px] border-gray-300 justify-center items-center md:py-[8px] md:px-[25px] md:text-base text-gray-700 md:font-medium ${
         isActive ? "bg-[#fbe2b7]" : "bg-gray-100"
        }`}
       >
        {text}
       </p>
      </Link>
     )
    })}
   </nav>
   <button className="py-[6px] px-[20.5px] text-base whitespace-nowrap  rounded-[20px] bg-primary flex flex-row justify-center items-center">
    <img className="w-[12px] h-[12px]" src={DownloadIcon} alt="" />
    <p className="text-white text-[15px] font-bold ml-[8px] font-lato">
     Import LinkedIn
    </p>
   </button>
  </main>
 )
}

export default CreateCVNav
