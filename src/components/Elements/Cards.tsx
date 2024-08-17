import React from 'react';

import styled from 'styled-components';


const Div1 = styled.section`

`

const Image = styled.img`  
  width: 50%;
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
    </Div1>
  )
}

export default Card;