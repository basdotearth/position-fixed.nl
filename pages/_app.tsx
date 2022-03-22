import { FC } from 'react';
import { AppProps } from 'next/app';

import '@styles/globals.css';

const Application: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default Application;
