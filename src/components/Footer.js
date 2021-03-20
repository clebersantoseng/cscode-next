import { useContext } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/Footer.module.css';

export function Footer() {

  const { scrollToTop } = useContext(GlobalContext);

  return(
    <div className={styles.content}>
      <footer>
        <p>© 2021 CsCode. All Right Reserved.</p>
        <div>
          <p>Volte para inicio</p>
          <button type="button" onClick={scrollToTop}><FaArrowCircleUp /></button>
        </div>
      </footer>
    </div>
  );
}