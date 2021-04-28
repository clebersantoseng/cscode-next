import { useContext } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';

import Link from 'next/link';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  const { openMenu, handleMenu } = useContext(GlobalContext);
  

  return (
    <header className={styles.navbar}>
      <Link href='/'>
        <img src="/image/cscode-color.png" alt="CsCODE" />
      </Link>

      <nav>
        <Link href='/'>HOME</Link>
        <Link href='/about'>SOBRE</Link>
        <Link href='#'>SERVIÇOS</Link>
        <Link href='/contact'>CONTATO</Link>
      </nav>

      <div className={styles.navmobile}>
        <button onClick={() => handleMenu(true)}>
          <FaBars />
        </button>        
      </div>

      <div className={styles.menu} style={{ display: (openMenu ? 'block' : 'none')}}>
        <button onClick={() => handleMenu(false)}>          
          <p>CLOSE</p>
          <FaTimesCircle />
        </button>
        
         <ul>
            <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='/'>HOME</Link>
             </button>
            </li>

           <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='/about'>SOBRE</Link>
             </button>
            </li>

            <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='#'>SERVIÇOS</Link>
             </button>
            </li>

            <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='/contact'>CONTATO</Link>
             </button>
            </li>
         </ul>
      </div>
    </header>
  );
}