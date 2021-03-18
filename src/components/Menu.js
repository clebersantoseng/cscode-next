import { FaInstagram, FaFacebook } from 'react-icons/fa';

import Head from 'next/head';

import { NavBar } from './NavBar';

import styles from '../styles/components/Menu.module.css';

export function Menu() {

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
            <div className={styles.primaryHeight}>
              <ul>
                <li><p>Home</p></li>
                <li><p>Sobre</p></li>
                <li><p>Contato</p></li>
              </ul>
            </div>
          </div>

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

      <div className={styles.footer}>
        <div>
        <img src="favicon.ico" alt="logo" />
        <p>© 2021 CS Code. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>

    </>
  );
}