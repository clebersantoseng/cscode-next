import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowCircleRight, FaChartPie, FaLaptopCode, FaShieldAlt, FaPhoneVolume } from 'react-icons/fa';

import Whatsapp from '../components/Whatsapp';

import styles from '../styles/pages/Home.module.scss';
import 'animate.css';
import { Footer } from '../components/Footer';

export default function Home() {

  return (
    <>
    <Head>
      <title> CsCode | Sua escolha inteligente.</title>
    </Head> 

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Assistência Técnica em Informática</h2>
          <h4>Tenha seu problema resolvido em instantes</h4>
          <button>Quero conhecer <FaArrowCircleRight className='animate__tada animate__animated  animate__slow animate__infinite '/></button>
        </div>

        <img src='image/informatica-cscode.png' alt="Cs Code Informática" />
      </div>

      <p className={styles.paragraph}>Trabalhamos com técnicos e especialistas formados em áreas tecnólogicas, 
      que amam o que fazem, e se empenham para resolver seu problema da
      melhor e mais rapida forma possivel.</p>
    </div>

    <footer className={styles.footer}>2022 CSCODE ALL RIGHT RESERVED.</footer>

      <Whatsapp />

    </>
  )
}
