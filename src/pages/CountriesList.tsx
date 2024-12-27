import { CountrySummary } from "../types";
import Card from "../components/Card";
import { useAppSelector } from "../store/hooks";
import { selectName, selectRegion } from "../store/filtersSlice";
import { useMemo } from "react";

function Countrieslist({ countries }: { countries: CountrySummary[] }) {
  const region = useAppSelector(selectRegion);
  const searchName = useAppSelector(selectName);
  const sortedCountries = useMemo(() => [...countries].sort((a, b) => a.name.localeCompare(b.name)), [countries]);
  const filteredCountries = useMemo(() => {
    const filteredByRegion = region ? sortedCountries.filter((country) => country.region === region) : sortedCountries;
    return searchName ? filteredByRegion.filter(({ name }) => name.toLowerCase().startsWith(searchName.toLowerCase())) : filteredByRegion;
  }, [sortedCountries, region, searchName]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(2,260px)] lg:grid-cols-[repeat(3,260px)] xl:grid-cols-[repeat(4,260px)] justify-center justify-items-center md:justify-between w-full gap-20">
      {filteredCountries.map((country) => (
        <Card key={country.name} {...country} />
      ))}
    </div>
  );
}

export default Countrieslist;
