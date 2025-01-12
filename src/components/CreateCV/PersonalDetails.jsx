import React, { useState } from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import ReactQuill from "react-quill"
import ProfilePic from "../../assets/PersonalDetailsProfilePic.jpg"
import CameraIcon from "../../assets/CameraIcon.svg"
import { useTemplate } from "../../context/TemplateContext"
import { Link } from "react-router-dom"

const PersonalDetails = ({ onNext }) => {
 const { selectedTemplate } = useTemplate()

 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:flex-row md:justify-between w-full"
  >
   <section className="md:w-[100%] flex flex-col h-screen md:mr-32">
    <form action="">
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Personal details
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px] font-semibold cursor-pointer">
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
        type="text"
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
     <Link
      to="/create-cv/summary"
      className="rounded-[40px] text-white flex justify-center items-center  bg-primary font-lato px-[24px]"
     >
      Save & Next
     </Link>
    </div>
   </section>
   {selectedTemplate ? (
    <img
     className="hidden md:block h-full w-full bg-gray-100 rounded-2xl py-6 px-10"
     src={selectedTemplate.template}
     alt={selectedTemplate.name}
    />
   ) : (
    <p className="hidden md:block">Select a template to preview here</p>
   )}
  </main>
 )
}

export default PersonalDetails
