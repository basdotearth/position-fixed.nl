import { FC } from 'react';

import Education from '@components/Education';
import Projects from '@components/Projects';
import Static from '@components/Static';

import style from './style.module.css';

const Home: FC<{}> = () => {
  return <main className={`${style.home} contain-width`}>
    <Static text="header-text" />
    <Projects title="Consultancy" filter="consultancy" />
    <Education />
    <Projects title="Personal &amp; Side-projects" filter="personal" />
    <Static title="Hobbies &amp; Personal Life" text="hobbies" />
  </main>;
};

export default Home;