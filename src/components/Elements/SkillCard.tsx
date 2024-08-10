import React from 'react';

import styled from 'styled-components';

const Div1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover{
    transform: translateY(-5px);   
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`

const Image = styled.img`
  width: 250px;
  height: 250px;

  @media (max-width: 1100px){
    width: 150px;
    height: 150px;
  }
`
const Text = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;  
`
const A = styled.a`
  &:link{
    text-decoration: none;
  }
`
interface Props {
  src: string;
  name: string;
}
function SkillCard({src,name}: Props){
  return(
    <Div1>      
      <Image src={src}/>
      <Text>{name}</Text>      
    </Div1>
  )
}

export default SkillCard;