import React from "react"
import { AllTemplates } from "../data/templates"
import PremiumCrown from "../assets/premiumCrown.svg"

const TopRatedTemplates = () => {
 return (
  <section className="flex flex-row gap-4">
   {AllTemplates.map((item) => {
    return (
     <div className="relative" key={item.id}>
      {item.toprated && <img key={item.id} src={item.template} alt="" />}
      {item.premium && (
       <img className="absolute top-0 left-0" src={PremiumCrown} alt="" />
      )}
     </div>
    )
   })}
  </section>
 )
}

export default TopRatedTemplates
