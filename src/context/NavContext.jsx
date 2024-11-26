import {createContext, useContext, useState} from 'react'

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(null);
  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavContext = () => useContext(NavContext)