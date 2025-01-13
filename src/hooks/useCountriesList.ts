import { useMemo } from "react";
import { selectName, selectRegion } from "../store/filtersSlice";
import { useAppSelector } from "../store/hooks";
import { CountrySummary } from "../types";

export function useCountriesList(
  countries: CountrySummary[],
): CountrySummary[] {
  const region = useAppSelector(selectRegion);
  const searchName = useAppSelector(selectName);
  const sortedCountries = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name)),
    [countries],
  );
  const filteredCountries = useMemo(() => {
    const filteredByRegion = region
      ? sortedCountries.filter((country) => country.region === region)
      : sortedCountries;
    return searchName
      ? filteredByRegion.filter(({ name }) =>
          name.toLowerCase().startsWith(searchName.toLowerCase()),
        )
      : filteredByRegion;
  }, [sortedCountries, region, searchName]);

  return filteredCountries;
}
