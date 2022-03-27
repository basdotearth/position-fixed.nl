import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC<{}> = () => {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Sedgwick+Ave:wght@400&display=swap"
    rel="stylesheet"></link>
      </Head>
      <body className='has-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;
