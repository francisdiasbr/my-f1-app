import React, { createContext, useState, useEffect } from 'react'

const initialData = { menuProvider: { menuLeft: { state: false, setState: null } } }

export const MenuContext = createContext(initialData)

const MenuProvider = ({ children }) => {

  const [state, setState] = useState<any>(initialData)

  const setMenuLeftState = (p) => setState({
    menuProvider: {
      ...state.menuProvider,
      menuLeft: {
        ...state.menuProvider.menuLeft,
        state: p,
        setState: setMenuLeftState
      }
    }
  })

  const initializeMenuLeft = () => setState({
    menuProvider: {
      ...state.menuProvider,
      menuLeft: {
        state: false,
        setState: setMenuLeftState
      }
    }
  })

  useEffect(() => initializeMenuLeft(), [])

  return (
    <MenuContext.Provider value={state}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
