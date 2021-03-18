import { useContext } from 'react';
import { FaCircle } from 'react-icons/fa';

import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import { Menu } from '../components/Menu';
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const { openMenu } = useContext(GlobalContext);

  return (
    <>
    <Head>
      <title> CsCode | Desenvolvimento WEB</title>
    </Head>


    
    <NavBar />    
    { openMenu && <Menu /> }

      <div className={styles.container}>
      <div className={styles.slider}>
        <a href="#page-1"><FaCircle /></a>
        <a href="#page-2"><FaCircle /></a>
        <a href="#page-3"><FaCircle /></a>
      </div>

      <div className={styles.scrollContainer}>

        <div className={styles.scrollPage} id="page-1">
          <div className={styles.content}>
            <p>Cena 1</p>
          </div>
        </div>

        <div className={styles.scrollPage} id="page-2">
        <div className={styles.content}>
        <p>Cena 2</p>
            </div>          
        </div>

        <div className={styles.scrollPage} id="page-3">
        <div className={styles.content}>
        <p>Cena 3</p>
            </div>           
        </div>
      
      </div>
      </div>
    

      
   
     

    </>

  )
}
