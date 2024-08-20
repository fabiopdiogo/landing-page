import React from 'react';

import styled from 'styled-components'


const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
  gap: 20px;    
  padding-bottom: 80px;

  background-image: url('/fundo.jpg'); /* Adicione a imagem de fundo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixa o fundo na posição */
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
interface Props {
    id: string;
  }

function Redes ({ id }: Props){

  return(
    <PostContainer> 
        <Button href="https://www.instagram.com/glauberhenrique_arts/">
         <Img src="instagram.png"></Img>         
         <H1>Me siga no Instagram</H1>
        </Button> 
    </PostContainer>
  )
}

export default Redes;