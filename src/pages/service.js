import React from 'react';
import Head from 'next/head';

import { FaAngleDoubleRight, FaTools, FaLaptopCode, FaChartPie } from 'react-icons/fa';

import styles from '../styles/pages/Service.module.css';

export default function Service() {
  return(
    <>
    <Head>
      <title> CsCode | Serviços</title>
    </Head>

    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <p>Home <FaAngleDoubleRight /> Serviços</p>
        </header>

        <section>
          <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form.</p>
        </section>

        <aside>
          <FaChartPie />
          <h1>Gestão Comercial</h1>
        </aside>

        <aside>
          <FaTools />
          <h1>Assistência Técnica</h1>
        </aside>

        <aside>
          <FaLaptopCode />
          <h1>Web Designer</h1>
        </aside>
      </div>
    </div>
    </> 
  );
}
