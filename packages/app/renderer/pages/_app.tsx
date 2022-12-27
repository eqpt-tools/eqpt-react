import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import usePortCheck from '../hooks/usePortCheck';
import { trpc } from '../helpers/trpc';

function App({ Component, pageProps }: AppProps) {
  usePortCheck();

  return (
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </>
  );
}

export default trpc.withTRPC(App);
