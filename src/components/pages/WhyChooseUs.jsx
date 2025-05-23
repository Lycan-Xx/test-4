import React from 'react'

const WhyChooseUs = () => {

  const Why = [
   {
    header: "Proven Expertise",
    icon: Icon1,
    text: "Our team brings years of in career development and business operations, delivering",
   },
   {
    header: "Tailored Solutions",
    icon: Icon2,
    text: "No two clients are the same. We take time to understand your unique goals and craft strategies that work fit - not force - your growth.",
   },
   {
    header: "End-to-End Support",
    icon: Icon3,
    text: "From consultation to execution, we provide consistent, hands-on support so you're never navigating alone.",
   },
  ]

  return (
    <section>
      <h4>Why choose Us</h4>
      <div className='grid grid-cols-3'>
        {
          Why.map((index, service) => {
            return (
             <div key={index}>
              <h5>{service.header}</h5>
              <img src={service.icon} alt={service.header} />
              <p>{service.text}</p>
             </div>
            )
          })
        }
        </div>
    </section>
  )
}

export default WhyChooseUs