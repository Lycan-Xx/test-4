import { useState } from "react"
import TimeIcon from "../assets/time-line.svg"
import FlagIcon from "../assets/flag-icon.svg"
import CardIcon from "../assets/card-icon.svg"
import ArrowDown from "../assets/arrow-down.svg"
import SearchIcon from "../assets/searchIcon.svg"
import mastercardLogo from "../assets/mastercard.svg"
import visaLogo from "../assets/Visa.svg"
import SuccessTick from "../assets/successtick.svg"
import FailureMinus from "../assets/declinedMinus.svg"
import printIcon from "../assets/Printer.svg"
import { paymentHistory } from "../data/data"
import PaymentHistory from "./pages/PaymentHistory"

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
 const [currentPage, setCurrentPage] = useState(1)
 const [searchTerm, setSearchTerm] = useState("")
 const itemsPerPage = 5

 const filteredItems = paymentHistory.filter(
  (item) =>
   item.paymentID.toLowerCase().includes(searchTerm.toLowerCase()) ||
   item.cardType.toLowerCase().includes(searchTerm.toLowerCase()) ||
   item.Amount.toString().includes(searchTerm)
 )

 const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

 const indexOfLastItem = currentPage * itemsPerPage
 const indexOfFirstItem = indexOfLastItem - itemsPerPage
 const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber)
 }
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
   <table className="flex flex-col lg:mt-[23px]">
    <thead className="bg-[#e4e6e8]">
     <tr className="flex flex-row justify-between items-center w-full lg:h-[52px] font-lato font-bold text-[#374151]">
      <th className=""></th>
      <th className="flex-grow-1">Payment ID</th>
      <th className="">Status</th>
      <th>Amount</th>
      <th>Payment Method</th>
      <th>Creation date</th>
      <th></th>
     </tr>
    </thead>
    <tbody className="w-full flex flex-col justify-between">
     {currentItems.map((item) => {
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
       <tr
        className="flex flex-row items-center justify-between border-[2px] border-gray-50 md:h-[52px]"
        key={id}
       >
        <td className=" ml-[16px] ">
         <input type="checkbox" id="option1" name="option1" value="Option 1" />
        </td>
        <td>{paymentID}</td>
        <td>
         {paymentStatus ? (
          <span className="bg-[#e7f6ec] rounded-3xl px-[7.5px] py-[5.5px] flex flex-row md:w-[105px] text-xs text-[#0f973d] font-lato">
           {" "}
           <img className="pr-[6px]" src={SuccessTick} alt="" />
           Succeeded
          </span>
         ) : (
          <span className="bg-[#fbeae9] rounded-3xl px-[7.5px] py-[5.5px] flex flex-row md:w-[105px] text-xs text-errorRed font-lato">
           {" "}
           <img className="pr-[6px]" src={FailureMinus} alt="" />
           Declined
          </span>
         )}
        </td>
        <td>${Amount} USD</td>
        <td className="flex flex-row">
         <img src={cardLogos[cardType]} alt="" />
         <p> {"●●●●" + cardNumber.slice(-4)}</p>
        </td>
        <td className="flex flex-row">
         {time.month} {time.date}, {time.year}, {time.hour}{" "}
         {time.AM ? "AM" : "PM"}
        </td>
        <td className="w-[50px]">
         <img src={printIcon} alt="" />
        </td>
       </tr>
      )
     })}
    </tbody>
   </table>
   <div className="flex justify-center mt-4 h-[52px]">
    {totalPages > 1 &&
     Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <button
       key={pageNumber}
       className={`mx-2 px-3 py-1 rounded-md ${
        currentPage === pageNumber
         ? "bg-[#e4e6e8] text-[#374151] font-bold"
         : "bg-white text-[#374151] hover:bg-[#e4e6e8]"
       }`}
       onClick={() => handlePageChange(pageNumber)}
       aria-label={`Go to page ${pageNumber}`}
      >
       {pageNumber}
      </button>
     ))}
   </div>
  </section>
 )
}

export default PaymentHistoryList
