import { FC, useContext } from 'react';

import { dateSorting } from '../../support';
import { ContentContext } from 'providers/content.provider';
import useCustomColor from 'hooks/useCustomColor';

import style from './style.module.css';

const Education: FC<{}> = () => {
  const { education } = useContext(ContentContext);
  return <section className="site__section">
    <h3 className={useCustomColor('site__section__heading')}>
      Education
    </h3>
    <div className={style.education}>
      {education.sort(dateSorting).map((item, index) => { 
        const dateNotation: string[] = [
          new Date(item.start).getFullYear().toString(),
        ];
        if (item.end) {
          dateNotation.push('—', new Date(item.end).getFullYear().toString());
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
};

export default Education;