import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import './index.css';

export default class WishApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Iglesia Caminando con Jesús</title>
          <meta name="viewport" content="width=device-width" />
          <meta
            name="description"
            content="Iglesia Caminando con Jesús. Puesto los ojos en Jesús"
          />
        </Head>
        <Component {...pageProps} />
        <div id="modal-root" />
      </>
    );
  }
}
