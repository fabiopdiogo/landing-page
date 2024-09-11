import React from 'react';

import styled from 'styled-components';

const A = styled.a`
  display: flex;
  align-items: center;  
  justify-content: center;   
  font-family: "Dosis", sans-serif;
  width: 100%;  
  color: #ececec;
  font-size:20px;
  &:link{
    text-decoration: none;
  }  

`


function Shortcut({ children, href, setMenuIsVisible }){
  var aux = 'x'
  aux.concat(href)
  return(
    <A href={href} onClick={() => setMenuIsVisible(false)}>{children}</A>
  )
}

export default Shortcut