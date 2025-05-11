import {useEffect, useState} from "react"

const TemplateModal = ({ imageSrc, onClose }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer)
  }, [])

 return (
  <main
   className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50 transition-opacity ease-in-out duration-1000  h-screen ${
    isVisible ? "opacity-100" : "opacity-0"
   } `}
  >
   <div className="relative">
    <img src={imageSrc} alt="Preview" className="lg:w-[500px] max-h-full" />
    <button
     className="absolute top-2 right-2 text-red text-5xl"
     onClick={onClose}
    >
     &times;
    </button>
   </div>
  </main>
 )
}

export default TemplateModal
