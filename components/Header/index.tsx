import { FC, useEffect, useState } from 'react';

import Nav from '../Nav';
import style from './style.module.css';
import { classMap } from 'support';

const Header: FC<{}> = () => {
  const [darkModeActive, setDarkModeActive] = useState<boolean>(false);
  useEffect(() => {
    const updateDarkModeState = () => {
      const isActive = JSON.parse(window.localStorage.getItem('darkModeActive') || 'false');
      setDarkModeActive(isActive);

      const fg = isActive ? 'white' : 'dark';
      const bg = isActive ? 'dark' : 'white';
      document.body.setAttribute('style', `--fg: var(--${fg}); --bg: var(--${bg});`);
    };

    window.addEventListener('updateDarkMode', updateDarkModeState);
    updateDarkModeState();

    return () => {
      window.removeEventListener('updateDarkMode', updateDarkModeState);
    };
  }, []);

  const toggleDarkMode = () => {
    const isActive = JSON.parse(window.localStorage.getItem('darkModeActive') || 'false');
    window.localStorage.setItem('darkModeActive', JSON.stringify(!isActive));
    window.dispatchEvent(new CustomEvent('updateDarkMode'));
  }

  return <header className={classMap([style.header, 'has-bg'])}>
    <img className={style.header__photo} src="/postcard.jpg" alt="A postcard with my person on it" />
    <Nav darkModeActive={darkModeActive} onDarkModeToggle={toggleDarkMode} />
  </header>;
};

export default Header;
