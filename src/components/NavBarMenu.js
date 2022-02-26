import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'

import { FaTimesCircle } from 'react-icons/fa';

import { GlobalContext } from '../contexts/GlobalContext';

import styles from '../styles/components/NavBarMenu.module.scss';

export function NavBarMenu() {
  const { openMenu, handleMenu } = useContext(GlobalContext);

  useEffect(() => {
    let menu = document.querySelectorAll("div #menu");
    let current = 0;

    if (openMenu) {
    console.log(menu);

    menu[current].classList.add('animate__zoomInUp');
      
    } else {
      menu[current].classList.remove('animate__zoomInUp');
    }

  }, [openMenu]);

  return (
    <>
      <div style={{ display: (openMenu ? 'block' : 'none')}} >
      <div id='menu' className={`
        ${['animate__animated']} 
        ${['animate__fast']} 
        ${[styles.menu]}
      `}>
        <div className={styles.menuHeader}>
          <button onClick={() => handleMenu(false)}>          
            <p>Fechar</p>
            <FaTimesCircle />
          </button>
        </div>
        
          <ul>
            <li>
              <button onClick={() => handleMenu(false)}>
              <Link href='/'>HOME</Link>
              </button>
            </li>

            <li>
              <button onClick={() => handleMenu(false)}>
              <Link href='/#'>SOBRE</Link>
              </button>
            </li>

            <li>
              <button onClick={() => handleMenu(false)}>
              <Link href='/#'>SERVIÇOS</Link>
              </button>
            </li>

            <li>
              <button onClick={() => handleMenu(false)}>
              <Link href='/contato'>CONTATO</Link>
              </button>
            </li>
          </ul>
      </div>
      </div>
    </>
  );
}
