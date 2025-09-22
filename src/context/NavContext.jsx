import React, { createContext } from 'react'

const NavContext = ({childern}) => {
    
   const NavbarContext = createContext()
   const [navOpen, setnavOpen] = useState(false)

  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setnavOpen]}>
        {childern}
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
