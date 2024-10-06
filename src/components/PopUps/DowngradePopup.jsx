import React from "react"
import CancelX from "../../assets/CancelX.svg"

const DowngradePopup = () => {
 return (
  <section className="flex flex-col lg:min-w-[548px] items-left rounded-2xl shadow-lg p-6 max-w-[608px] gap-[32px] ">
   <div className="flex flex-row justify-between align-middle items-center w-[100%] h-[36px] mt-4 ">
    <h4 className="font-bold font-lato text-2xl text-black pt-[8px] pb-[40px] h-[36px] p-0 m-0">
     Downgrade to Free.
    </h4>
    <img src={CancelX} alt="" />
   </div>
   <p className="text-gray-600 font-poppins text-base font-light">
    You are currently on a premium plan which will expire in{" "}
    <span className="text-primary"> 24 days</span>, and then auto-renew.
   </p>
   <p className="text-gray-600 font-poppins text-base font-light">
    Are you sure you want to{" "}
    <span className="text-errorRed button-text">Downgrade</span>?
   </p>
   <button className="border-none bg-primary h-[46px] flex flex-row justify-center items-center rounded-[40px] w-full">
    <p className="button-text text-white pl-2">Downgrade</p>
   </button>
  </section>
 )
}

export default DowngradePopup
