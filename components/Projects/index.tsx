import { FC, CSSProperties, useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { dateSorting, shortDate } from '../../support';
import { ContentContext } from 'providers/content.provider';

import style from './style.module.css';

interface CustomStyle extends CSSProperties {
  '--image': string;
}

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
    <h3 className="site__section__heading has-color">{title}</h3>
    {projects.sort(dateSorting).map((item, index) => {
      const dateNotation = [shortDate(item.start)];
      if (item.end) {
        dateNotation.push('&mdash;', shortDate(item.end));
      }

      return  <div className={style.project} key={`project--${index}`}>
        <div className={`${style.project__meta} has-color`}>
          { item.logo && 
          <div
            className={style.project__image}
            style={{ backgroundImage: `url('${item.logo?.fields.file.url}')` }}>
          </div>
          }
          <h5>{ item.company }</h5>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: dateNotation.join(' ') }}></li>
            <li>{ item.location }</li>
          </ul>
        </div>
        <div className={style.project__description}>
          {documentToReactComponents(item.description)}
        </div>
        <div className={`${style.project__tags} has-color`}>
          <ul>
            {item.tags.map((tag, index) => <li key={`tag--${index}`}>{ tag }</li>)}
          </ul>
        </div>
      </div>
        })}
  </section>
};

export default Projects;