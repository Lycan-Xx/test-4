import React, { useState } from "react"
import DoubleArrowRight from "../../assets/DoubleArrowRight.svg"
import logo from "../../assets/LogoBeeCV.svg"
// import { useGlobalContext } from "../context.jsx"

import { links } from "../../data/data"

const SideNav = () => {
 //  const { isSidebarOpen, closeSidebar } = useGlobalContext()

 const [isSidebarOpen, setIsSidebarOpen] = useState(false)

 //  const closeSidebar = () => {
 //   setIsSidebarOpen(false)
 //  }

 return (
  <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
   <div className="sidebar-header">
    <img src={logo} className="logo" alt="" />
    <button className="close-btn">
     <img src={DoubleArrowRight} alt="" />
    </button>
   </div>
   <ul className="links">
    {links.slice(0, 2).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li key={id + 1}>
       <a
        className="flex flex-row h-[100%] items-center justify-center w-[100%] mx-auto "
        href={url}
       >
        <img src={icon} alt="" />
        {text}
       </a>
      </li>
     )
    })}
   </ul>
   <ul className="links">
    {links.slice(2, 5).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li key={id + 3}>
       <a
        className="flex flex-row h-[100%] items-center justify-center w-[100%] mx-auto "
        href={url}
       >
        <img src={icon} alt="" />
        {text}
       </a>
      </li>
     )
    })}
   </ul>
   <ul className="links">
    {links.slice(5, 6).map((link) => {
     const { id, url, text, icon } = link
     return (
      <li key={6}>
       <a
        className="flex flex-row h-[100%] items-center justify-center w-[100%] mx-auto "
        href={url}
       >
        <img src={icon} alt="" />
        {text}
       </a>
      </li>
     )
    })}
   </ul>
  </aside>
 )
}

export default SideNav
