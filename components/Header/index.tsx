import { FC, useEffect } from 'react';

import Nav from '../Nav';
import style from './style.module.css';

const Header: FC<{}> = () => {
  useEffect(() => {
    const updateDarkModeState = () => {
      const isActive = JSON.parse(window.localStorage.getItem('darkModeActive') || 'false');
      const fg = isActive ? 'white' : 'dark';
      const bg = isActive ? 'dark' : 'white';
      document.body.setAttribute('style', `--fg: var(--${fg}); --bg: var(--${bg});`);
    };

    window.addEventListener('updateDarkMode', updateDarkModeState);
    return () => {
      window.removeEventListener('updateDarkMode', updateDarkModeState);
    };
  }, []);

  const toggleDarkMode = () => {
    const isActive = JSON.parse(window.localStorage.getItem('darkModeActive') || 'false');
    window.localStorage.setItem('darkModeActive', JSON.stringify(!isActive));
    window.dispatchEvent(new CustomEvent('updateDarkMode'));
  }

  return <header className={style.header} id="header">
    <div className={`${style['header__inner']} contain-width`}>
      <Nav onDarkModeToggle={toggleDarkMode} />
      <div className={`${style['header__logo']} has-color`}></div>
    </div>
  </header>;
};

export default Header;
