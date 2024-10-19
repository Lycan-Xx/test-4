import React from "react"
import AISparkle from "../assets/GreenSparkle.svg"

const Summary = () => {
 return (
  <main>
   <form action="">
    <header className="flex flex-row justify-between">
     <h5 className="font-lato font-bold text-2xl">Professional Summary</h5>
     <div className="flex flex-row text-primary align-middle items-center">
      <img className="text-primary" src={AISparkle} alt="" />
      <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
       Generate Complete CV
      </p>
     </div>
    </header>
   </form>
  </main>
 )
}

export default Summary
