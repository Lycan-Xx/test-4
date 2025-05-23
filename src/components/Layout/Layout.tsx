import { Outlet, useLocation } from "react-router-dom"
import React from "react"

export default function Layout() {
 const location = useLocation()

 return (
  <main className="flex flex-row">   

   <main className="pt-[3%] overflow-x-clip">
    <Outlet />
   </main>
  </main>
 )
}
