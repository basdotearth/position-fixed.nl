import { FC } from 'react';

import styles from './style.module.css';

const Footer: FC<{}> = () => (
  <footer className="site__footer container">
    <p>
      Made in <span id="year">{ new Date().getFullYear() }</span> by Bas Klinkhamer.
      <small>Hello to Jason Isaacs and all Friends of DeSoto!</small>
    </p>
  </footer>
);

export default Footer;