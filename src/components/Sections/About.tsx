import React from 'react';

import styled from 'styled-components';

import Cards from '../Elements/Cards';

const H1 = styled.h1`
  font-size:85px;
  color: orange;
  @media (max-width: 676px){
    font-size:45px;
  }
`
const DivMain = styled.section`
  display: flex;
  flex-direction: column;
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
`
const P = styled.p`
  display: flex;
  color: white;
`

interface Props{
  id: string
}

function About ({id}: Props){
  return( 
      <a id={id}>
      <DivMain>
        <H1> Sobre mim </H1>        
        
        <Content>
          <P> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
 
          </P>         
        </Content> 
      </DivMain>   
      </a>
  )
}

export default About;