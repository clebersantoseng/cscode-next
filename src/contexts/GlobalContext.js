import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {

  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    if(openMenu) {      
      setOpenMenu(false);      
    } else {      
      setOpenMenu(true);      
    }
  }
  
  return(
    <GlobalContext.Provider 
    value={{
      openMenu,
      setOpenMenu,
      handleMenu
    }}>
      {children}
    </GlobalContext.Provider>
  );
}