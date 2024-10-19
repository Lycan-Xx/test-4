import { useState } from "react"
import { Link } from "react-router-dom"
import DownloadIcon from "../assets/DownloadIcon.svg"

const CreateCVNav = () => {
 const CVLinks = [
  {
   id: 1,
   text: "Personal Details",
   link: "/personal-Details",
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

 const [activeBtn, setActiveBtn] = useState(false)

 const handleLinkClick = (btn) => {
  setActiveBtn(btn)
 }

 return (
  <main className="flex flex-row justify-between w-full">
   <nav className="flex flex-row gap-[12px]">
    {CVLinks.map((links) => {
     const { id, text, link } = links
     return (
      <p
       onClick={handleLinkClick}
       className={`flex rounded-[26px] border-[1px] border-gray-300 justify-center items-center py-[12px] px-[40.5px] text-base text-gray-700 font-medium ${
        activeBtn ? "bg-gray-200" : "bg-gray-100"
       }`}
       key={id}
       to={link}
      >
       {text}
      </p>
     )
    })}
   </nav>
   <button className="md:w-[260px] md:h-[68px] rounded-[40px]  bg-primary flex flex-row justify-center items-center">
    <img className="w-[24px] h-[24px]" src={DownloadIcon} alt="" />
    <p className="text-white text-[24px] font-bold ml-[8px] font-lato">
     {" "}
     Import LinkedIn{" "}
    </p>
   </button>{" "}
  </main>
 )
}

export default CreateCVNav
