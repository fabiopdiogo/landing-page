import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  color: white;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
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
  background-image: url('/glauber2.jpeg'); /* Adicione a imagem de fundo */
  background-size: cover; /* Garante que a imagem cubra toda a área de fundo */
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixa o fundo na posição */
  background-position-y: -250px;
  
  min-height: 100vh; /* Garante que o contêiner ocupe pelo menos a altura total da tela */ 
  padding: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 646px) {
    background-size: auto 100%; /* Mantém a altura total sem distorcer a largura */
    background-position: center center; /* Centraliza a imagem completamente */
    background-repeat: no-repeat;
    background-attachment: scroll; /* Para evitar problemas de rolagem */
    background-position-y: 0; /* Remove o offset vertical */
    min-height: 100vh;
  }
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




`;

const P = styled.p`
  color: white;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 28px;
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
        <H1>Olá, eu sou Glauber Henrique!</H1>
        <Content>
          <P>
          Sou de Sabará,Minas Gerais.
Com 33 anos e 4 anos de experiência como tatuador, sempre fui apaixonado por arte.<br/> Desde pequeno, estive inserido em um universo criativo que envolve música, graffiti e skate. Essa conexão com a arte moldou meu estilo e minha abordagem na tatuagem.<br/>

Hoje, me especializo em realismo e custom lettering, buscando sempre aprimorar minhas habilidades por meio de workshops e mentorias com os melhores profissionais do mercado. Acredito que a evolução constante é fundamental para oferecer o melhor aos meus clientes.<br/>

Além disso, estou explorando novas formas de expressão artística através da pintura em telas, sempre levando essa paixão para cada tatuagem que crio. Meu objetivo é não apenas atender às expectativas dos meus clientes, mas superá-las, buscando reconhecimento no mercado pela qualidade e originalidade do meu trabalho.<br/>

Se você está em busca de uma tatuagem única e feita com carinho, estou aqui para transformar suas ideias em arte!          </P>
        </Content>
      </DivMain>
    </a>
  );
}

export default About;
