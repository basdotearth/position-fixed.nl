import useCustomColor from 'hooks/useCustomColor';
import { FC } from 'react';

import style from './style.module.css';

interface NavProps {
  darkModeActive: boolean;
  onDarkModeToggle: VoidFunction;
}

const Nav: FC<NavProps> = ({
  darkModeActive,
  onDarkModeToggle,
}) => (
  <nav className={style.nav}>
    <ul role="list">
      <li>
        <button
          className={useCustomColor('')} onClick={onDarkModeToggle}>
          {darkModeActive ? 'Light' : 'Dark'} Mode
        </button>
      </li>
      <li>
        <a
          className={useCustomColor([style.button, 'skip-link-styles'])}
          role="button"
          href="/assets/Bas%20Klinkhamer%20-%20CV.pdf"
          download="Bas Klinkhamer - CV.pdf">
          Download CV
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;