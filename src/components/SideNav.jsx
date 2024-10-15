import React, { useState } from "react"
import DoubleArrowRight from "../assets/DoubleArrowRight.svg"
import logo from "../assets/LogoBeeCV.svg"
import DashboardIcon from "../assets/DashboardIcon.svg"
import SettingsIcon from "../assets/SettingsIcon.svg"
import LogOutIcon from "../assets/LogOutIcon.svg"
import crown from "../assets/crown.svg"
import ProfilePic from "../assets/X.svg"
// import { useGlobalContext } from "./context";

const SideNav = () => {
 const [collapsed, setCollapsed] = useState(true)

 const handleArrowClick = () => {
  setCollapsed(!collapsed)
 }

 return (
  <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
   <div className="sidebar-header">
    <img src={logo} className="logo" alt="coding addict" />
    <button className="close-btn" onClick={closeSidebar}>
     <FaTimes />
    </button>
   </div>
   <ul className="links">
    {links.map((link) => {
     const { id, url, text, icon } = link
     return (
      <li key={id}>
       <a href={url}>
        {icon}
        {text}
       </a>
      </li>
     )
    })}
   </ul>
   <ul className="social-icons">
    {social.map((link) => {
     const { id, url, icon } = link
     return (
      <li key={id}>
       <a href={url}>{icon}</a>
      </li>
     )
    })}
   </ul>
  </aside>
 )
}

export default SideNav
