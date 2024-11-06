import React from "react"

const TemplateModal = ({ imageSrc, onClose }) => {
 return (
  <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
   <div className="relative">
    <img src={imageSrc} alt="Preview" className="max-w-full max-h-full" />
    <button
     className="absolute top-2 right-2 text-white text-2xl"
     onClick={onClose}
    >
     &times;
    </button>
   </div>
  </main>
 )
}

export default TemplateModal
