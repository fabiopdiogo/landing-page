import React from 'react';

import styled from 'styled-components'

import Projects from './Sections/Projects';
import About from './Sections/About';
import Contact from './Sections/Contact'
import Inicio from './Sections/Inicio';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;  
  //padding: 0px 45px;
  gap: 20px;    
  
  &:before, &:after{
    content: '';
    margin: auto;
  }    
  p{
    font-size: 20px;
  }

`
const H1 = styled.h1`
  font-size:85px;  
  color: orange;

  @media (max-width: 676px){
    font-size:45px;  
  }
`
function Content (){

  return(
    <PostContainer>           
      <Inicio id="beginning" />
      <About id="about"/>
      <Projects id="projects" />     
      <Contact id="contact"/>      
    </PostContainer>
  )
}

export default Content