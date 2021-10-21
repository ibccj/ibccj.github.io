import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

export default class WishApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Iglesia Bautista Caminando con Jesús</title>
          <meta name="viewport" content="width=device-width" />
          <meta
            name="description"
            content="Iglesia Bautista Caminando con Jesús - Puesto los ojos en Jesús"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <div id="modal-root" />
      </>
    );
  }
}
