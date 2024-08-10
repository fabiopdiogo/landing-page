import React from 'react';

import styled from 'styled-components';

import Cards from '../Elements/Cards';


const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%; 
`

const CardsFit = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  height: fit-content;

  @media(max-width:1100px){
    display: flex;
    flex-direction: column;
  }
`
const H1 = styled.h1`
  font-size:85px;
  color: orange;
  @media (max-width: 676px){
    font-size:45px;  
  }
`
interface Props{
  id: string
}

function Skills ({id}: Props){
  return( 
      <a id={id}>
        <DivMain>
          <H1> Meus trabalhos</H1>          
          <CardsFit>
            
              <Cards src="social_dev.png"/>
              <Cards src="form-cartao.png" />
              <Cards src="todo_list.png" />
              <Cards src="social_dev.png"/>
              <Cards src="form-cartao.png" />
              <Cards src="todo_list.png" />
              <Cards src="social_dev.png"/>
              <Cards src="form-cartao.png" />
              <Cards src="todo_list.png" />
              <Cards src="mandalorian.png" />
          </CardsFit>
        </DivMain> 
      </a>  
  )
}

export default Skills;