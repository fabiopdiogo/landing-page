import React from 'react';

import styled from 'styled-components';

const DivMain = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url('/glauber2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //width:100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    background-size: contain; /* Ajusta a imagem para caber na área disponível */
    height: 80vh;
  }

  @media (max-width: 768px) {
    background-size: cover;
    height: 60vh;
    padding: 15px;
  }

  @media (max-width: 480px) {
    background-size: cover;
    height: 50vh;
    //padding: 10px;
  }
`

const H1 = styled.h1`
  font-size: 85px;
  color: white;
  font-family: 'Lato', sans-serif;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 65px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`


interface Props{
  id: string
}

function About ({id}: Props){
  return( 
      <a id={id}>
      <DivMain>
        <H1> Glauber Arts Tatoo </H1>      
      </DivMain>   
      </a>
  )
}

export default About;