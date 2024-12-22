const HeadingSubtitle = ({ heading, subtitle }) => {
 return (
  <header className="flex flex-col md:gap-[16px] gap-[10px] mb-[24px]">
   <h4 className="font-bold text-2xl lg:text-[40px]">{heading}</h4>
   <p className="font-poppins font-light text-sm lg:text-[20px] mt-[10px] text-greytext">
    {subtitle}
   </p>
  </header>
 )
}

export default HeadingSubtitle
