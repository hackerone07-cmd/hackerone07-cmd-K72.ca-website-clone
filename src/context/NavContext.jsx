import React, { createContext, useState } from 'react'

export  const NavbarContext = createContext();

const NavContext = ({children}) => {
    
  
   const [navOpen, setnavOpen] = useState(true)

  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setnavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
