import React from 'react';
import styled from 'styled-components';

const Div1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);   
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000; /* Garante que o botão fique acima de outros elementos */
  }
`

const Image = styled.img`
  width: 60px; /* Ajuste o tamanho da imagem conforme necessário */
  height: 60px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const A = styled.a`
  &:link {
    text-decoration: none;
  }
`

const H1 = styled.h1`
  font-size: 85px;  
  color: white;

  @media (max-width: 676px) {
    font-size: 45px;  
  }
`

interface Props {
  id: string;
}

function Contact({ id }: Props) {
  return (
    <>
      <H1>Entre em contato</H1>
      <Div1>    
        <A href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5531992686329%3Ftext%3DOl%25C3%25A1%2BGlauber%2Btudo%2Bbem%2B%253F%2Bgostaria%2Bde%2Bfazer%2Bum%2Bor%25C3%25A7amento%2Bcom%2Bvoc%25C3%25AA%2521&e=AT2gH2pkd7tFxgoRMWN9kfT9cx9ugen46qNPCLThsF9NyWwAeeosGO8-c23vYbaHdJmIsO2NGoIySqY96tiWPv7z7aK8d9gI6UJPsA">
          <Image src="whatsapp.png" /> 
        </A>  
      </Div1>
    </>
  )
}

export default Contact;
