import React, { useState } from "react"
import List from "./List.jsx"
import Alert from "./Alert.jsx"
import AISparkle from "../../assets/GreySparkle.svg"
import GreenSparkle from "../../assets/GreenSparkle.svg"
import PlusCircle from "../../assets/PlusCircleGreen.svg"

const ExperienceList = ({
 placeholder1,
 placeholder2,
 placeholder3,
 addButtonText,
}) => {
 const [companyPosition, setCompanyPostion] = useState("")
 const [workLocation, setWorkLocation] = useState("")
 const [achievements, setAchievements] = useState("")
 const [list, setList] = useState([])
 const [isEditing, setIsEditng] = useState(false)
 const [editID, setEditID] = useState(null)
 const [alert, setAlert] = useState({
  show: false,
  msg: "",
  type: "",
 })

 const handleSubmit = (e) => {
  e.preventDefault()
  if (!companyPosition) {
   // display company empty alert
   showAlert(true, "danger", "please enter company and position")
  }
  if (!workLocation) {
   showAlert(true, "danger", "please enter work location")
  } else if (companyPosition && isEditing) {
   //  deal with edit
  } else {
   showAlert(true, "success", "item added to the list")
   const newItem = {
    id: new Date().getTime().toString(),
    title: companyPosition,
    subtitle: workLocation,
    achievementsList: achievements,
   }
   setList([...list, newItem])
   setCompanyPostion("")
   setWorkLocation("")
   setAchievements("")
  }
 }

 const showAlert = (show = false, type = "", msg = "") => {
  setAlert({ show, type, msg })
 }

 const clearList = () => {
  showAlert(true, "danger", "emptylist")
  setList([])
 }

 const removeItem = (id) => {
  showAlert(true, "danger", "item-removed")
  setList(list.filter((item) => item.id !== id))
 }

 const editItem = (id) => {
  const specificItem = list.find
 }

 return (
  <section>
   <div className="w-full mx-auto justify-center align-middle">
    {list.length > 0 && (
     <div className="border-b-[1px] pb-4">
      <List items={list} removeItem={removeItem} />
      <div className="flex flex-row justify-between mt-4">
       <p className="text-primary border-b-[1px] border-primary text-sm font-bold font-lato">
        See more
       </p>
       <p type="submit" className="flex flex-row">
        <img src={GreenSparkle} alt="" />
        <p className="text-primary border-b-[1px] border-primary text-sm font-bold font-lato">
         Generate
        </p>
       </p>
      </div>
     </div>
    )}

    <form className="flex flex-col" onSubmit={handleSubmit} action="">
     {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
     <div className="flex flex-col w-full mt-6 focus:border-none bg-gray-100 py-4 rounded-[8px] relative">
      <input
       type="text"
       className="experienceInput text-base font-lato font-semibold bg-gray-100 border-none focus:border-transparent"
       placeholder={placeholder1}
       value={companyPosition}
       onChange={(e) => setCompanyPostion(e.target.value)}
      />

      <input
       className="experienceInput h-[24px] font-light mt-2 "
       type="text"
       placeholder={placeholder2}
       value={workLocation}
       onChange={(e) => setWorkLocation(e.target.value)}
      />
      <div className="flex flex-row relative font-lato font-light">
       <input
        type="text"
        className="experienceInput mt-4"
        placeholder={placeholder3}
        value={achievements}
        onChange={(e) => setAchievements(e.target.value)}
       />
       <button
        type="submit"
        className="flex flex-row absolute right-2 bottom-0"
       >
        <img className="w-4 h-4" src={AISparkle} alt="" />
        <p className="border-b-[1px] border-gray-400 text-gray-400 text-[12px] font-semibold">
         {isEditing ? "Edit" : "Generate"}
        </p>
       </button>
      </div>
     </div>
    </form>
    <section className="flex flex-row justify-between items-center align-middle">
     <div className="flex flex-row h-[18px] mt-3">
      <img className="h-[18px] w-[18px] mr-[2px]" src={PlusCircle} alt="" />
      <p className="text-xs text-primary border-b-[1px] border-primary font-semibold font-lato">
       {addButtonText}
      </p>
     </div>
    </section>
   </div>
  </section>
 )
}

export default ExperienceList
