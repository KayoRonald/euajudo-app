/* eslint arrow-body-style: ["error", "always"] */
import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../styles/theme/';

type PropsProvider = {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<PropsProvider> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{
        initialColorMode: 'dark',
        useSystemColorMode: false,
      }}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default ThemeProvider;
