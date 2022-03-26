import {
  IEducationFields,
  IProjectFields,
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
};

export const classMap = (input: Record<string, boolean> | string[]): string => {
  if (Array.isArray(input)) {
    return input.join(' ');
  }

  return Object
    .entries(input)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ');
};

export const randomColor = (): string => {
  const colours = ['blue', 'red', 'yellow', 'light'];
  return colours[Math.floor(Math.random() * colours.length)];
};
