import { useState } from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import { useTemplate } from "../../context/TemplateContext"
import { PiPencilSimple, PiSparkle } from "react-icons/pi"
import { FaTimes } from "react-icons/fa"
import { TiTickOutline } from "react-icons/ti"

const Skills = () => {
 const { selectedTemplate } = useTemplate()

 const [inputValue, setInputValue] = useState("")
 const [skillsList, setSkillsList] = useState([])

 const handleInputChange = (e) => {
  setInputValue(e.target.value)
 }

 const handleAddSkill = () => {
  if (inputValue && !skillsList.includes(inputValue)) {
   setSkillsList((prevSkills) => [...prevSkills, inputValue])
   setInputValue("")
  }
 }

 const handleRemoveSkill = (skillToRemove) => {
  setSkillsList((prevSkills) =>
   prevSkills.filter((skill) => skill !== skillToRemove)
  )
 }

 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:flex-row md:justify-between w-full justify-center"
  >
   <section
    className="md:w-full md:mr-32 flex flex-col justify-between  h-screen"
    action=""
   >
    <section>
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Skills.
      </h5>
      <div className="flex flex-row text-primary align-middle items-center cursor-pointer">
       <img className="text-primary" src={AISparkle} alt="" />
       <p className="whitespace-nowrap  border-b-primary border-b-[1px]">
        Generate Cover Letter
       </p>
      </div>
     </header>
     <p className="normal-text">Highlight 8 - 10 of your top skills.</p>
     <div className="flex flex-row justify-between items-center align-middle">
      <h4 className="font-bold font-lato md:text-xl">Career Skills</h4>
      <div className="rounded-full ring-1 p-2 bg-gray-100 ring-gray-300 flex items-center justify-center text-base hover:cursor-pointer">
       <PiPencilSimple />
      </div>
     </div>
     <article className="flex flex-row gap-2 md:gap-3 text-gray-600 flex-wrap">
      {skillsList.map((skill, index) => (
       <li
        className="ring-1 ring-primary flex flex-row gap-2 rounded-[19px] bg-primary bg-opacity-15 items-center justify-center px-3 py-[6px]"
        key={index}
       >
        {skill} <FaTimes onClick={() => handleRemoveSkill(skill)} />
       </li>
      ))}
      <div className="flex flex-row justify-between items-center text-gray-600  ">
       <input
        className="focus:outline-none max-w-20"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add Skills"
        type="text"
       />
       <TiTickOutline
        className="text-primary text-xl"
        onClick={handleAddSkill}
       />
      </div>
     </article>
     <article className="bg-gray-100 rounded-2xl p-3 md:p-4 flex flex-col text-gray-500 md:h-[180px] md:mt-16 gap-2">
      <header className="flex flex-row font-lato gap-1">
       {" "}
       <h4 className="font-bold text-xl text-black ">Cover Letter</h4>
       <div className="flex flex-row items-center justify-center text-sm ">
        <PiSparkle />
        <h6 className="border-b-[1px] border-gray-500 font-bold">AI</h6>
       </div>
      </header>
      <textarea
       className=" w-full focus:outline-none bg-gray-100 whitespace-normal h-full"
       placeholder="Using our AI tool, create a cover letter in a single click. By doing this, you might improve your chances of employment!"
       type="text"
      />
      <div className="flex flex-row gap-1 text-primary items-center justify-end hover:cursor-pointer">
       <PiSparkle />
       <p className="border-b-2 border-primary ">Generate</p>
      </div>
     </article>
    </section>

    <div className="flex flex-row justify-between flex-grow-1 ">
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
     className="hidden md:block h-full w-full bg-gray-100 rounded-2xl py-6 px-10 "
     src={selectedTemplate.template}
     alt={selectedTemplate.name}
    />
   ) : (
    <p className="hidden md:block">Select a template to preview here</p>
   )}
  </main>
 )
}

export default Skills
