import React, { useState} from "react";
import {useRef} from 'react'
import './style.css'
import styled,{ css } from "styled-components";
import Shortcut from "../Elements/Shortcut";

const Container= styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:5;
  align-items: center;
  justify-content: center;

  //background: rgb(2,0,36);
  //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,18,19,1) 0%, #ff0800 100%, rgba(0,212,255,1) 100%);
  background-image: url('/mao.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  pointer-events: none;
  transition: .1s;

  ${({ isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `  
  }
  
`
const DivMain = styled.div`  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;  
`
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
  width: 100%;
  gap: 5px;
`
const Close = styled.img`
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
`

const Button = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none; 
  color: white;
  font-weight: bold;
  font-size: 14px;
`
const Img = styled.img`
    width: 140px; /* Ajuste o tamanho da imagem conforme necessário */
    height: 140px;
    margin-right: 10px; /* Espaço entre a imagem e o texto */

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
`

function Menu({menuIsVisible,setMenuIsVisible} ){
  return(
    <Container isVisible={menuIsVisible}>
      <Close src="close.png" onClick={() => setMenuIsVisible(false)}/>
      <DivMain>
        <ButtonsDiv>          
              <Shortcut href="#inicio" onClick={() => setMenuIsVisible(false)}>Inicio</Shortcut>
              <Shortcut href="#about" setMenuIsVisible={setMenuIsVisible}>Sobre Mim</Shortcut>
              <Shortcut href="#projects" setMenuIsVisible={setMenuIsVisible}>Trabalhos</Shortcut>           
              <Shortcut href="#redes" setMenuIsVisible={setMenuIsVisible}>Redes</Shortcut>
        </ButtonsDiv>
        <Button href="https://www.instagram.com/glauberhenrique_arts/">
              <Img src="instagram.png"></Img>         
        </Button> 
      </DivMain>
    </Container>
  )
}

export default Menu;