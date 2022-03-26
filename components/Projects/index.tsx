import { FC, useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { dateSorting, shortDate } from '../../support';
import { ContentContext } from 'providers/content.provider';
import useCustomColor from 'hooks/useCustomColor';
import type { IProjectFields } from '../../@types/generated/contentful';

import style from './style.module.css';

const Project: FC<{ project: IProjectFields }> = ({ project }) => {
  const dateNotation = [shortDate(project.start)];
  if (project.end) {
    dateNotation.push('&mdash;', shortDate(project.end));
  }

  return  <div className={style.project}>
    <div className={useCustomColor(style.project__meta)}>
      { project.logo && 
      <div
        className={style.project__image}
        style={{ backgroundImage: `url('${project.logo?.fields.file.url}')` }}>
      </div>
      }
      <h5>{ project.company }</h5>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: dateNotation.join(' ') }}></li>
        <li>{ project.location }</li>
      </ul>
    </div>
    <div className={style.project__description}>
      {documentToReactComponents(project.description)}
    </div>
    <div className={useCustomColor(style.project__tags)}>
      <ul>
        {project.tags.map((tag, index) => <li key={`tag--${index}`}>{ tag }</li>)}
      </ul>
    </div>
  </div>
};

interface ProjectsProps {
  filter: 'consultancy' | 'personal';
  title: string;
}

const Projects: FC<ProjectsProps> = ({
  filter,
  title,
}) => {
  const data = useContext(ContentContext);
  const projects = data[filter];

  return <section className="site__section">
    <h3 className={useCustomColor('site__section__heading')}>
    {title}
    </h3>
    {projects.sort(dateSorting).map((project, index) =>
      <Project project={project} key={`project--${index}`} />
    )}
  </section>
};

export default Projects;