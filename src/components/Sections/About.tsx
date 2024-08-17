import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 85px;
  color: white;
  text-align: center;

  @media (max-width: 676px) {
    font-size: 45px;
  }
  
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const DivMain = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url('/glauber3.jpg'); /* Adicione a imagem de fundo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixa o fundo na posição */
  
  min-height: 100vh; /* Garante que o contêiner ocupe pelo menos a altura total da tela */
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const P = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

interface Props {
  id: string;
}

function About({ id }: Props) {
  return (
    <a id={id}>
      <DivMain>
        <H1>Sobre mim</H1>
        <Content>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </P>
        </Content>
      </DivMain>
    </a>
  );
}

export default About;
