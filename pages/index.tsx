import { FC } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { createClient } from 'contentful';

import Education from '@components/Education';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Projects from '@components/Projects';

import { printStaticText } from '../support';
import metaTags from '../support/metaTags';
import type {
  IEducationFields,
  IProjectFields,
  IStaticTextsFields,
} from '../@types/generated/contentful';


interface HomeProps {
  consultancy: IProjectFields[];
  education: IEducationFields[];
  personal: IProjectFields[];
  staticTexts: IStaticTextsFields[];
}

const getContentfulData = async (): Promise<HomeProps> => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const [education, projects, staticTexts] = await Promise.all([
    await client.getEntries<IEducationFields>({ content_type: 'education' }),
    await client.getEntries<IProjectFields>({ content_type: 'project' }),
    await client.getEntries<IStaticTextsFields>({ content_type: 'staticTexts' }),
  ]);

  return {
    consultancy: projects.items.map(i => i.fields).filter(i => i.consultancy),
    education: education.items.map(i => i.fields),
    personal: projects.items.map(i => i.fields).filter(i => !i.consultancy),
    staticTexts: staticTexts.items.map(i => i.fields)
  };
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const {
    consultancy,
    education,
    personal,
    staticTexts,
  } = await getContentfulData();

  return {
    props: {
      consultancy,
      education,
      personal,
      staticTexts,
    },
  };
};

const Home: FC<HomeProps> = ({
  consultancy,
  education,
  personal,
  staticTexts,
}) => {
  return (
    <div className="site">
      <Head>
        <base href="/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html" />
        {metaTags.map((tag, index) => (
          <meta
            key={`meta--${index}`}
            name={tag.name}
            property={tag.property}
            content={tag.content} />
        ))}
        <title>Position Fixed</title>
      </Head>
      <Header />
      <main className="site__main container">
        {printStaticText(staticTexts, 'header-text')}

        <Projects title="Consultancy" projects={consultancy} />
        <Education education={education} />
        <Projects title="Personal" projects={personal} />

        <section className="site__section">
          <h3 className="site__section__heading has-color">Hobbies &amp; Personal Life</h3>
          {printStaticText(staticTexts, 'hobbies')}
        </section>
      </main>
      <Footer />
    </div>
  )
};

export default Home;
