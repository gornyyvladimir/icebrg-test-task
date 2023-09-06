export type Continent = {
  code: string;
  name: string;
};

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string;
};

export type Language = {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
};

export type SearchResponse = {
  continents: Continent[] | null;
  countries: Country[] | null;
  languages: Language[] | null;
};
