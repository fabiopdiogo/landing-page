import React from 'react';
import styled from 'styled-components';

const Div1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Garante que o botão fique acima de outros elementos */

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
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #25D366; /* Cor do botão WhatsApp */
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128C7E; /* Cor do botão WhatsApp no hover */
  }
`;

const Image = styled.img`
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: 40px;
  margin-right: 10px; /* Espaço entre a imagem e o texto */

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Text = styled.span`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const H1 = styled.h1`
  font-size: 85px;  
  color: white;

  @media (max-width: 676px) {
    font-size: 45px;  
  }
  @media (max-width: 480px) {
    font-size: 35px;  
  }
`;

interface Props {
  id: string;
}

function Whatasapp({ id }: Props) {
  return (
    <>     
      <Div1>    
        <Button href="https://wa.me/5531992686329?text=Olá%20Glauber,%20tudo%20bem%3F%20Gostaria%20de%20agendar%20um%20horário%20para%20um%20orçamento%21">
          <Image src="whatsapp.png" alt="WhatsApp" />
          <Text>Agende seu horário</Text>
        </Button>
      </Div1>
    </>
  )
}

export default Whatasapp;
