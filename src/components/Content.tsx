import React from 'react';
import styled from 'styled-components';
import Projects from './Sections/Projects';
import About from './Sections/About';
import Whatsapp from './Sections/Whatsapp';
import Inicio from './Sections/Inicio';
import Contato from './Sections/Contato';
import Redes from './Sections/Redes';
import Shortcut from './Elements/Shortcut';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black; 
  width: 100%;
  //padding: 0px 45px;
  
  &:before, &:after{
    content: '';
    margin: auto;
  }    
  p{
    font-size: 20px;
  }
`;

const H1 = styled.h1`
  font-size:85px;  

  @media (max-width: 676px){
    font-size:45px;  
  }
`;

const Open = styled.img`
  display: none;
  
  @media(max-width:1100px){
    display:flex;
    position: absolute;
    top: 1px;
    right: 1px;
    padding: 20px;
    cursor: pointer;
  }
`;

interface Props {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content: React.FC<Props> = ({ setMenuIsVisible }) => {
  return (
    <>
      <Open src="menu.png" onClick={() => setMenuIsVisible(true)} />
      <PostContainer>
        <Inicio setMenuIsVisible={setMenuIsVisible} id="beginning" />
        <Projects id="projects" />
        <About id="about" />
        <Whatsapp id="contact" />
        <Redes id="redes" />
      </PostContainer>
    </>
  );
};

export default Content;
