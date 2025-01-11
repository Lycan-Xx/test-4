import { Outlet, useLocation } from "react-router-dom"
import SideNav from "./SideNav"
import React from "react"

export default function Layout() {
 const location = useLocation()

 return (
  <section className="flex flex-col md:flex-row max-w-[100vw] overflow-x-hidden">
   <nav className="block ">
    {!location.pathname.startsWith("/create-cv") && <SideNav />}
   </nav>

   <main className="pt-[3%] pl-8">
    <Outlet />
   </main>
  </section>
 )
}
