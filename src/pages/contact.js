import { useContext } from 'react';

import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/pages/Home.module.css';
import 'animate.css';


export default function Contact() {
  const { openMenu } = useContext(GlobalContext);

  

  return (
    <>
    <NavBar />
    { openMenu && <Menu /> }

    <div className={styles.container}>
      <h1>Contato</h1>
    </div>

    </>

  );
}