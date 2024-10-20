import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

const List = ({ items }) => {
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
         <FaEdit />
        </button>
        <button type="button">
         <FaTrash />
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
