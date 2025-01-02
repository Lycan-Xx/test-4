import React from "react"

const UpgradeSubscription = () => {
 return (
  <section
   data-aos="fade-up"
   data-aos-duration="500"
   className="flex flex-col md:items-center align-middle h-full w-full md:w-[70vw]"
  >
   <h4 className="font-lato text-2xl  md:text-[40px] font-bold leading-[150%] my-4 ml-3 md:ml-0">
    Pricing.
   </h4>
   <section class="flex flex-col md:flex-row gap-x-6 h-full justify-center items-center gap-y-12">
    <article class="font-poppins bg-[#f7f9fc] rounded-[24px] p-8 flex flex-col items-start justify-center">
     <p class="font-lato font-bold text-base md:text-2xl text-gray-500  bg-gray-200 px-8 py-2 rounded-[68px] w-min">
      Free
     </p>
     <ul class="my-10 text-[#344054] text-base md:text-2xl font-light list-disc pl-[25px] whitespace-nowrap">
      <li className=" leading-[240%]">Pay $10 for 1 active.</li>
      <li className=" leading-[240%]">Access to 3 templates.</li>
      <li className=" leading-[240%]">Watermarked to template.</li>
      <li className=" leading-[240%]">Uneditable download.</li>
     </ul>
     <button class=" bg-white ring-1 outline-none  ring-primary w-full flex items-center justify-center rounded-[60px] md:py-[16px] py-2 text-primary font-bold font-lato text-xl md:text-2xl">
      Start for Free
     </button>
    </article>
    <article class="font-poppins bg-[#ffece5] rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-center">
     <p class="font-lato font-bold md:text-2xl text-[#eb5017]  bg-[#fcd2c2] px-8 py-2 rounded-[68px] w-min">
      Premium
     </p>
     <ul class="my-10 text-[#344054] text-base md:text-2xl font-light list-disc pl-[25px] whitespace-nowrap">
      <li className="leading-[240%]">Up to 5 active CVs.</li>
      <li className="leading-[240%]">Access to 30+ templates.</li>
      <li className="leading-[240%]">Import LinkedIn Profile.</li>
      <li className="leading-[240%]">No watermarked templates.</li>
      <li className="leading-[240%]">AI Powered CV Creator.</li>
      <li className="leading-[240%]">Editable download.</li>
      <li className="leading-[240%]">Get free cover letter.</li>
     </ul>
     <button class="ring-1 ring-primary w-full flex items-center justify-center rounded-[60px] py-2 md:py-4 px-[43px] text-white bg-primary font-bold font-lato text-xl md:text-2xl whitespace-nowrap">
      Subscribe for $35/month
     </button>
    </article>
   </section>
  </section>
 )
}

export default UpgradeSubscription
