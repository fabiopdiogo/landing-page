import React from 'react';

import styled from 'styled-components'


const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 80px;

  background-image: url('/fundo.jpg'); /* Adicione a imagem de fundo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixa o fundo na posição */


`

const ContatoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin-right: 50px;
  gap: 200px;

  @media (max-width: 759px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    align-items: center;
    justify-content: start;
    gap: 20px; /* Reduz o espaçamento entre os itens */
    margin-right: 0; /* Remove a margem para centralizar melhor */
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;    

  @media (max-width: 759px) {
    flex-direction: column;
    align-items: center; /* Centraliza os itens para telas menores */
    text-align: center; /* Centraliza o texto */
  }

  @media (max-width: 413px) {
    flex-direction: column;
    align-items: start; /* Centraliza os itens para telas menores */
    text-align: start; /* Centraliza o texto */
  }
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;

  @media (max-width: 759px) {
    justify-content: center; /* Centraliza os itens na tela */
  }
`;

const Div3 = styled.div`

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 155px;

    @media (max-width: 759px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 5px;
  }
`;

const H1 = styled.h1`
  font-size:30px; 
  color: white;
  font-family: "Bebas Neue", sans-serif;
  @media (max-width: 759px){
    font-size:45px;  
  }
  @media (max-width: 480px){
    font-size:25px;  
  }
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
   width: 30px;
   height: 30px;
    margin-right: 10px; /* Espaço entre a imagem e o texto */

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
`
const LogoH1 = styled(H1)`
  font-size: 40px;
  margin: 0;
  text-align: left; /* Alinha o logo à esquerda */
  color: white;  

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 25px;
  }

`;

const P = styled.h2`
  color: white;
  line-height: 1.5;
  text-align: justify;
  font-family: "New Amsterdam", system-ui;
  font-weight: 100;
  font-style: normal;
  margin: 0;
  font-size: 20px;
`;


interface Props {
    id: string;
  }

function Redes ({ id }: Props){

  return(
    <a id={id}>
      <PostContainer>           
          <ContatoDiv>
            <Div1>
              <Button href="https://www.instagram.com/glauberhenrique_arts/">
                <Img src="instagram.png"></Img>         
                <H1>Me siga no Instagram</H1>
              </Button> 
              <LogoH1><Button href="https://www.instagram.com/glauberhenrique_arts/"> <H1>@glauberhenrique_arts</H1></Button></LogoH1>
            </Div1>
            <Div3>
              <Div1>
                <H1>Contato</H1>
                <Div2><Img src="whatsapp2.png" /><P>(31)99268-6329</P></Div2>
              </Div1>            
              <Div1>
                <H1>Onde estamos</H1>
                <Div2><Img src="local.png"/><P>Sabará - MG</P></Div2>
              </Div1>
            </Div3>
            
          </ContatoDiv>
      </PostContainer>
      
    </a>
  )
}

export default Redes;