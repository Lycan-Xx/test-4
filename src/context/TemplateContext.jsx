import { createContext, useState, useContext } from "react"

export const TemplateContext = createContext()

export const TemplateProvider = ({ children }) => {
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [selectedTemplate, setSelectedTemplate] = useState(null)
 const [selectedImage, setSelectedImage] = useState("")

 const handlePreviewClick = (imagePath) => {
  setSelectedImage(imagePath)
  setIsModalOpen(true)
  console.log(imagePath)
 }

 const handleTemplateSelect = (template) => {
  setSelectedTemplate(template)
 }

 const handleCloseModal = () => {
  setIsModalOpen(false)
  setSelectedTemplate("")
 }

 return (
  <TemplateContext.Provider
   value={{
    handleTemplateSelect,
    selectedTemplate,
    isModalOpen,
    setIsModalOpen,
    handlePreviewClick,
    handleCloseModal,
    setSelectedTemplate,
    selectedImage,
   }}
  >
   {children}
  </TemplateContext.Provider>
 )
}

export const useTemplate = () => useContext(TemplateContext)
