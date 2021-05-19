import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

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
              <h1 className="animate__animated animate__backInLeft">Gestão Comercial</h1>
              <p className=" animate__animated animate__fadeInLeft animate__delay-1s">Facilite a sua produção, automatize sua empresa !</p>
            </div>

            <img src="/image/dashboard.png" alt="Computador" />
          </section>
        </div>

      </div>
    </>

  )
}
