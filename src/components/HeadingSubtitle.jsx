const HeadingSubtitle = ({ heading, subtitle }) => {
 return (
  <header className="flex flex-col">
     <h4 className="font-bold text-[40px]">{ heading}</h4>
   <p className="font-poppins font-light text-[20px] mt-[10px] text-greytext">
    {subtitle}
   </p>
  </header>
 )
}

export default HeadingSubtitle
