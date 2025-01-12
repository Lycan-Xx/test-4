import { Outlet, useLocation } from "react-router-dom"
import SideNav from "./SideNav"
import React from "react"

export default function Layout() {
 const location = useLocation()

 return (
  <main className="flex flex-row">
   <nav className="block ">
    {!location.pathname.startsWith("/create-cv") && <SideNav />}
   </nav>

   <main className="pt-[3%] overflow-x-clip">
    <Outlet />
   </main>
  </main>
 )
}
