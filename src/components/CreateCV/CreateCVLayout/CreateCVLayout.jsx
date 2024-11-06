import React from "react"
import { Outlet } from "react-router-dom"
import CreateCVNav from "../CreateCVNav"

const CreateCVLayout = ({ showSideNav = false}) => {
 return (
  <div>
   <CreateCVNav
   />
   <Outlet />
  </div>
 )
}

export default CreateCVLayout
