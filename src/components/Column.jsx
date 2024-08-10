import React from 'react';

import styled from 'styled-components';
import Shortcut from './Elements/Shortcut';

const DivMain = styled.main`
  display: flex;  
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;

  @media(max-width:1100px){
    display: none;
  }
`
const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;    
  width: 100%;
  gap: 5px;
`

const Socials = styled.span`
  display: flex;
  align-items: center;  
  justify-content: center;
  gap: 5px;
`
const Image = styled.img`
  width: 24px;
  height:24px;
`

const Open = styled.img`
  display: none;
  
  @media(max-width:1100px){
  display:flex;
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
  }
`

function Column ({setMenuIsVisible}){

  return(   
    <>
      <Open src="menu-squared-50.png" onClick={() => setMenuIsVisible(true)}/>
      <DivMain>
          <ButtonsDiv>
                <Shortcut href="#beginning">Inicio</Shortcut>          
                <Shortcut href="#about">Sobre</Shortcut>
                <Shortcut href="#projects">Projetos</Shortcut>
                <Shortcut href="#contact">Contato</Shortcut>
          </ButtonsDiv>
      </DivMain>
    </>

  )
}
export default Column