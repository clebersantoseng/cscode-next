import { useContext } from 'react';
import { FaHandPointRight, FaClipboardList } from 'react-icons/fa';

import Head from 'next/head';
import Link from 'next/link';
;
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/About.module.css';
import 'animate.css';
import { Footer } from '../components/Footer';


export default function About() {
  const { openMenu } = useContext(GlobalContext);    

  return (

    <>

    <Head>
      <title> CsCode | Sobre</title>
    </Head>

    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.aboutTitle}>
          <div className="animate__animated animate__faster animate__fadeInUpBig ">
            <p>QUEM SOMOS NÓS</p>
          </div>
        </div>
        
        <div className={styles.aboutSubtitle}>
          
          <div className="animate__animated animate__slowe animate__fadeInUpBig ">
            <p>Somos uma empresa</p>
            <p>de inovação digital.</p>
          </div>

          <div className="animate__animated animate__slower animate__lightSpeedInLeft ">
            <span>
              Somos uma equipe próxima de profissionais criativos. 
              Somos apaixonados por parcerias com boas pessoas e organizações 
              para fornecer soluções personalizadas excepcionais.
            </span>
          </div>

        </div>

        <div className={styles.technology}>
          <div className="">
            <p>Tecnologia</p>
          </div>

          <div className={styles.technologyGrid}>
            <div className={styles.technologyGridItem}>
              <img src="image/nodejs.png" atl="NodeJS"/>
            </div>

            <div className={styles.technologyGridItem}>
              <img src="image/react.png" atl="ReactJS"/>
            </div>

            <div className={styles.technologyGridItem}>
              <img src="image/react-native.png" atl="React Native"/>
            </div>

            <div className={styles.technologyGridItem}>
              <img src="image/next.png" atl="NextJS"/>
            </div>            
          </div>          
        </div>

        <section className={styles.informative}>
          <p>Vamos trabalhar juntos para construir algo ótimo.</p>
        </section>

        <aside>
          <div className="animate__animated animate__infinite animate__slowe animate__slideInLeft">
            
          </div>
          <div className={styles.contact}>
            <FaClipboardList />
            <Link href="/contato"><p>SOLICITE ORÇAMENTO</p></Link>
          </div>
        </aside>
                
      </div>
    </div>

    <Footer />

    </>

  );
}