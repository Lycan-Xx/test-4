import { useState } from "react"
import TopRatedTemplates from "../TopRatedTemplates"
import { AllTemplates } from "../../data/templates"
import PremiumCrown from "../../assets/PremiumCrown.svg"
import { useTemplate } from "../../context/TemplateContext"
import { BsArrowRight } from "react-icons/bs"
import { CiZoomIn } from "react-icons/ci"
import TemplateModal from "../PopUps/TemplateModal"
import { Link } from "react-router-dom"

const Templates = () => {
 const [activeCV, setActiveCV] = useState("All")
 const {
  selectedTemplate,
  selectedImage,
  handlePreviewClick,
  handleTemplateSelect,
  handleCloseModal,
  isModalOpen,
 } = useTemplate()

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

 const tabNames = [
  {
   id: 1,
   name: "All",
  },
  {
   id: 2,
   name: "Free",
  },
  {
   id: 3,
   name: "Premium",
  },
 ]

 const filteredTemplates = AllTemplates.filter((item) => {
  if (activeCV === "All") return true
  if (activeCV === "Free") return !item.premium
  if (activeCV === "Premium") return item.premium
  return true
 })

 return (
  <section className="flex flex-col">
   <header>
    <div className="flex flex-col">
     <h4 className="font-bold text-[40px]">Templates.</h4>
     <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
      Choose one of these templates to build your CV.
     </p>
    </div>
   </header>
   <article className="flex flex-col bg-gray-100 mt-[32px] rounded-2xl py-[24px] px-[32px]">
    <header className="flex flex-row w-full justify-between pb-4">
     <h5 className="text-[24px] font-bold">Choose from top rated templates.</h5>
    </header>
    <TopRatedTemplates />
   </article>{" "}
   {/* All Free Premuim Templates  */}
   <section className="flex flex-col gap-6 pt-[40px]">
    <header className="flex flex-row gap-3">
     {tabNames.map((item) => {
      return (
       <button
        className={`cursor-pointer px-[42px] py-[12px] rounded-[26px] ${
         activeCV === item.name
          ? "bg-primary text-white"
          : "bg-gray-200 text-black"
        }`}
        onClick={() => handleButtonClick(item.name)}
        key={item.id}
       >
        {item.name}
       </button>
      )
     })}
    </header>
    <section className=" grid grid-cols-4 gap-16">
     {filteredTemplates.map((item) => {
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
          className="rounded-[30px] w-full py-[10px] px-[5px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-200 mt-4 whitespace-nowrap"
          onClick={() => handleTemplateSelect(item)}
         >
          Use Template <BsArrowRight className="ml-2" />
         </Link>
        </div>
       </div>
      )
     })}
    </section>
    {isModalOpen && (
     <TemplateModal imageSrc={selectedImage} onClose={handleCloseModal} />
    )}
   </section>
  </section>
 )
}

export default Templates
