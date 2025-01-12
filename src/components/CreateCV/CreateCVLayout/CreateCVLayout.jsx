import React from "react"
import { Outlet } from "react-router-dom"
import CreateCVNav from "../CreateCVNav"

const CreateCVLayout = ({ showSideNav = false }) => {
 return (
  <main className="w-screen ">
   <div className="flex flex-col mx-auto md:px-[50px] lg:px-[152px]">
    <CreateCVNav />
    <Outlet />
   </div>
  </main>
 )
}

export default CreateCVLayout
