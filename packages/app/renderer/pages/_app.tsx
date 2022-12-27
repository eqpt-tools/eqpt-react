import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import usePortCheck from '../hooks/usePortCheck';
import { trpc } from '../helpers/trpc';
import useTRPCClient from '../hooks/useTRPCClient';

function App({ Component, pageProps }: AppProps) {
  usePortCheck();

  const [queryClient] = useState(() => new QueryClient());
  const trpcClient = useTRPCClient();

  if (!trpcClient) return null;

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
