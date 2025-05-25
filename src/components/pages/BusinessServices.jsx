import React from "react"

const BusinessServices = () => {
 const Services = [
  { title: "Talent Sourcing & Recruitment" },
  { title: "Project Planning & Delivery" },
  { title: "Agile & Scrum implementation" },
  { title: "HR Templates & Onboarding Support" },
  { title: "Strategic HR Advisory" },
 ]

 return (
  <section className="flex flex-col ">
   <h4>Business Services</h4>
   <div className="grid grid-cols-2">
    {Services.map((service, index) => (
      <p key={index}>{service.title}</p>
    ))}
   </div>
   <p>
    Whatever stage your business is in, we offer the expertise to drive your growth.
   </p>
  </section>
 )
}

export default BusinessServices
