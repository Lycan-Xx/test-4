import React from "react"
import CancelX from "../../assets/CancelX.svg"
import { paymentOptions } from "../../data/data"

const ChoosePaymentMethods = () => {
 return (
  <section className="flex flex-col lg:min-w-[608px] justify-center align-middle items-center rounded-lg shadow-lg p-6">
   <div className="flex flex-row justify-between items-center w-[100%] ">
    <h4 className="font-bold font-lato text-2xl text-gray-700">
     Choose Payment Methods.
    </h4>
    <img src={CancelX} alt="" />
   </div>
   <div className="flex flex-col gap-y-4 w-full">
    {paymentOptions.map((item) => {
     return (
      <li
       key={item.id}
       className="flex flex-row rounded-[4px] border-[1px] items-center h-16  "
      >
       <img src={item.image} alt="" />
       <p className="pl-[6px] font-poppins text-base">{item.gateway}</p>
      </li>
     )
    })}
   </div>
   <button className="h-[68px] bg-primary rounded-[68px] border-none items-center w-full mt-[32px] text-white font-lato font-bold text-2xl ">
    Pay $35
   </button>
  </section>
 )
}

export default ChoosePaymentMethods
