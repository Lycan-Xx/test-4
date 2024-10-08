import React, { useState } from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const CoverLetter = () => {
 const [value, setValue] = useState("")

 return (
  <main className="flex flex-row gap-[130px]">
   <section>
    <header className="flex flex-row mx-auto justify-between w-full mb-[48px]">
     <div className="flex flex-col">
      <h4 className="font-bold text-[40px] leading-[130%]">
       Generate Cover Letter
      </h4>
      <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
       Write a cover letter and let the AI help make it better.
      </p>
     </div>
    </header>
    <form action="">
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl">Personal details</h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary " src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">
      How do you want your employers to get in touch with you?
     </p>
     {/* Name Input */}
     <section className="inputs-container w-full">
      <div className="upper-input-container">
       <div className="input-container">
        <h5 className="input-heading pt-10">First Name</h5>
        <input
         className="input rounded-[40px] h-12"
         type="text"
         placeholder="First Name"
        />
       </div>
       <div className="input-container">
        <h5 className="input-heading pt-10">Last Name</h5>
        <input
         className="input rounded-[40px] h-12"
         type="text"
         placeholder="Last Name"
        />
       </div>
      </div>
      <div className="input-container pt-6">
       <h5 className="input-heading">Email Address</h5>
       <input className="input h-[48px] rounded-[40px] " type="text" />
      </div>
      <div className="input-container pt-6">
       <h5 className="input-heading">Phone Number</h5>
       <input className="input h-[48px] rounded-[40px] " type="number" />
      </div>
     </section>
    </form>
    {/*  */}
    <section className="text-input">
     <header class Name="flex flex-col justify-between">
      <h5 className="font-lato font-bold text-2xl mt-8">
       Cover Letter Details.
      </h5>
      <p className="normal-text">Write your cover letter.</p>
     </header>
     <ReactQuill
      className="rounded-[16px]"
      theme="snow"
      value={value}
      onChange={setValue}
     />
    </section>
    <div className="flex flex-row justify-between mt-[24px]">
     <button className="rounded-[40px] border-[1px] border-[#98a2b3] px-[57px] h-[46px] text-[20px] font-bold font-lato">
      Back
     </button>
     <button className="rounded-[40px] text-white  bg-primary font-lato px-[24px]">
      Save & Download
     </button>
    </div>
   </section>
   <section className="border-[1px] border-blue-300 w-[595px]"></section>
  </main>
 )
}

export default CoverLetter
