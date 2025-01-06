import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountrySummary } from "../types";
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
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCountries: builder.query<
      { countries: CountrySummary[]; regions: string[] },
      void
    >({
      query: () => {
        const { url, fields } = API_ENDPOINTS.GET_COUNTRIES;
        return `${url}?fields=${fields.join(",")}`;
      },
      transformResponse: (response: GetCountriesResponse[]) => {
        const countries: CountrySummary[] = [];
        const regions = new Set<string>();
        response.forEach(({ name, region, flags, population, capital }) => {
          countries.push({
            name: name.common,
            region,
            flags,
            population,
            capital: capital[0]
          });
          regions.add(region);
        });

        return { countries, regions: Array.from(regions) };
      }
    })
  })
});
export const { useGetCountriesQuery } = apiSlice;
