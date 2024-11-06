import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import SideNav from "./SideNav"

export default function Layout() {
 const location = useLocation()

 return (
  <section className="flex flex-row">
   {!location.pathname.startsWith("/create-cv") && <SideNav />}

   <main>
    <Outlet />
   </main>
  </section>
 )
}
