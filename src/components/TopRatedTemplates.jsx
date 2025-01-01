import { useState } from "react"
import { useTemplate } from "../context/TemplateContext"
import { AllTemplates } from "../data/templates"
import PremiumCrown from "../assets/premiumCrown.svg"
import { BsArrowRight } from "react-icons/bs"
import { CiZoomIn } from "react-icons/ci"
import { Link } from "react-router-dom"

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
 //  const [isModalOpen, setIsModalOpen] = useState(false)
 //  const [selectedImage, setSelectedImage] = useState("")

 //  const handleTemplateSelect = (template) => {
 //   setSelectedTemplate(template)
 //  }

 //  const handlePreviewClick = (imagePath) => {
 //   setSelectedImage(imagePath)
 //   setIsModalOpen(true)
 //   console.log(imagePath)
 //  }

 //  const handleCloseModal = () => {
 //   setIsModalOpen(false)
 //   setSelectedImage("")
 //  }
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
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-end items-center gap-y-[7px] opacity-0 group-hover:opacity-100 transition-all duration-400 z-10 px-[10%] mx-auto pb-[10%] rounded-md">
       <button
        className="rounded-[30px] w-full py-[5px] px-[3px]  md:py-[10px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-200 text-[10px] md:text-base"
        onClick={() => {
         handlePreviewClick(item.template)
        }}
       >
        Preview <CiZoomIn className="ml-2" />
       </button>
       <Link
        to="/create-cv/personal-details"
        className="rounded-[30px] w-full py-[5px] px-[3px]  md:py-[10px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-200 text-[10px] font-raleway md:text-base whitespace-nowrap"
        onClick={() => handleTemplateSelect(item)}
       >
        use template <BsArrowRight className="md:ml-2 ml-1" />
       </Link>
      </div>
     </div>
    )
   })}
  </section>
 )
}

export default TopRatedTemplates
