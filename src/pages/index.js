import { useContext, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import { Menu } from '../components/Menu';
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/Home.module.css';
import Slide from '../components/Slide';

export default function Home() {
  const { openMenu } = useContext(GlobalContext);

  return (
    <>
    <Head>
      <title> CsCode | Desenvolvimento WEB</title>
    </Head>    
      
    { openMenu && <Menu /> }

      <div className={styles.container}>
        <header>
          <NavBar /> 
        </header>

        <section>
          <Slide />
        </section>

      </div>
    

      
   
     

    </>

  )
}
