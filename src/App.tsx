import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'

import Column from './components/Column'
import Content from './components/Content';
import ColumnAndContent from './components/ColumnAndContent';
import Menu from './components/Menu/Menu';

const Box = styled.div`
  display: flex;  
  flex-direction: column;    
  background-color: black;
  height: 100vh;
  width: 100%; 
`

function App() { 
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (   
    <Box>
        <Menu menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <Column setMenuIsVisible={setMenuIsVisible}/>
        <Content/>              
    </Box>
  );
}

export default App;
