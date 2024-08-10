import React from 'react';

import styled from 'styled-components';


const Div1 = styled.section`
  background-color: orange;  
  &:hover{
    transform: translateY(-5px);   
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`

const Image = styled.img`  
  width: 100%;
  @media(max-width:1100px){
    object-fit: cover;
  } 
`

const Text = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;  
`

interface Props {
  src: string;
}

function Card({src}: Props){
  return(
    <Div1>
      <Image src={src}/>
      <Text>foto de tatuagem</Text>
    </Div1>
  )
}

export default Card;