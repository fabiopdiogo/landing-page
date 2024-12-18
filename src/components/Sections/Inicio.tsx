import React from 'react';
import styled from 'styled-components';
import Shortcut from '../Elements/Shortcut';

const DivMain = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url('/glauber1.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 80px; /* Espaço para o menu fixo */
  

  @media (max-width: 1024px) {
    background-size: contain;
    height: 80vh;
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    background-size: cover;
    height: 60vh;
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    background-size: cover;
    height: 50vh;
    padding-top: 40px;
  }
`;

const H1 = styled.h1`
  font-size: 150px;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 600;
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 105px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
    
`;

const DivMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ajusta o espaço entre o logo e os botões */
  padding: 10px 20px; /* Ajusta o padding da barra */

  background-size: cover;
  z-index: 1000;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const LogoH1 = styled(H1)`
  font-size: 40px;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; /* Espaçamento entre os botões */
  margin-right: 40px;
`;

interface Props {
  id: string;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Inicio: React.FC<Props> = ({ id, setMenuIsVisible }) => {
  return (
      <a id={id}>
        <DivMenu>
          <LogoH1>Glauber Art's Tattoo</LogoH1>
          <ButtonsDiv>
            <Shortcut setMenuIsVisible={setMenuIsVisible} href="#beginning">Inicio</Shortcut>
            <Shortcut setMenuIsVisible={setMenuIsVisible} href="#about">Sobre</Shortcut>
            <Shortcut setMenuIsVisible={setMenuIsVisible} href="#projects">Projetos</Shortcut>
            <Shortcut setMenuIsVisible={setMenuIsVisible} href="#contact">Contato</Shortcut>
          </ButtonsDiv>
        </DivMenu>
        <DivMain>
          <H1>Glauber Art's Tattoo</H1>
        </DivMain>
      </a>
  );
}

export default Inicio;
