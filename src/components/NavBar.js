import { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  const { openMenu, setOpenMenu, handleMenu } = useContext(GlobalContext);
    
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="image/cscode-color.png" alt="CsCode" /> 
        
        <button type="button" onClick={handleMenu}>
            <FaBars fontSize="30"/>
           <p>MENU</p> 
        </button>
        
      </div>
    </div>
  );
}