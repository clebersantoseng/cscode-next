import Head from 'next/head';

import Slide from '../components/Slide';

import styles from '../styles/pages/Home.module.css';

export default function Home() {

  return (
    <>
    <Head>
      <title> CsCode | Sua escolha inteligente.</title>
    </Head>    
      

      <div className={styles.container}>
        <Slide />

        

      </div>
    

      
   
     

    </>

  )
}
