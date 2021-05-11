import { useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from 'react-icons/fa';

import { Container, Dots, Pointer } from './styles';

export default function Slide() {

  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [current, setCurrent] = useState(1);  

  function SliderUp(x) {
    if ( current >= 1 && current < 3) {
      setCurrent( current + x);
    } 
  }

  function SliderDown(x) {
    if ( current <= 3 && current > 1) {
      setCurrent( current + x);
    } 
  }

  function Indicator(x) {
    setCurrent(x);
  }

  console.log(current);
  
  return (

    <Container>
       <img src="image/imac.png" style={{ display: 'block' }} />
       <img src="image/imac.png" style={{ display: 'none' }} />
      
      <Dots>
        <button onClick={() => SliderDown(-1)}><FaChevronCircleLeft /></button>
        <button onClick={() => SliderUp(1)}><FaChevronCircleRight /></button>
      </Dots>

      <Pointer>
        <FaCircle />
        <FaCircle />
        <FaCircle />
      </Pointer>
    </Container>

    // <div className={styles.itemsWrapper} id="items-wrapper">
    //   <div className={styles.items}  id="items">
    //     <div className={styles.item} id="item">
    //       <main>
    //       <h1 className="animate__animated animate__faster animate__backInDown">
    //         Automação Comercial
    //       </h1>

    //       <p className="animate__animated animate__fast animate__backInLeft">
    //         Automatize processos por meio de equipamentos e sistemas práticos e seguros para gestão empresarial.
    //       </p>

    //       <img src="image/imac.png" />
    //       </main>
    //     </div>
    //     <div className={styles.item} id="item"><img src="image/responsive.png" /></div>
    //   </div>
    // </div>

  );
}
