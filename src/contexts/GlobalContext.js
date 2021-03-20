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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return(
    <GlobalContext.Provider 
    value={{
      openMenu,
      setOpenMenu,
      handleMenu,
      scrollToTop
    }}>
      {children}
    </GlobalContext.Provider>
  );
}