import React, { useState } from "react"
import { useNavContext } from "../../context/NavContext"
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
   className={` hidden md:flex h-[100vh] flex-col justify-between items-center font-poppins text-[20px] font-medium text-gray-700 gap-[99px] mt-0 transition-all duration-300 ease-in-out  ${
    isSidebarOpen ? "sidebar-open md:w-[320px]" : "sidebar-closed w-[119px]"
   } `}
  >
   <div
    className={`flex  w-full  items-center justify-center mt-[80px] px-[32px]  ${
     isSidebarOpen
      ? " justify-between  md:w-[300px] flex-row-reverse"
      : " justify-center flex-col"
    }`}
   >
    <button
     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
     className="close-btn"
    >
     {isSidebarOpen ? (
      <PiCaretDoubleLeftThin size={40} />
     ) : (
      <PiCaretDoubleRightThin size={40} />
     )}
    </button>
    <img src={logo} className="logo" alt="Logo" />
   </div>

   {/* First set of links */}
   <ul className="flex flex-col gap-[24px] max-w-[256px]">
    {links.slice(0, 2).map((link) => {
     const { id, url, text, icon } = link
     const isActive = activePage === id
     return (
      <Link
       className="flex flex-row items-center justify-center h-[46px] "
       key={id}
       onClick={() => handleNavClick(id)}
       to={url}
      >
       <li
        className={`gap-2 flex flex-row justify-center items-center rounded-full ${
         isActive
          ? `border-primary border-[1px] bg-primary bg-opacity-15 text-primary ${
             isSidebarOpen ? "px-[50px] py-[12px]" : "px-[10px] py-[10px]"
            }`
          : ""
        } 
  ${isSidebarOpen ? "" : "px-[10px] py-[10px]"}
  `}
       >
        {typeof icon === "string" ? (
         <img className="h-[33px]" src={icon} alt={`${text} icon`} />
        ) : (
         React.createElement(icon, { size: 33 })
        )}
        {isSidebarOpen ? <p>{text}</p> : ""}
       </li>
      </Link>
     )
    })}
   </ul>

   {/* Second set of links */}
   <ul className="gap-[24px] flex flex-col items-center w-full max-w-[256px]">
    {links.slice(2, 6).map((link) => {
     const { id, url, text, icon } = link
     const isActive = activePage === id

     return (
      <Link
       key={id}
       onClick={() => handleNavClick(id)}
       className="flex flex-row items-center justify-center h-[46px] w-full"
       to={url}
      >
       <li
        className={`gap-2 flex flex-row justify-center items-center rounded-full ${
         isActive
          ? `border-primary border-[1px] bg-primary bg-opacity-15  text-primary ${
             isSidebarOpen ? "px-[50px] py-[12px]" : "px-[10px] py-[10px]"
            } `
          : ""
        } 
                ${isSidebarOpen ? "" : "px-[10px] py-[10px]"}

             ${id === 6 ? "bg-primary text-white  py-[12px]" : ""}`}
       >
        {typeof icon === "string" ? (
         <img className="h-[33px]" src={icon} alt={`${text} icon`} />
        ) : (
         React.createElement(icon, { size: 33 })
        )}{" "}
        {isSidebarOpen ? <p>{text}</p> : ""}
       </li>
      </Link>
     )
    })}
   </ul>

   {/* Third set of links */}
   <ul className=" max-w-[256px] flex">
    {links.slice(6, 7).map((link) => {
     const { id, url, text, icon } = link
     const isActive = activePage === id

     return (
      <Link
       className="flex flex-row items-center justify-center h-[46px] w-full"
       href={url}
      >
       <li
        className={`gap-2 flex flex-row justify-center items-center rounded-full ${
         isActive
          ? `border-primary border-[1px] bg-primary bg-opacity-15  text-primary ${
             isSidebarOpen ? "px-[50px] py-[12px]" : "px-[10px] py-[10px]"
            } `
          : ""
        } 
                ${isSidebarOpen ? "" : "px-[10px] py-[10px]"}
`}
        key={id}
        onClick={() => handleNavClick(id)}
       >
        {typeof icon === "string" ? (
         <img className="h-[33px]" src={icon} alt={`${text} icon`} />
        ) : (
         React.createElement(icon, { size: 33 })
        )}{" "}
        {isSidebarOpen ? <p>{text}</p> : ""}
       </li>
      </Link>
     )
    })}
   </ul>
  </aside>
 )
}

export default SideNav
