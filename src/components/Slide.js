import { useEffect } from 'react';
import styles from '../styles/components/Slide.module.css';

export default function Slide() {

  useEffect(() => {
    if (process.browser) {

        document.querySelector("#items")
        .addEventListener("wheel", Event => {
          if(Event.deltaY > 0) {
            Event.target.scrollBy(300, 0);

          } else {
            Event.target.scrollBy(-300, 0);
            
          }
        });
      }
  })
  
  return (

    <div className={styles.itemsWrapper} id="items-wrapper">
      <div className={styles.items}  id="items">
        <div className={styles.item} id="item">
          <main>
          <h1 className="animate__animated animate__faster animate__backInDown">
            Automação Comercial
          </h1>

          <p className="animate__animated animate__fast animate__backInLeft">
            Automatize processos por meio de equipamentos e sistemas práticos e seguros para gestão empresarial.
          </p>

          <img src="image/imac.png" />
          </main>
        </div>
        <div className={styles.item} id="item"><img src="image/responsive.png" /></div>
      </div>
    </div>

  );
}
