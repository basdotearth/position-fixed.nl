import { FC, CSSProperties, useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { dateSorting, shortDate } from '../../support';
import type { IProjectFields } from '../../@types/generated/contentful';
import { ContentContext } from 'providers/content.provider';

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

      return  <div className="site__section__content" key={`project--${index}`}>
        <div className="site__section__meta has-color">
          { item.logo && 
          <div
            className="site__section__image"
            style={{'--image': `url('${item.logo?.fields.file.url}');`} as CustomStyle}>
          </div>
          }
          <h5>{ item.company }</h5>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: dateNotation.join(' ') }}></li>
            <li>{ item.location }</li>
          </ul>
        </div>
        <div className="site__section__description">
          {documentToReactComponents(item.description)}
        </div>
        <div className="site__section__tags has-color">
          <ul>
            {item.tags.map((tag, index) => <li key={`tag--${index}`}>{ tag }</li>)}
          </ul>
        </div>
      </div>
        })}
  </section>
};

export default Projects;