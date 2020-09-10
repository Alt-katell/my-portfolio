import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Theme from './Theme';

import Navbar from '../components/navigation/Navbar';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: #020422;
    background: white;
    font-family: 'Raleway';
    margin: 0;
    padding: 0;
    font-size: 18px;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  margin: 0 40px;
`

const Layout = ({children}) => {
  return (
    <Theme>
      <GlobalStyle/>
      <Navbar />
      <Container>
        {children}
      </Container>
    </Theme>
  )
}

export default Layout
