export interface CountrySummary {
  name: string;
  region: string;
  capital: string;
  population: string;
  flags: { png: string; svg: string; alt: string };
}

export interface CountryDetail extends CountrySummary {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
}
