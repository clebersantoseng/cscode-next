import { useContext } from 'react';

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/About.module.css';
import 'animate.css';


export default function About() {
  const { openMenu } = useContext(GlobalContext);

  

  return (

    <>
    <NavBar />
    { openMenu && <Menu /> }

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
      </div>
    </div>

    </>

  );
}