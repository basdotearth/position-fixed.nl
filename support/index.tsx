import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';

import {
  IEducationFields,
  IProjectFields,
  IStaticTextsFields,
} from '../@types/generated/contentful';

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

export const dateSorting = (
  itemA: IEducationFields | IProjectFields,
  itemB: IEducationFields | IProjectFields,
): number => {
  const dateA = new Date(itemA.start);
  const dateB = new Date(itemB.start);
  return dateB.valueOf() - dateA.valueOf();
}

export const printStaticText = (
  src: IStaticTextsFields[],
  slug: string,
): ReturnType<typeof documentToReactComponents> => {
  const options = {
    renderNode: {
      // Using Asset Hyperlinks does not seem to work out-of-the-box.
      // Let's override the node parser for that type of node.
      [INLINES.ASSET_HYPERLINK](node: any) {
        const { value } = node.content[0];
        const { file, title } = node.data.target.fields;
        return <a href={file.url} title={title} download>{value}</a>;
      }
    }
  };

  const text = src.find(text => text.slug === slug);
  return text ? documentToReactComponents(text.content, options) : undefined;
}