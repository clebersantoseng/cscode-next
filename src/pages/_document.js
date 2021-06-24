import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="ico" />
          <meta name="description" content="CsCODE | Sua escolha inteligente" />
          <meta name="google-site-verification" content="-IHnTGBuJxcmrUHuzkeP-MXqydK4SIOFOa2SrRRX1ZM" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

          
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />



          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}