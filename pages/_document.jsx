import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/qtr6hem.css' />
      </Head>
      <body className='flex flex-col min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
