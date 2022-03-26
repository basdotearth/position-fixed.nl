import { FC } from 'react';

import { dateSorting } from '../../support';
import type { IEducationFields } from '../../@types/generated/contentful';

const Education: FC<{ education: IEducationFields[] }> = ({
  education,
}) => (
  <section className="site__section">
    <h3 className="site__section__heading has-color">Education</h3>
    <div className="site__section__education">
      {education.sort(dateSorting).map((item, index) => { 
        const dateNotation: string[] = [
          new Date(item.start).getFullYear().toString(),
        ];
        if (item.end) {
          dateNotation.push('&mdash;', new Date(item.end).getFullYear().toString());
        }

        return <div key={`education--${index}`}>
          <h5>{ item.subject }</h5>
          <small>
            { dateNotation.join(' ') }
            { item.byLine && <><br /> <span>{item.byLine}</span></> }
          </small>
        </div>
      })}
    </div>
  </section>
);

export default Education;