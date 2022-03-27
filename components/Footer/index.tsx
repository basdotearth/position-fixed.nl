import { FC } from 'react';

import { classMap } from 'support';

import style from './style.module.css';

const Footer: FC<{}> = () => (
  <footer className={classMap([style.footer, 'contain-width'])}>
    <p>
      Made in <span id="year">{ new Date().getFullYear() }</span> by Bas Klinkhamer.
      <small>Hello to Jason Isaacs and all Friends of DeSoto!</small>
    </p>
  </footer>
);

export default Footer;