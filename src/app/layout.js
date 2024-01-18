"use client"

import StyledComponentsRegistry from './registry'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'
import GlobalStyles from '../styles/globals.js'
import React, { useState } from 'react'
import { lightTheme, darkTheme } from "../styles/theme"

const StyledApp = styled.div`

  color: ${(props) => props.theme.fontColor};

  button, label {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 19px;
    top: 2px;
    opacity: 0.2;
    cursor: pointer; 
    background: none; 
    border: none; 
  }
`;

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
        <GlobalStyles />
        <StyledApp> <button id='button' onClick={() => themeToggler()}></button>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StyledApp>
        </ThemeProvider>
      </body>
    </html>
  )
}