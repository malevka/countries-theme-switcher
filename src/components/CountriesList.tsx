import { useMemo } from "react";
import { Link } from "react-router";
import { selectName, selectRegion } from "../store/filtersSlice";
import { useAppSelector } from "../store/hooks";
import { CountrySummary } from "../types";
import Card from "./Card";

interface IProps {
  countries?: CountrySummary[];
}
function CountriesList({ countries = [] }: IProps) {
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
  return (
    <div className="grid w-full grid-cols-1 gap-20 sm:px-20 md:grid-cols-[repeat(2,1fr)] md:justify-between md:px-0 lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
      {filteredCountries.map((country) => (
        <Link key={country.name} to={`/country/${country.name}`}>
          <Card {...country} />
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
