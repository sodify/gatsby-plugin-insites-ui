import React from 'react'
import { ThemeProvider } from 'insites-ui'
import theme from './src/theme'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
