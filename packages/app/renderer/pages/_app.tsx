import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@local/graphql';
import usePortCheck from '../hooks/usePortCheck';

function App({ Component, pageProps }: AppProps) {
  usePortCheck();

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
