import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from './styles/theme';
import AppRouter from './routes/Routes';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{
        initialColorMode: 'dark',
        useSystemColorMode: false
      }}>
        <AppRouter />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
