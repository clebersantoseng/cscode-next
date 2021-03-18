import { useContext } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import Head from 'next/head';
import Link from 'next/link';

import { NavBar } from './NavBar';
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/Menu.module.css';
import 'animate.css';

export function Menu() {
  const { handleMenu } = useContext(GlobalContext);

  return (
    <>
    <Head>
      <title> CsCode | Menu</title>
    </Head>    

    <div className={styles.menuOverlay} >
      <NavBar />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          <div className={styles.primaryNav}>
            <div className='animate__animated animate__backInLeft'>
              <div className={styles.primaryHeight}>
                <ul>
                  <li>
                    <Link href="/" >
                      <button type="button" onClick={handleMenu}>
                        Home
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" >
                      <button type="button" onClick={handleMenu}>
                        Sobre
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" >
                      <button type="button" onClick={handleMenu}>
                        Contato
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__backInRight">
            <div className={styles.companyInfo}>
            
              <a href="#" className={styles.info}>hello@cscode.com.br</a>
              <br />
              <a href="#" className={styles.info}>+5562 99612-1210</a>

              <div className={styles.infoAddress}>
                <p>183 Antônio Miguel de Castro, Michelle 75265-000</p>
                <p>Vianópolis GO.</p>
              </div>

              <ul>
                <li><FaInstagram /></li>
                <li><FaFacebook /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <div className="animate__animated animate__backInUp">
          <img src="image/logo-color.png" alt="logo" />
          <p>© 2021 CsCode. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>

    </>
  );
}