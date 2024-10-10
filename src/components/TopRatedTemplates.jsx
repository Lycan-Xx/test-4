import React from "react"
import { Templates } from "../data/templates"
import PremuimCrown from "../assets/premuimCrown.svg"

const TopRatedTemplates = () => {
  return <section className="flex flex-row gap-4">
    {Templates.map((item) => {
      return (
        <div className="relative" key={item.id}>
          {item.toprated && <img key={item.id} src={item.template} alt="" />}
          {item.premium && <img className="absolute top-0 left-0" src={PremuimCrown} alt="" /> }
        </div>
      )
   })}
 </section>
}

export default TopRatedTemplates
