import { useState } from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useTemplate } from "../../context/TemplateContext"

const Summary = () => {
 const { selectedTemplate } = useTemplate()
 const [value, setValue] = useState("")

 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:flex-row md:justify-between w-full justify-center"
  >
   <section className="flex flex-col w-[100%] justify-between  h-screen md:mr-32">
    <div className="flex flex-col">
     <form className="" action="">
      <header className="flex flex-row justify-between ">
       <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
        Professional Summary
       </h5>
       <div className="flex flex-row text-primary align-middle items-center">
        <img className="text-primary" src={AISparkle} alt="" />
        <p className="whitespace-nowrap border-b-primary border-b-[1px] font-semibold cursor-pointer">
         Generate Cover Letter
        </p>
       </div>
      </header>
      <p className="normal-text md:py-3">
       Give a summary on your professional career.
      </p>
     </form>
     {/*  */}
     <section className="text-input relative mb-[60px]">
      <ReactQuill
       className="rounded-[16px] h-[30vh]"
       theme="snow"
       value={value}
       onChange={setValue}
      />
      <div className=" flex flex-row text-primary align-middle items-center absolute right-2 bottom-0">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px] text-xs font-bold">
        Generate
       </p>
      </div>
     </section>
    </div>
    <div className="flex flex-row justify-between  ">
     <button className="rounded-[40px] border-[1px] border-[#98a2b3] px-[57px] h-[46px] text-[20px] font-bold font-lato">
      Back
     </button>
     <button className="rounded-[40px] text-white  bg-primary font-lato px-[24px]">
      Save & Next
     </button>
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

export default Summary
