import React from "react"
import Crown from "../../assets/crown.svg"
import PaymentHistoryList from "../PaymentHistoryList.jsx"

const PaymentHistory = () => {
 return (
  <main
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col pt-[40px] "
  >
   <header className="flex flex-col mx-auto justify-between w-full mb-[48px] gap-[20px]">
    <div className="flex flex-col gap-0 lg:gap-4">
     <h4 className="font-bold text-2xl lg:text-[40px]">Payment History.</h4>
     <p className="font-poppins font-light text-sm md:text-[20px] mt-[10px] text-greytext">
      See history of your payment transactions here.
     </p>
    </div>
    <div className="rounded-[16px] bg-gray-50 py-[24px] px-[32px] flex flex-col mx-auto justify-center align-middle w-full gap-2">
     <h5 className="text-xl md:text-2xl font-bold leading-[150%] font-lato">
      Account Status
     </h5>
     <p className="font-poppins text-sm md:text-xl font-light text-gray-600 lg:w-[1064px] w-full">
      {" "}
      You are currently on a free plan which is why you can't use some features.
      Upgrade to premium to have access to premium features.
     </p>
     <div className="flex w-[100%] justify-end">
      <button className="md:w-[260px] md:h-[68px] rounded-[40px]  bg-primary flex flex-row justify-center items-center py-[3px] px-[24px]">
       <img
        className=" h-[12px] w-[12px] lg:w-[24px] lg:h-[24px]"
        src={Crown}
        alt=""
       />
       <p className="text-white md:text-[24px] font-bold ml-[8px] font-lato">
        {" "}
        Upgrade Now{" "}
       </p>
      </button>
     </div>
    </div>
   </header>
   <PaymentHistoryList />
  </main>
 )
}

export default PaymentHistory
