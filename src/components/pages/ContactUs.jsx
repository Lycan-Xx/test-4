import React from 'react'

const ContactUs = () => {

  const Info = [
   {
    icon: icon1,
    label: "Telephone",
    info: "+2348136589531",
   },
   {
    icon: icon2,
    label: "Website",
    info: "www.corporatebee.cc",
   },
   {
    icon: icon3,
    label: "E-main",
    info: "corporatebee.cc@gmail.com",
   },
   {
    icon: icon4,
    label: "Address",
    info: "Abuja, Nigeria",
   },
  ]

  return (
    <section className='flex flex-col'>
      <h4>INTERESTED IN WORKING WITH US</h4>
      <h5>CONTACT US NOW!</h5>
      <p>For information, please contact via:</p>
      <div className='bg-white bg-opacity-60 rounded-2xl grid grid-cols-2'>
        {
          Info.map((index, item) => {
            <div className='flex flex-row' key={index}>
              <img src={item.icon} alt="" />
              <div className='flex flex-col'>
                <p>{item.label}</p>
                <p>{item.info}</p>
              </div>
            </div>
          })
      }
      </div>
    </section>
  )
}

export default ContactUs