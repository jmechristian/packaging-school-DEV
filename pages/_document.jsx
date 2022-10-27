import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@300;400;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-slate-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
