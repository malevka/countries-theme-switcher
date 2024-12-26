import { CountrySummary } from "../types";
import Card from "../components/Card";

function Countrieslist({ countries }: { countries: CountrySummary[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(2,260px)] lg:grid-cols-[repeat(3,260px)] xl:grid-cols-[repeat(4,260px)] justify-center justify-items-center md:justify-between w-full gap-20">
      {countries.map((country) => (
        <Card key={country.name} {...country} />
      ))}
    </div>
  );
}

export default Countrieslist;
