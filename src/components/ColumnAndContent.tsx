import { useState } from "react";
import styled from 'styled-components'
import React from 'react';
import Column from './Column';
import Menu from './Menu/Menu';

const StyledFlex = styled.div`
  display: flex;      
  background-color: #121213;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: auto;
  overflow-y: auto;  
  overflow-x: hidden;
`
interface Props{
  children: React.ReactNode;
}

function ColumnAndContent({children}: Props){
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (      
      <StyledFlex>
        <Menu
         menuIsVisible={menuIsVisible}
         setMenuIsVisible={setMenuIsVisible}         
         />
        <Column setMenuIsVisible={setMenuIsVisible}/>
        <StyledContainer>
          {children}
        </StyledContainer>
      </StyledFlex>    
  )
}

export default ColumnAndContent