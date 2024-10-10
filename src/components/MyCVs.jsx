import { useState } from "react"
import Crown from "../assets/crown.svg"
import PlusCircle from "../assets/PlusCircle.svg"
import { HiArrowRight } from "react-icons/hi"
import TopRatedTemplates from "./TopRatedTemplates"
import HomepageCVs from "./HomepageCVs"
import HomepageCls from "./HomepageCls"

const MyCVs = () => {
 const [activeTab, setActiveTab] = useState("CVs")

 const handleTabClick = (tab) => {
  setActiveTab(tab)
 }

 return (
  <main className="flex flex-col font-lato">
   <header className="flex flex-row mx-auto justify-between w-full mb-[48px]">
    <div className="flex flex-col">
     <h4 className="font-bold text-[40px]">
      Welcome <span className="text-primary">Ozzy</span>
     </h4>
     <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
      Select a template to build your CV.
     </p>
    </div>
    <button className="md:w-[260px] md:h-[68px] rounded-[40px]  bg-primary flex flex-row justify-center items-center">
     <img className="w-[24px] h-[24px]" src={Crown} alt="" />
     <p className="text-white text-[24px] font-bold ml-[8px]"> Upgrade Now </p>
    </button>
   </header>
   {/* CVs / Cover Letters Tabs */}
   <section>
    <header className="flex flex-row border-b-2 pb-[10px] gap-[32px] font-bold text-[20px] text-greytextlight">
     <button onClick={() => handleTabClick("CVs")}>My CVs</button>
     <button onClick={() => handleTabClick("CLs")}>Cover Letters</button>
    </header>
    <section>
     {activeTab === "CVs" && <HomepageCVs />}
     {activeTab === "CLs" && <HomepageCls />}
    </section>
    <article className="flex flex-col bg-gray-100 mt-[32px] rounded-2xl py-[24px] px-[32px]">
     <header className="flex flex-row w-full justify-between pb-4">
      <h5 className="text-[24px] font-bold">
       Choose from top rated templates.
      </h5>
      <i className="flex flex-row items-center text-primary gap-1 hover:cursor-pointer">
       View all <HiArrowRight />{" "}
      </i>
     </header>
     <TopRatedTemplates />
    </article>
   </section>
  </main>
 )
}

export default MyCVs
