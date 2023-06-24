import "../src/styles/global.css";
import Head from "next/head";
import React from "react";
import { roboto } from '../src/fonts/fonts';
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <main className={roboto.variable}>
        <Head>
          <title>Exchanger — приложение для обмена вещей</title>
          <link rel="icon" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
        </Head>
        <Component {...pageProps} />
      </main>
    </StyledEngineProvider>
  );
}

export default MyApp;
