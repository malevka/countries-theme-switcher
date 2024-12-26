import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountrySummary } from "../types";

type GetCountriesResponse = {
  name: { common: string };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  region: string;
  population: number;
  capital: string;
}[];

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<CountrySummary[], void>({
      query: () => "/all?fields=name,flags,population,capital,region",
      transformResponse: (response: GetCountriesResponse) =>
        response.map(({ name, region, flags, population, capital }) => ({ name: name.common, region, flags, population, capital: capital[0] }))
    })
  })
});
export const { useGetCountriesQuery } = apiSlice;
