import { useEffect, useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from 'react-icons/fa';

import { Container, Item } from './styles';
import 'animate.css';

export default function Slide() {

  useEffect(() => {
    let text = document.querySelectorAll("div #slider");
    let max = text.length;
    let currentTextIndex = 0;
    let time = 5000;
    

    function start() {
      setInterval(() => {
        nextText()
      }, time);
    }

    function nextText() {

      text[currentTextIndex].classList.remove("selected")

      currentTextIndex++
      
      if(currentTextIndex >= max) {
        currentTextIndex = 0
      }

      text[currentTextIndex].classList.add("selected")
    }
  
    window.addEventListener("load", start)
  },[])

  
  
  return (

    <Container>
      <div id="slider" className="selected">
        <h1>Gestão Comercial</h1>
        <p className=" animate__animated animate__slow animate__fadeInLeft">Facilite a sua produção, automatize sua empresa.</p>
      </div>

      <div id="slider">
        <h1>Assistência Técnica</h1>
        <p className=" animate__animated animate__slow animate__fadeInLeft">Tenha o seu problema resolvido em instantes.</p>
      </div>

      <div id="slider">
        <h1>Criação Web</h1>
        <p className=" animate__animated animate__slow animate__fadeInLeft">Exatamente como você precisa.</p>
      </div>   
      
    </Container>
  );
}
