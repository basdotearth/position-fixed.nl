import { FC } from 'react';

import Education from '@components/Education';
import Projects from '@components/Projects';
import Static from '@components/Static';

import styles from './style.module.css';

const Home: FC<{}> = () => {
  return <main className={`${styles.home} container`}>
    <Static text="header-text" />
    <Projects title="Consultancy" filter="consultancy" />
    <Education />
    <Projects title="Personal" filter="personal" />
    <Static title="Hobbies &amp; Personal Life" text="hobbies" />
  </main>;
};

export default Home;