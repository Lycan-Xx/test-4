import { Outlet, useLocation } from "react-router-dom"
import SideNav from "./SideNav"

export default function Layout() {
 const location = useLocation()

 return (
  <section className="flex flex-row max-w-[100vw] overflow-x-hidden">
   {!location.pathname.startsWith("/create-cv") && <SideNav />}

   <main className="pt-[3%] md:pl-8 md:pr-[152px]">
    <Outlet />
   </main>
  </section>
 )
}
