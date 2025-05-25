import React from 'react'

const Testomonial = () => {

  const Testomonials = [
   {
    text:
     "CorporateBee has been a game-changer for my career. Their personalized approach helped me land my dream remote job!",
    author: "Gift Johnson",
    role: "software engineer",
   },
   {
    text:
     "Very convenient and easy consultation. I got a lot of knowledge in this new business I created. Thank you for making my business neatly organized.",
    author: "Anthony",
    role: "Founder and CEO",
   },
   {
    text:
     "Very professional and dedicated team. They helped me find the right talent for my startup, and I couldn't be happier with the results.",
    author: "Timothy",
    role: "HR Manager",
   },
   {
    text:
     "CorporateBee's strategic insights transformed our business operations. Their expertise is unmatched!",
    author: "Sarah",
    role: "Operations Director",
   },
   {
    text:
     "Got the best HR policy suite from CorporateBee and it was a game changer for my organisation.",
    author: "Daniel",
    role: "HR Consultant",
   },
  ]

  return (
    <section className='flex flex-col'>
      <h4>Testimonials</h4>
      <p>Loved by clients world wide</p>
      <div className='grid grid-cols-2 gap-5'>
        {
          Testomonials.map((index, service) => {
            return (
              <div key={index} className='flex flex-col'>
                <p>{service.text}</p>
                <h5>{service.author}</h5>
                <p>{service.role}</p>
              </div>
            )
          })
        }
        </div>
    </section>
  )
}

export default Testomonial