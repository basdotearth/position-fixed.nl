import { FC } from 'react';

const Nav: FC<{ onDarkModeToggle: VoidFunction }> = ({
  onDarkModeToggle,
}) => (
  <nav className="site__header__nav">
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
        <button onClick={onDarkModeToggle}>Dark Mode</button>
      </li>
      <li>
        <a
          className="button"
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