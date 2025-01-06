import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryDetail, CountrySummary } from "../types";
import { API_ENDPOINTS } from "../config/apiConfig";

interface GetCountriesResponse {
  name: { common: string };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  region: string;
  population: number;
  capital: string;
  cca3: string;
}

interface GetCountryByNameResponse extends GetCountriesResponse {
  name: {
    common: string;
    nativeName: { [x: string]: { official: string; common: string } };
  };
  borders: string[];
  subregion: string;
  tld: string[];
  currencies: { [x: string]: { name: string; symbol: string } };
  languages: { [x: string]: string };
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCountries: builder.query<
      {
        countries: CountrySummary[];
        regions: string[];
        codes: Record<string, string>;
      },
      void
    >({
      query: () => {
        const { url, fields } = API_ENDPOINTS.GET_COUNTRIES;
        return `${url}?fields=${fields.join(",")}`;
      },
      transformResponse: (response: GetCountriesResponse[]) => {
        const countries: CountrySummary[] = [];
        const regions = new Set<string>();
        const codes: Record<string, string> = {};
        response.forEach(
          ({ name, region, flags, population, capital, cca3 }) => {
            countries.push({
              name: name.common,
              region,
              flags,
              population,
              capital: capital[0]
            });
            regions.add(region);
            codes[cca3] = name.common;
          }
        );

        return { countries, regions: Array.from(regions), codes };
      }
    }),
    getCountryByName: builder.query<CountryDetail, string>({
      query: (name) => {
        const { url, fields } = API_ENDPOINTS.GET_COUNTRY_BY_NAME;
        return `${url}/${name}?fields=${fields.join(",")}`;
      },
      transformResponse: (response: GetCountryByNameResponse[]) => {
        const [
          {
            name,
            region,
            flags,
            population,
            capital,
            subregion,
            tld,
            languages,
            borders,
            currencies
          }
        ] = response;
        const nativeName = Object.values(name.nativeName)[0]?.common ?? "";
        const curr = Object.values(currencies).map(({ name }) => name);
        return {
          name: name.common,
          region,
          flags,
          population,
          capital: capital[0],
          nativeName,
          subregion,
          topLevelDomain: tld,
          languages: Object.values(languages),
          borders,
          currencies: curr
        };
      }
    })
  })
});
export const { useGetCountriesQuery, useGetCountryByNameQuery } = apiSlice;
