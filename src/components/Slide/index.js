import { useEffect, useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from 'react-icons/fa';

import { Container, Item } from './styles';
import 'animate.css';

export default function Slide() {

  useEffect(() => {
    let text = document.querySelectorAll("div #slider");
    let element = document.querySelectorAll("div #slider h1");
    let paragraph = document.querySelectorAll("div #slider p");
    let max = text.length;
    let currentTextIndex = 0;
    let time = 5000;
    

    function start() {
      setInterval(() => {
        nextText()
      }, time);
    }

    function nextText() {

      element[currentTextIndex].classList.remove('animate__animated', 'animate__fadeInLeft');
      paragraph[currentTextIndex].classList.remove('animate__animated', 'animate__slow', 'animate__fadeInLeft');
      text[currentTextIndex].classList.remove("selected")


      currentTextIndex++
      
      if(currentTextIndex >= max) {
        currentTextIndex = 0
      }

      element[currentTextIndex].classList.add('animate__animated', 'animate__fadeInLeft');
      paragraph[currentTextIndex].classList.add('animate__animated', 'animate__slow', 'animate__fadeInLeft');
      text[currentTextIndex].classList.add("selected");
      
    }
  
    window.addEventListener("load", start)
  },[])

  
  
  return (

    <Container>
      <div id="slider" className="selected">
        <h1>Gestão Comercial</h1>
        <p>Facilite a sua produção, automatize sua empresa.</p>
      </div>

      <div id="slider">
        <h1>Assistência Técnica</h1>
        <p>Tenha o seu problema resolvido em instantes.</p>
      </div>

      <div id="slider">
        <h1>Criação Web</h1>
        <p>Exatamente como você precisa.</p>
      </div>   
      
    </Container>
  );
}
