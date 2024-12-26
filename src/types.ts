export interface CountrySummary {
  name: string;
  region: string;
  capital: string;
  population: number;
  flags: { png: string; svg: string; alt: string };
}
