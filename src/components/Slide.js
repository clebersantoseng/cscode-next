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
        <div className={styles.item} id="item"><img src="image/imac.png" /></div>
        <div className={styles.item} id="item"><img src="image/responsive.png" /></div>
      </div>
    </div>

  );
}
