import React from 'react'
import { FaAward, FaPuzzlePiece, FaHandsHelping } from 'react-icons/fa'

const WhyChooseUs = () => {
  const Why = [
   {
    header: "Proven Expertise",
    icon: <FaAward className="w-12 h-12 text-primary" />,
    text: "Our team brings years of in career development and business operations, delivering",
   },
   {
    header: "Tailored Solutions",
    icon: <FaPuzzlePiece className="w-12 h-12 text-primary" />,
    text: "No two clients are the same. We take time to understand your unique goals and craft strategies that work fit - not force - your growth.",
   },
   {
    header: "End-to-End Support",
    icon: <FaHandsHelping className="w-12 h-12 text-primary" />,
    text: "From consultation to execution, we provide consistent, hands-on support so you're never navigating alone.",
   },
  ]

  return (
    <section className='p-6'>
      <h4 className='text-2xl font-bold mb-8'>Why Choose Us</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {Why.map((service, index) => (
          <div key={index} className='flex flex-col items-center text-center gap-4'>
            {service.icon}
            <h5 className='text-xl font-semibold'>{service.header}</h5>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs