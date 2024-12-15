import React, { useState } from "react"
import { useNavContext } from "../../context/NavContext"
import DoubleArrowRight from "../../assets/DoubleArrowRight.svg"
import logo from "../../assets/LogoBeeCV.svg"
import { PiCaretDoubleLeftThin, PiCaretDoubleRightThin } from "react-icons/pi"
import { links } from "../../data/data"
import { Link } from "react-router-dom"

const SideNav = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(true)
 const { activePage, setActivePage } = useNavContext()

 const handleNavClick = (id) => {
  setActivePage(id)
 }

 return (
  <aside
   className={`${
    isSidebarOpen ? "sidebar show-sidebar w-[30vw]" : "sidebar"
   } h-[100vh] flex flex-col justify-between items-center pt-[5%] font-poppins text-[20px] font-medium text-gray-700 gap-[101px] mt-0`}
  >
   <div className="">
    <button
     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
     className="close-btn"
    >
     {isSidebarOpen ? "" : <PiCaretDoubleRightThin size={40} />}
    </button>
    <div className="flex flex-row justify-between">
     <img src={logo} className="logo" alt="Logo" />
     <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      {isSidebarOpen ? <PiCaretDoubleLeftThin size={40} /> : ""}
     </button>
    </div>
   </div>

   {/* First set of links */}
   <ul className="links flex flex-col gap-[24px]">
    {links.slice(0, 2).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li
       className={`gap-2 flex flex-row justify-center items-center rounded-full ${
        activePage === id
         ? "border-primary px-6 border-[1px] bg-primary bg-opacity-15 py-2 text-primary"
         : ""
       }`}
       key={id}
       onClick={() => handleNavClick(id)}
      >
       <Link
        className="flex flex-row h-[100%] items-center justify-center mx-auto"
        to={url}
       >
        <img src={icon} alt={text} />
        {isSidebarOpen ? <p>{text}</p> : ""}
       </Link>
      </li>
     )
    })}
   </ul>

   {/* Second set of links */}
   <ul className="links gap-[24px] flex flex-col">
    {links.slice(2, 5).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li
       className={`flex flex-row justify-center items-center rounded-[40px] gap-[10px] ${
        activePage === id ? "bg-activeLink border-primary border-[1px]" : ""
       } ${id === 5 ? "bg-primary text-white md:px-[40px] md:py-[16px]" : ""}`}
       key={id}
       onClick={() => handleNavClick(id)}
      >
       <Link
        className="flex flex-row items-center justify-start mx-auto"
        to={url}
       >
        <img
         className="mr-[8px] max-w-[56px] max-h-[56px]"
         src={icon}
         alt={text}
        />
        {isSidebarOpen ? <p>{text}</p> : ""}
       </Link>
      </li>
     )
    })}
   </ul>

   {/* Third set of links */}
   <ul className="links">
    {links.slice(5, 7).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li
       className={`gap-2 flex flex-row justify-center items-center rounded-full ${
        activePage === id ? "border-primary border-[1px] bg-activeLink" : ""
       }`}
       key={id}
       onClick={() => handleNavClick(id)}
      >
       <Link
        className="flex flex-row h-[100%] items-center justify-center mx-auto"
        href={url}
       >
        <img src={icon} alt={text} />
        {isSidebarOpen ? <p>{text}</p> : ""}
       </Link>
      </li>
     )
    })}
   </ul>
  </aside>
 )
}

export default SideNav
