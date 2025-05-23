import { useState } from "react"

const Hero = () => {
 return (
  <section className="flex flex-col flex-wrap corporate-background">
   <h4>YOUR TRUSTED PARTNER IN CAREER & BUSINESSS GROWTH </h4>
   <p>
    At CorporateBee, we help professionals unlock their potential and business
    scale with strategic, result-driven solutions. Whether you're advancing your
    career or strengthening your team, we're here to guide your next step with
    clarity and confidence
   </p>
   <div className="flex flex-row gap-5">
    <button className="bg-white text-primary rounded-3xl py-2 px-4">
     Learn More
    </button>
    <button className="bg-primary text-white rounded-3xl py-2 px-4">
     Contact
    </button>
   </div>
  </section>
 )
}

export default Hero
