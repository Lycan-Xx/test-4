import { Outlet, useLocation } from "react-router-dom"
import React from "react"
import Header from "./Header.tsx"

export default function Layout() {
 return (
  <main className="flex flex-col min-h-screen w-full">   
    <Header className="fixed top-0 left-0 right-0 z-50" />
    <div className="flex-grow pt-[100px]"> {/* Add padding-top to account for fixed header */}
      <Outlet />
    </div>
  </main>
 )
}
