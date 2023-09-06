import { ComboboxOptions } from './components/Combobox/Combobox';
import { SearchResponse } from './types';

export const capitalize = (str: string) => {
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1);
  return `${firstLetter}${rest}`;
};

export const getOptionsFromData = (data?: SearchResponse): ComboboxOptions => {
  if (!data) return {};
  const keys = Object.keys(data);
  const options = keys.reduce((acc, key) => {
    const values = data[key as keyof SearchResponse];
    const formattedValues = values ? values.map((value) => value.name) : [];
    return {
      ...acc,
      [key]: {
        key,
        title: capitalize(key),
        options: formattedValues,
      },
    };
  }, {});
  return options;
};
