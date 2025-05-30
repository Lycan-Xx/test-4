import { Outlet, useLocation } from "react-router-dom"
import React, { useEffect } from "react"
import Header from "./Header.tsx"

export default function Layout() {
 const location = useLocation();

 useEffect(() => {
   // Reset scroll position when navigating to new routes (except hash changes)
   if (!location.hash) {
     window.scrollTo(0, 0);
   }
 }, [location.pathname]);

 return (
  <main className="flex flex-col min-h-screen w-full">   
    <Header className="fixed top-0 left-0 right-0 z-50" />
    <div className="flex-grow pt-[100px]" id="top-container"> {/* Add padding-top to account for fixed header */}
      <Outlet />
    </div>
  </main>
 )
}
