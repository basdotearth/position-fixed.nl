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
      {/*

      OLD NAV PORTED FROM 11ty VERSION

      <li>
        <a 
          aria-current={ currentUrl === page.url && 'page'}
          href="/">
          Home
        </a>
      </li>

      blogPages.map(page => (
        <li>
          <a
            aria-current={ currentUrl === page.url && 'page'}
            href={ page.url }>
            { page.data.title }
          </a>
        </li>
      ))
      */}
      <li>
        <button onClick={onDarkModeToggle}>
          {darkModeActive ? 'Light' : 'Dark'} Mode
        </button>
      </li>
      <li>
        <a
          className={`${style.button} skip-link-styles`}
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