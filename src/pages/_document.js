import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="ico" />
          <meta name="description" content="Desenvolvimento WEB" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <noscript>Desenvolvimento WEB.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}