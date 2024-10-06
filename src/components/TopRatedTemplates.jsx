import React from "react"
import { topRatedTemplates } from "../data/templates"

const TopRatedTemplates = () => {
  return <section className="flex flex-row gap-4">
    {topRatedTemplates.map((item) => {
      return (
        <img key={item.id}  src={item.template } alt="" />
     )
   })}
 </section>
}

export default TopRatedTemplates
