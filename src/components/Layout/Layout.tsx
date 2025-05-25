import { Outlet, useLocation } from "react-router-dom"
import React from "react"
import Header from "./Header"

export default function Layout() {
 const location = useLocation()

 return (
  <main className="flex flex-col min-h-screen w-full">   
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
  </main>
 )
}
