/* eslint-disable import/no-extraneous-dependencies */
import "../src/styles/global.css";
import Head from "next/head";
import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { roboto } from "../src/fonts/fonts";
import { wrapper } from "../src/store/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
