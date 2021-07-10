import React from 'react';
import AppRouter from './routes/Routes';
import ThemeProvider from './theme/'

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>  
  );
}
