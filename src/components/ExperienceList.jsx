import React, { useState } from "react"
import List from "./List.jsx"
import Alert from "./Alert.jsx"
import AISparkle from "../assets/GreySparkle.svg"

const ExperienceList = () => {
  const [companyPosition, setCompanyPostion] = useState("")
  const [workLocation, setWorkLocation] = useState("")
  const [achievements, setAchievements] = useState("")
 const [list, setList] = useState([])
 const [isEditing, setIsEditng] = useState(false)
 const [editID, setEditID] = useState(null)
 const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

 const handleSubmit = (e) => {
  e.preventDefault()
  console.log("hello submit")
 }

 return (
  <section>
   <div className="w-full mx-auto justify-center align-middle">
    <form className="flex flex-col" onSubmit={handleSubmit} action="">
     {alert.show && <Alert />}
     <div className="flex flex-col w-full mt-6 focus:border-none bg-gray-100 p-4 rounded-[8px] relative">
      <input
       type="text"
       className="input text-base font-lato font-bold bg-gray-100 border-none  rounded-[8px]  focus:border-transparent"
       placeholder="Your position and company here"
       value={companyPosition}
       onChange={(e) => setCompanyPostion(e.target.value)}
      />
      <input
       className="input h-[24px] rounded-[40px] "
       type="text"
       placeholder="location - (Start and End Date)"
       value={workLocation}
       onChange={(e) => setWorkLocation(e.target.value)}
      />
      <div className="flex flex-row relative">
       <input
        type="text"
        className="input bg-gray-100 border-none mt-4  focus:border-transparent"
        placeholder="Impressive achievements here"
        value={achievements}
        onChange={(e) => setAchievements(e.target.value)}
       />
       <button
        type="submit"
        className="flex flex-row absolute right-2 bottom-0"
       >
        <img src={AISparkle} alt="" />
        <p className="border-b-[2px] border-gray-400 text-gray-400">
         {isEditing ? "Edit" : "Generate"}
        </p>
       </button>
      </div>
     </div>
    </form>
    <List />
    <button>clear-items</button>
   </div>
  </section>
 )
}

export default ExperienceList
