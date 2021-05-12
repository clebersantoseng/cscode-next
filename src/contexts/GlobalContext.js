import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {

  const [openMenu, setOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function handleMenu(state) {  
      setOpenMenu(state);
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
      scrollToTop,
      isLoading,
      setIsLoading
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  openMenu: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}