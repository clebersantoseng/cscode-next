import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaChartPie, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';


import styles from '../styles/pages/Home.module.css';
import 'animate.css';
import Slide from '../components/Slide';

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
              {/* <h1 className="animate__animated animate__faster animate__backInLeft">Gestão Comercial</h1>
              <p className=" animate__animated animate__slow animate__fadeInLeft">Facilite a sua produção, automatize sua empresa !</p> */}

              <Slide />
            </div>

            <img src="/image/dashboard.png" alt="Computador" />
          </section>

          <aside>
            <div className={styles.wrapperGrid}>              

              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                  <h1><FaChartPie /> Gerenciamento</h1>
                  <p>
                    Disponibilizamos as melhores práticas de gestão atraves de softwares e serviços, 
                    que ajuda você a empreender e tomar decisões que seu negócio precisa.
                  </p>
                </div>

                <Link href="#">Saiba mais</Link>
              </div>

              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                  <h1><FaShieldAlt /> Manutenção</h1>
                  <p>
                    Trabalhamos com técnicos e especialistas formados em áreas tecnólogicas, que 
                    amam o que fazem, e se empenham para resolver seu problema da melhor e mais 
                    rápida forma possível.
                  </p>
                </div>

                <Link href="#">Saiba mais</Link>
              </div>

              <div className={styles.gridItem}>
                <div className={styles.gridText}>
                <h1><FaLaptopCode />Sob Medida</h1>
                <p>
                  Uma empresa especializada em desenvolvimento web, como criação de sites, 
                  sistemas web e aplicativos mobile, sob medida de acordo com que sua 
                  empresa necessita.
                </p>
                
                </div>
                <Link href="#">Saiba mais</Link>
              </div>
            </div>
          </aside>
        </div>

      </div>

      <div className={styles.ambrosio}>
        <div className={styles.container}>
          <div className={styles.wrapperAmbrosio}>
          <section>
            <img 
              src="/image/ambrosio.svg" 
              alt="Ambrosio"
            />

            <h2>
              Tudo que sua empresa precisa,
              para ficar cada vez mais próximo de seus clientes.
            </h2>
            
            <h2>
              Ofereça aos seus clientes um serviço de excelência e único no mercado.
            </h2>

            <div className={styles.store}>
              <img src="/image/appstore.png" alt="App Store" />
              <img src="/image/playstore.png" alt="Play Store" />
            </div>

            <p>
              Delivery | Take-Away | Restaurantes | Pastelarias | Padarias 
            </p>

          </section>

          <img 
            src="/image/ambrosio.png" 
            alt="Ambrosio Delivered" 
            className="animate__animated animate__slower animate__pulse animate__infinite"
          />

          </div>
        </div>
      </div>
    </>

  )
}
