"use client"

import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'
import GlobalStyles from '../styles/globals.js'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}