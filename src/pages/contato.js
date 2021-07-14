import { useContext, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarker, FaPaperPlane } from 'react-icons/fa';

import Head from 'next/head';
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/Contact.module.css';
import 'animate.css';
import { Footer } from '../components/Footer';
import Maps from '../components/Maps';


export default function Contato() {
  const { openMenu } = useContext(GlobalContext); 

  

  return (
    <>

    <Head>
      <title> CsCode | Contato</title>
    </Head>

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <h1>Contato</h1>
        </header>

        <main>
          <div className={styles.contatoLeft}>

            <ul>
              <li><FaPhoneAlt/><h2>62 9</h2><h1>9612-1210</h1></li>
              <li><FaWhatsapp/><h2>62 9</h2><h1>9612-1210</h1></li>
              <li><FaEnvelope /><h1>suporte@cscode.com.br</h1></li>
              <li><FaMapMarker/><h1>Rua Jóse Issy, n349 - Centro - Vianópolis GO</h1></li>
            </ul>
          </div>

          <div className={styles.contatoRight}>
            <form>
              <input type="text" placeholder="Nome"/>
              <input type="email" placeholder="E-mail"/>
              <textarea placeholder="Assunto" />
              <button><FaPaperPlane/>Enviar</button>
            </form>
          </div>
        </main>

        <aside>
        <Maps/>
        </aside>

        <Footer />
      </div>
    </div>

    </>

  );
}

