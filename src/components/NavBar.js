import { useContext } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';

import Link from 'next/link';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  const { openMenu, handleMenu } = useContext(GlobalContext);

  return (
    <div className={styles.container}  >
      
      <div className={styles.content}  >
        <div className={styles.logoImage}>           
          <Link href="/" >
            <img src="image/cscode-color.png" alt="CsCode" />
          </Link>
        </div>
        
        <button type="button" onClick={handleMenu}>
            
            <div className="animate__animated animate__flipInX">
              { openMenu ? <FaTimesCircle fontSize="30" /> : <FaBars fontSize="30"/> }
            </div>

            <div className="animate__animated animate__flipInY">
              <p>{ openMenu ? 'CLOSE' : 'MENU'}</p>
            </div>
            
        </button>
        
      </div>
      
    </div>
  );
}