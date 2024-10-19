import React, { useState } from "react"
import AISparkle from "../assets/GreenSparkle.svg"
import ReactQuill from "react-quill"
import ProfilePic from "../assets/PersonalDetailsProfilePic.jpg"
import CameraIcon from "../assets/CameraIcon.svg"
// import "react-quill/dist/quill.snow.css"

const PersonalDetails = () => {
 const [value, setValue] = useState("")

 return (
  <main className="flex flex-col md:flex-row gap-[50px] md:gap-[130px] w-full justify-center">
   <section>
    {/* <header className="flex flex-row mx-auto justify-between w-full mb-[48px]">
     <div className="flex flex-col">
      <h4 className="font-bold text-[40px] leading-[130%]">
       Personal Details.
      </h4>
      <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
      How do you want your employers to get in touch with you?
      </p>
     </div>
    </header> */}
    <form action="">
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl">Personal details</h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Complete CV
       </p>
      </div>
     </header>
     <p className="normal-text">
      How do you want your employers to get in touch with you?
     </p>
     {/* Name Input */}
     <section className="inputs-container w-full">
      <div className="input-container pt-6">
       <h5 className="input-heading">Job Title</h5>
       <input
        className="input h-[48px] rounded-[40px] "
        type="number"
        placeholder="Product Designer"
       />
      </div>
      <div className="relative mt-[16px] w-[99px] h-[99px] ">
       <img className="relative" src={ProfilePic} alt="" />
       <img className="absolute right-0 bottom-0" src={CameraIcon} alt="" />
      </div>
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
      <div className="input-container pt-6">
       <h5 className="input-heading">Address</h5>
       <input className="input h-[48px] rounded-[40px] " type="number" />
      </div>
     </section>
    </form>
    {/*  */}

    <div className="flex flex-row justify-between mt-[24px]">
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

export default PersonalDetails
