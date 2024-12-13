import React from "react"
import { Outlet } from "react-router-dom"
import CreateCVNav from "../CreateCVNav"

const CreateCVLayout = ({ showSideNav = false }) => {
 return (
  <main className="w-screen flex flex-col mx-auto justify-center items-center ">
   <CreateCVNav />
   <Outlet />
  </main>
 )
}

export default CreateCVLayout
