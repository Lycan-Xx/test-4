import React from "react"
import X from "../../assets/X.svg"
import AISparkle from "../../assets/AISparkle.svg"

const GenerateCV = () => {
 return (
  <section className="flex flex-col lg:min-w-[548px] justify-center align-middle items-center rounded-2xl shadow-lg p-6">
   <div className="flex flex-row justify-between align-middle items-center w-[100%] h-[36px] mt-4 ">
    <h4 className="font-bold font-lato text-2xl text-black pt-[8px] pb-[40px] h-[36px] p-0 m-0">
     Generate Full CV.
    </h4>
    <img src={X} alt="" />
   </div>
   <p className="text-gray-600 font-poppins text-base font-light ">
    Enter your profession and a prompt/Job Description.
   </p>
   <section className="inputs-container w-full">
    <div className="input-container">
     <h5 className="input-heading pt-10">Enter Profession</h5>
     <input
      className="input rounded-[40px] h-12"
      type="text"
      placeholder="Product Designer"
     />
    </div>
    <div className="input-container pt-6">
     <h5 className="input-heading">Enter Prompt/Job Description</h5>
     <input
      className="input h-36 rounded-[16px]"
      type="text"
      placeholder="I am a ......."
     />
    </div>
   </section>
   <div className="flex flex-row justify-between align-middle items-center w-full mt-6">
    <button className="border-slate-400 border-[1px] h-[44px] rounded-[40px] px-12 button-text">
     Cancel
    </button>
    <button className="border-none bg-primary h-[46px] flex flex-row justify-center items-center rounded-[40px] px-6">
     <img src={AISparkle} alt="" />
     <p className="button-text text-white pl-2">Generate CV</p>
    </button>
   </div>
  </section>
 )
}

export default GenerateCV
