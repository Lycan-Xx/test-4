import { useState } from "react"
import { useTemplate } from "../context/TemplateContext"
import { AllTemplates } from "../data/templates"
import PremiumCrown from "../assets/premiumCrown.svg"
import { BsArrowRight } from "react-icons/bs"
import { CiZoomIn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const TopRatedTemplates = () => {
 const [activeCV, setActiveCV] = useState("All")
 const {
  selectedTemplate,
  selectedImage,
  handlePreviewClick,
  handleTemplateSelect,
  handleCloseModal,
  isModalOpen,
 } = useTemplate()

 const handleButtonClick = (btn) => {
  setActiveCV(btn)
 }
 return (
  <section className="md:flex md:flex-row grid grid-cols-2 gap-4">
   {AllTemplates.slice(0, 4).map((item) => {
    return (
     <div className="relative group" key={item.id}>
      <img
       className="w-max"
       src={item.template}
       onClick={() => handleTemplateSelect(item)}
       alt=""
      />
      {item.premium && (
       <img className="absolute top-0 left-0" src={PremiumCrown} alt="" />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-end items-center gap-y-[7px] opacity-0 group-hover:opacity-100 transition-all group-hover:duration-700 z-10 px-[10%] mx-auto pb-[10%] rounded-md ease-in-out group-hover:transition">
       <button
        className="rounded-[30px] w-full py-[5px] px-[3px]  md:py-[10px] flex items-center justify-center bg-white text-primary font-medium font-poppins hover:bg-primary hover:duration-500 hover:text-white transition-colors duration-400 text-[10px] md:text-base"
        onClick={() => {
         handlePreviewClick(item.template)
        }}
       >
        Preview <CiZoomIn className="ml-2" />
       </button>
       <Link className="w-full" to="/create-cv/personal-details">
        <button
         className="rounded-[30px] w-full py-[5px] px-[3px]  md:py-[10px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition hover:duration-500 text-[10px] font-poppins md:text-base whitespace-nowrap"
         onClick={() => handleTemplateSelect(item)}
         initial={{ opacity: 0, y: -100 }}
         whileHover={{ opacity: 1, y: 0 }}
         transition={{ duration: 2.0 }}
        >
         use template <BsArrowRight className="md:ml-2 ml-1" />
        </button>
       </Link>
      </div>
     </div>
    )
   })}
  </section>
 )
}

export default TopRatedTemplates
