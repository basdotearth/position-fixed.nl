import { FC } from 'react';

import Nav from '../Nav';
import styles from './style.module.css';

const Header: FC<{}> = () => (
  <header className="site__header" id="header">
    <div className="site__header__inner container">
      <Nav />
      <div className="site__header__logo has-color"></div>
    </div>
  </header>
);

export default Header;
