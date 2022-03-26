import { FC } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { createClient } from 'contentful';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Home from '@components/Home';

import metaTags from '../support/metaTags';
import type {
  IEducationFields,
  IProjectFields,
  IStaticTextsFields,
} from '../@types/generated/contentful';
import ContentProvider from 'providers/content.provider';

interface SiteProps {
  education: IEducationFields[];
  projects: IProjectFields[];
  staticTexts: IStaticTextsFields[];
}

const getContentfulData = async (): Promise<SiteProps> => {
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
    education: education.items.map(i => i.fields),
    projects: projects.items.map(i => i.fields),
    staticTexts: staticTexts.items.map(i => i.fields)
  };
}

export const getServerSideProps: GetServerSideProps<SiteProps> = async () => {
  return {
    props: await getContentfulData(),
  };
};

const Site: FC<SiteProps> = (props) => {
  return <ContentProvider data={props}>
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
      <Home />
      <Footer />
    </div>
  </ContentProvider>
};

export default Site;
