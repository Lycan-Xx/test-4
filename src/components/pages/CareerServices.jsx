import { p } from 'framer-motion/client'
import React from 'react'

const CareerServices = () => {

  const Services = [
   {
    title: "Professional Resume & Cover Letter Writing",
   },
   {
    title: "LinkedIn Profile Optimization",
   },
   {
    title: "Executing Branding",
   },
   {
    title: "Career Coaching",
   },
   {
    title: "Job Application Support",
   },
  ]

  return (
    <section className='flex flex-col '>
      <h4>Career Services</h4>
      <div className='grid grid-cols-2'>
        {
          CareerServices.map((index, service) => {
            <p key={index}>
              {service.title}
            </p>
          })
        }
      </div>
      <p>Every service is designed to position you for success, providing ongoing support and personalised feedback.</p>
    </section>
  )
}

export default CareerServices