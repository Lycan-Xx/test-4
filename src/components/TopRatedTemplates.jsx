import { useState } from "react"
import { useTemplate } from "../context/TemplateContext"
import { AllTemplates } from "../data/templates"
import PremiumCrown from "../assets/premiumCrown.svg"
import { BsArrowRight } from "react-icons/bs"
import { CiZoomIn } from "react-icons/ci"
import { Link } from "react-router-dom"

const TopRatedTemplates = () => {
 const [activeCV, setActiveCV] = useState("All")
 const { setSelectedTemplate } = useTemplate()
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [selectedImage, setSelectedImage] = useState("")

 const handleTemplateSelect = (template) => {
  setSelectedTemplate(template)
 }

 const handlePreviewClick = (imagePath) => {
  setSelectedImage(imagePath)
  setIsModalOpen(true)
  console.log(imagePath)
 }

 const handleCloseModal = () => {
  setIsModalOpen(false)
  setSelectedImage("")
 }
 const handleButtonClick = (btn) => {
  setActiveCV(btn)
 }
 return (
  <section className="flex flex-row gap-4">
   {AllTemplates.slice(0, 4).map((item) => {
    return (
     <div className="relative group" key={item.id}>
      <img
       src={item.template}
       onClick={() => handleTemplateSelect(item)}
       alt=""
      />
      {item.premium && (
       <img className="absolute top-0 left-0" src={PremiumCrown} alt="" />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-10 px-[10%] mx-auto pb-[10%] rounded-md">
       <button
        className="rounded-[30px] w-full py-[10px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        onClick={() => {
         handlePreviewClick(item.template)
        }}
       >
        Preview <CiZoomIn className="ml-2" />
       </button>
       <Link
        to="/create-cv/personal-details"
        className="rounded-[30px] w-full py-[10px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-200 mt-4"
        onClick={() => handleTemplateSelect(item)}
       >
        Use Template <BsArrowRight className="ml-2" />
       </Link>
      </div>
     </div>
    )
   })}
  </section>
 )
}

export default TopRatedTemplates
