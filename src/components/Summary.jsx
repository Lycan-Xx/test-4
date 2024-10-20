import React, { useState } from "react"
import AISparkle from "../assets/GreenSparkle.svg"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const Summary = () => {
 const [value, setValue] = useState("")

 return (
  <main className="flex flex-col md:flex-row gap-[50px] md:gap-[130px] w-full justify-center">
   <section>
    <form className="w-[38vw]" action="">
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Professional Summary
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">Give a summary on your professional career.</p>
    </form>
    {/*  */}
    <section className="text-input relative mb-[60px]">
     <ReactQuill
      className="rounded-[16px] h-[20vh]"
      theme="snow"
      value={value}
      onChange={setValue}
     />
     <div className="flex flex-row text-primary align-middle items-center absolute right-0 bottom-1">
      <img className="text-primary" src={AISparkle} alt="" />
      <p className="whitespace-nowrap  border-b-primary border-b-[1px] text-xs font-bold">
       Generate
      </p>
     </div>
    </section>
    <div className="flex flex-row justify-between  ">
     <button className="rounded-[40px] border-[1px] border-[#98a2b3] px-[57px] h-[46px] text-[20px] font-bold font-lato">
      Back
     </button>
     <button className="rounded-[40px] text-white  bg-primary font-lato px-[24px]">
      Save & Next
     </button>
    </div>
   </section>
   <section className="border-[1px] border-[#d0d5dd] w-[595px]"></section>
  </main>
 )
}

export default Summary
