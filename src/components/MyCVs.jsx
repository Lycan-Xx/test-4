import { useState } from "react"
import Crown from "../assets/crown.svg"
import { HiArrowRight } from "react-icons/hi"
import TopRatedTemplates from "./TopRatedTemplates"
import HomepageCVs from "./HomepageCVs"
import HomepageCls from "./HomepageCls"
import { Link } from "react-router-dom"
import { useTemplate } from "../context/TemplateContext"
import TemplateModal from "./PopUps/TemplateModal"

const MyCVs = () => {
 const [activeTab, setActiveTab] = useState("CVs")
 const {
  selectedTemplate,
  selectedImage,
  handlePreviewClick,
  handleTemplateSelect,
  handleCloseModal,
  isModalOpen,
 } = useTemplate()

 const handleTabClick = (tab) => {
  setActiveTab(tab)
 }

 return (
  <main
   className="flex flex-col font-lato pt-[40px] px-[24px]"
   data-aos="fade-up"
   data-aos-duration="500"
  >
   <header className="flex flex-row mx-auto justify-between w-full mb-[48px]">
    <div className="flex flex-col">
     <h4 className="font-bold text-2xl md:text-[40px]">
      Welcome <span className="text-primary">Ozzy</span>
     </h4>
     <p className="font-poppins font-light text-sm md:text-[20px] mt-[10px] text-greytext">
      Select a template to build your CV.
     </p>
    </div>
    <button className="hidden md:w-[260px] md:h-[68px] rounded-[40px] bg-primary md:flex flex-row justify-center items-center">
     <img className="w-[24px] h-[24px]" src={Crown} alt="" />
     <p className="text-white text-[24px] font-bold ml-[8px] font-lato">
      {" "}
      Upgrade Now{" "}
     </p>
    </button>
   </header>
   {/* CVs / Cover Letters Tabs */}
   <section>
    <header className="flex flex-row border-b-2 pb-[10px] gap-[32px] font-bold md:text-[20px] text-greytextlight">
     <button
      className={` ${activeTab == "CVs" ? "font-bold text-gray-900" : ""} `}
      onClick={() => handleTabClick("CVs")}
     >
      My CVs
     </button>
     <button
      className={`${activeTab == "CLs" ? "font-bold text-gray-900" : ""} `}
      onClick={() => handleTabClick("CLs")}
     >
      Cover Letters
     </button>
    </header>
    <section>
     {activeTab === "CVs" && <HomepageCVs />}
     {activeTab === "CLs" && <HomepageCls />}
    </section>
    <article className="flex flex-col bg-gray-100 mt-[32px] rounded-2xl py-[24px] px-[32px]">
     <header className="flex flex-row w-full justify-between pb-4">
      <h5 className="md:text-[24px] text- font-bold">
       Choose from top rated templates.
      </h5>
      <Link to="/templates">
       <i className=" hidden md:flex flex-row items-center text-primary gap-1 hover:cursor-pointer">
        View all <HiArrowRight />{" "}
       </i>
      </Link>
     </header>
     <TopRatedTemplates />
     {isModalOpen && (
      <TemplateModal imageSrc={selectedImage} onClose={handleCloseModal} />
     )}
    </article>
   </section>
  </main>
 )
}

export default MyCVs
