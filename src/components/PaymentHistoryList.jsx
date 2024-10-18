import React from "react"
import TimeIcon from "../assets/time-line.svg"
import FlagIcon from "../assets/flag-icon.svg"
import CardIcon from "../assets/card-icon.svg"
import ArrowDown from "../assets/arrow-down.svg"
import SearchIcon from "../assets/searchIcon.svg"
import { paymentHistory } from "../data/data"
import mastercardLogo from "../assets/mastercard.svg"
import visaLogo from "../assets/Visa.svg"
// import { PaymentHistory } from "../assets/data/data.js"

const Sorters = [
 {
  id: 1,
  icon: TimeIcon,
  text: "Date range",
 },
 {
  id: 2,
  icon: FlagIcon,
  text: "Status",
 },
 {
  id: 3,
  icon: CardIcon,
  text: "Payment Method",
 },
]

const cardLogos = {
 Visa: visaLogo,
 MasterCard: mastercardLogo,
}

const PaymentHistoryList = () => {
 return (
  <section className="flex flex-col mx-auto w-full">
   <h5 className="font-bold font-lato text-xl text-grey-700 mb-[24px]">
    All Payments
   </h5>
   <div className="flex flex-row justify-between">
    <div className="lg:h-[41px] relative">
     <input
      className="lg:w-[449px] pl-[36px] h-full rounded-[8px] bg-[#fbfbfb] focus:outline-none "
      type="text"
      placeholder="Search by amount , payment method..."
     />
     <img className="absolute top-1/4 left-[10px]" src={SearchIcon} alt="" />
    </div>

    <div className="flex flex-row gap-[13px] ">
     {Sorters.map((item) => {
      const { id, icon, text } = item
      return (
       <button
        className="flex flex-row justify-center items-center align-middle border-[0.5px] border-[#f0f2f4] rounded-lg h-[100%] p-2 gap-2 "
        key={id}
       >
        <img className="h-[16px] w-[16px]" src={icon} alt="" />
        <p className="font-lato text-sm whitespace-nowrap text-[#4b5563] font-medium ">
         {text}
        </p>
        <img className="h-[16px] w-[16px]" src={ArrowDown} alt="" />
       </button>
      )
     })}
    </div>
   </div>
   <table className="flex flex-col">
    <thead className="bg-[#e4e6e8]">
     <tr className="grid grid-cols-7 items-center justify-start w-full lg:h-[52px] font-lato font-bold  text-[#374151]">
      <th className="bg-black"></th>
      <th>Payment ID</th>
      <th>Status</th>
      <th>Amount</th>
      <th>Payment Method</th>
      <th>Creation date</th>
      <th className="w-[50px] bg-black"></th>
     </tr>
    </thead>
    <tbody className="w-full flex flex-col justify-between">
     {paymentHistory.map((item) => {
      const {
       id,
       paymentID,
       paymentStatus,
       Amount,
       cardType,
       cardNumber,
       time,
      } = item
      return (
       <tr className="flex flex-row justify-between" key={id}>
        <input type="checkbox" id="option1" name="option1" value="Option 1" />
        <td>{paymentID}</td>
        <td>{paymentStatus}</td>
        <td>${Amount} USD</td>
        <td className="flex flex-row">
         <img src={cardLogos[cardType]} alt="" />
         <p>{cardNumber}</p>
        </td>
        <td className="flex flex-row">
         {time.month} {time.date}, {time.year}, {time.hour}{" "}
         {time.AM ? "AM" : "PM"}
        </td>
       </tr>
      )
     })}
    </tbody>
   </table>
  </section>
 )
}

export default PaymentHistoryList
