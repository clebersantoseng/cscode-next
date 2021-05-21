import Head from 'next/head';
import Link from 'next/link';
import { FaChartPie, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';


import styles from '../styles/pages/Home.module.css';
import 'animate.css';

export default function Home() {

  return (
    <>
    <Head>
      <title> CsCode | Sua escolha inteligente.</title>
    </Head> 

      <div className={styles.container}>

        <div className={styles.wrapper}>
          <section>
            <div className={styles.slideText}>
              <h1 className="animate__animated animate__faster animate__backInLeft">Gestão Comercial</h1>
              <p className=" animate__animated animate__slow animate__fadeInLeft">Facilite a sua produção, automatize sua empresa !</p>
            </div>

            <img src="/image/dashboard.png" alt="Computador" />
          </section>

          <aside>
            <div className={styles.wrapperGrid}>
              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                  <h1><FaShieldAlt /> Assistência Técnica</h1>
                  <p>Trabalhamos com técnicos e especialistas formados em áreas tecnólogicas, que amam o que fazem, e se empenham para resolver seu problema da melhor e mais rapida forma possivel.</p>
                </div>

                <Link href="#">Saiba mais</Link>
              </div>

              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                  <h1><FaChartPie /> Gerenciamento</h1>
                  <p>Disponibilizamos as melhores práticas de gestão atraves de softwares e serviços que ajuda voce a empreender e tomar decições que seu negócio precisa.</p>
                </div>

                <Link href="#">Saiba mais</Link>
              </div>

              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                <h1><FaLaptopCode />Sob Medida</h1>
                <p>Uma empresa especializada em desenvolvimento web, como criação de sites, sistemas web e aplicativos mobile, sob medida de acordo com que sua empresa necessita.</p>
                
                </div>
                <Link href="#">Saiba mais</Link>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </>

  )
}
