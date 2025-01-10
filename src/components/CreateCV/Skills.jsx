import {useState} from "react"
import AISparkle from "../../assets/GreenSparkle.svg"
import { useTemplate } from "../../context/TemplateContext"
import { PiPencilSimple } from "react-icons/pi"
import { FaTimes } from "react-icons/fa"
import { FaTicket } from "react-icons/fa6"

const Skills = () => {
  const { selectedTemplate } = useTemplate()

  const [inputValue, setInputValue] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputValue && !skillsList.includes(inputValue)) {
      setSkillsList((prevSkills) => [...prevSkills, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkillsList((prevSkills) => prevSkills.filter((skill) => skill !== skillToRemove));
  }

 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:flex-row gap-[50px] md:gap-[130px] w-full justify-center px-[10vw]"
  >
   <section
    className="md:w-[50vw]  flex flex-col justify-between  h-screen"
    action=""
   >
    <section>
     <header className="flex flex-row justify-between">
      <h5 className="font-lato font-bold text-2xl whitespace-nowrap">
       Skills.
      </h5>
      <div className="flex flex-row text-primary align-middle items-center">
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
     <article className="flex flex-row">
      {skillsList.map((skill, index) => (
       <li key={index}>
        {skill} <FaTimes onClick={() => handleRemoveSkill(skill)} />
       </li>
      ))}
      <div className="flex flex-row justify-between">
       <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add Skills"
        type="text"
             />
             <FaTicket onClick={handleAddSkill} />
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
     className="h-[100vh] w-full"
     src={selectedTemplate.template}
     alt={selectedTemplate.name}
    />
   ) : (
    <p>Select a template to preview here</p>
   )}
  </main>
 )
}

export default Skills
