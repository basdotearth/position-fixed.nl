import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { IStaticTextsFields } from '../@types/generated/contentful';

export const shortDate = (val: string): string => {
  const date = new Date(val);
  const months = [
    'jan', 'feb', 'mar',
    'apr', 'may', 'jun',
    'jul', 'aug', 'sep',
    'oct', 'nov', 'dec',
  ];
  const year = String(date.getFullYear()).slice(2);
  return `${months[date.getMonth()]} '${year}`;
};

export const printStaticText = (
  src: IStaticTextsFields[],
  slug: string,
): ReturnType<typeof documentToReactComponents> => {
  const text = src.find(text => text.slug === slug);
  return text ? documentToReactComponents(text.content) : undefined;
}