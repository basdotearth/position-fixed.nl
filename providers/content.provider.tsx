import { FC, createContext, useState, useEffect } from 'react';

import type {
  IEducationFields,
  IProjectFields,
  IStaticTextsFields,
} from '../@types/generated/contentful';

interface ContentProviderProps {
  projects: IProjectFields[];
  education: IEducationFields[];
  staticTexts: IStaticTextsFields[];
}

export interface DataContext {
  consultancy: IProjectFields[];
  education: IEducationFields[];
  personal: IProjectFields[];
  staticTexts: IStaticTextsFields[];
}

const defaultContext: DataContext = {
  consultancy: [],
  education: [],
  personal: [],
  staticTexts: [],
};

export const ContentContext = createContext(defaultContext);

const ContentProvider: FC<{ data: ContentProviderProps }> = ({
  children,
  data,
}) => {
  const [contextData, setContextData] = useState<DataContext>(defaultContext);

  useEffect(() => {
    setContextData({
      consultancy: data.projects.filter(i => i.consultancy),
      education: data.education,
      personal: data.projects.filter(i => !i.consultancy),
      staticTexts: data.staticTexts,
    });
  }, []);

  return <ContentContext.Provider value={contextData}>
    { children }
  </ContentContext.Provider>;
};

export default ContentProvider;