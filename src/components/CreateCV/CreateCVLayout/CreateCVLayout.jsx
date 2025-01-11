import React from "react"
import { Outlet } from "react-router-dom"
import CreateCVNav from "../CreateCVNav"

const CreateCVLayout = ({ showSideNav = false }) => {
 return (
  <main className="flex flex-col justify-center items-center bg-slate-300 w-full h-full">
   <CreateCVNav />
   <Outlet />
  </main>
 )
}

export default CreateCVLayout
