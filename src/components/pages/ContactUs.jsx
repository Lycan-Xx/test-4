import React from 'react'
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactUs = () => {
  const Info = [
   {
    icon: <FaPhone className="w-6 h-6 text-primary" />,
    label: "Telephone",
    info: "+2348136589531",
   },
   {
    icon: <FaGlobe className="w-6 h-6 text-primary" />,
    label: "Website",
    info: "www.corporatebee.cc",
   },
   {
    icon: <FaEnvelope className="w-6 h-6 text-primary" />,
    label: "E-mail",
    info: "corporatebee.cc@gmail.com",
   },
   {
    icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
    label: "Address",
    info: "Abuja, Nigeria",
   },
  ]

  return (
    <section className='flex flex-col gap-4 p-6'>
      <h4 className='text-2xl font-bold'>INTERESTED IN WORKING WITH US</h4>
      <h5 className='text-xl font-semibold'>CONTACT US NOW!</h5>
      <p>For information, please contact via:</p>
      <div className='bg-white bg-opacity-60 rounded-2xl grid grid-cols-2 gap-4 p-6'>
        {Info.map((item, index) => (
          <div className='flex flex-row items-center gap-4' key={index}>
            {item.icon}
            <div className='flex flex-col'>
              <p className='font-semibold'>{item.label}</p>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactUs