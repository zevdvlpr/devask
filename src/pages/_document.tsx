import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
