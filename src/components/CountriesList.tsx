import { Link } from "react-router";
import { useCountriesList } from "../hooks/useCountriesList";
import { CountrySummary } from "../types";
import Card from "./Card";

interface IProps {
  countries?: CountrySummary[];
}
function CountriesList({ countries = [] }: IProps) {
  const filteredCountries = useCountriesList(countries);
  return (
    <div className="grid w-full grid-cols-1 gap-20 sm:px-20 md:grid-cols-[repeat(2,1fr)] md:justify-between md:px-0 lg:grid-cols-[repeat(3,minmax(200px,1fr))] xl:grid-cols-[repeat(4,minmax(200px,1fr))]">
      {filteredCountries.map((country) => (
        <Link key={country.name} to={`/country/${country.name}`}>
          <Card {...country} />
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
