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
  flex-direction: column;
  justify-content: start;
  margin-right: 150px;
  
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;    
`

const H1 = styled.h1`
  font-size:30px; 
  color: white;
  font-family: "Old English Text MT";
  @media (max-width: 676px){
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
    width: 140px; /* Ajuste o tamanho da imagem conforme necessário */
    height: 140px;
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
          <Button href="https://www.instagram.com/glauberhenrique_arts/">
            <Img src="instagram.png"></Img>         
            <H1>Me siga no Instagram</H1>
          </Button> 
          <LogoH1>Glauber Arts Tatoo</LogoH1>
          <ContatoDiv>
            <H1>Contato</H1>
            <Div><Img src="whatsapp2.png" /><P>(31)99268-6329</P></Div>
          </ContatoDiv>
          <ContatoDiv>
              <H1>Onde estamos</H1>
              <Div><Img src="local.png"/><P>Sabará - MG</P></Div>
          </ContatoDiv>
      </PostContainer>
      
    </a>
  )
}

export default Redes;