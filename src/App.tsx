import React, { Suspense } from 'react';
import ThemeProvider from './theme/';
import { Spinner } from './components';
const AppRouter = React.lazy(() => import('./routes/Routes'));

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
}
