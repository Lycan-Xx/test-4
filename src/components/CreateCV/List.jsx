import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import EditPencil from "../../assets/EditPencil.svg"
import DeleteTrash from "../../assets/DeleteTrash.svg"

const List = ({ items, removeItem }) => {
 return (
  <div className="flex flex-col">
   {items.map((item) => {
    const { id, title, subtitle, achievementsList } = item
    return (
     <article key={id} className="flex flex-col">
      <header className="flex flex-row justify-between align-middle items-center h-full mt-6">
       <p className="font-lato text-xl font-bold">{title}</p>
       <div className="flex flex-row gap-2">
        <button type="button">
         {/* <FaEdit /> */}
         <img src={EditPencil} alt="" />
        </button>
        <button type="button">
         {/* <FaTrash /> */}
         <img onClick={() => removeItem(id)} src={DeleteTrash} alt="" />
        </button>
       </div>
      </header>
      <p className="text-gray-700 font-poppins font-light text-base mt-2">
       {subtitle}
      </p>
      <li className="text-gray-700 font-poppins font-light text-base mt-4">
       {achievementsList}
      </li>
     </article>
    )
   })}
  </div>
 )
}

export default List
