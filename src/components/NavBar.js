import { useContext } from 'react';
import { 
  FaBars, 
  FaTimesCircle, 
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/NavBar.module.scss';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export function NavBar() {
  const { openMenu, handleMenu } = useContext(GlobalContext);
  

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarList}>
          <ul className='animate__slideInDown animate__animated animate__delay'>
            <li>+5562 99612-1210</li>
            <li><FaWhatsapp /></li>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaEnvelope /></li>
            <li><FaPhone /></li>
          </ul>
        </div>

        <div className={styles.navbar}>
          <Link href='/'>
            <img src="/image/logo-cscode.png" alt="CsCODE" className='animate__slideInLeft animate__animated animate__delay'/>
          </Link>

          <nav className='animate__slideInRight animate__animated animate__delay' >
            <Link href='/'>HOME</Link>
            <Link href='/#'>SOBRE NÓS</Link>
            <Link href='/#'>SOLUÇÕES</Link>
            <Link href='/contato'>CONTATO</Link>
          </nav>
        </div>

        {/* NavBAR MOBILE */}

        <div className={styles.navbarMobile}>
          <Link href='/'>
            <img src="/image/logo-cscode.png" alt="CsCODE" className='animate__slideInLeft animate__animated animate__delay'/>
          </Link>

          <button>
            <FaBars />
          </button>
        </div>
      </div>

      

      {/* <div className={styles.navmobile}>
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
              <Link href='/#'>SOBRE</Link>
             </button>
            </li>

            <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='/#'>SERVIÇOS</Link>
             </button>
            </li>

            <li>
             <button onClick={() => handleMenu(false)}>
              <Link href='/contato'>CONTATO</Link>
             </button>
            </li>
         </ul>
      </div> */}
    </header>
  );
}