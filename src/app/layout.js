"use client"

import StyledComponentsRegistry from './registry'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'
import GlobalStyles from '../styles/globals.js'
import React, { useState } from 'react'
import { lightTheme, darkTheme } from "../styles/theme"

const StyledApp = styled.div`

  color: ${(props) => props.theme.fontColor};

  button:nth-child(1) {
    position: absolute;
    width: 3rem;
    height: 3rem;
    right: 1.9rem;
    top: .2rem;
    opacity: 0.2;
    cursor: pointer; 
    background: none; 
    border: none;

    @media (min-width: 1440px) {
      top: 1.4rem;
      right: 11.9rem;
    }
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