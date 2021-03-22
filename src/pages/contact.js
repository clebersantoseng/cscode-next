import { useContext } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarker, FaPaperPlane } from 'react-icons/fa';

import Head from 'next/head';

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/Contact.module.css';
import 'animate.css';
import { Footer } from '../components/Footer';


export default function Contact() {
  const { openMenu } = useContext(GlobalContext);  

  return (
    <>

    <Head>
      <title> CsCode | Contato</title>
    </Head>

    <NavBar />
    { openMenu && <Menu /> }

    <div className={styles.container}>
      <div className={styles.content}>
      
      <div className={styles.contactTitle}>
        <p>ENTRE EM CONTATO</p>
      </div>

      <div className={styles.contactSubtitle}>
        <p>Vamos implantar os seus Negócios na area digital juntos ?</p>
      </div>

      <section>
        <div className={styles.contactInfo}>
          <h1>Contato</h1>
          <p>Tem um projeto ou ideia que gostaria de colaborar conosco?</p>

          <ul>
            <li>
              <FaPhoneAlt />
              <a>062 99612-1210</a>
            </li>

            <li>
              <FaWhatsapp />
              <a>5562 99612-1210</a>
            </li>

            <li>
              <FaEnvelope />
              <a>contato@cscode.com.br</a>
            </li>

            <li>
              <FaMapMarker />
              <a>Rua Antônio Miguel de Castro, Vianópolis GO</a>
            </li>
          </ul>
        </div>

        <div className={styles.contactForm}>
          <h1>Formulário de Contato</h1>

          <form>
            <div className={styles.inputGroup}>
              <input placeholder="Nome"/>
              <input placeholder="E-mail" type="email"/>
            </div>

            <textarea placeholder="Mensagem" rows="5" />

            <button type="submit"><FaPaperPlane />Enviar</button>
          </form>
        </div>
      </section>
      
      
      </div>
    </div>

    <Footer />

    </>

  );
}