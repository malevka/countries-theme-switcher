import { CountrySummary } from "../types";
import Countrieslist from "./CountriesList";
import LoadingSpinner from "./LoadingSpinner";

interface IProps {
  isError: boolean;
  isLoading: boolean;
  countries: CountrySummary[];
}

function HomeContent({ isError, isLoading, countries }: IProps) {
  return (
    <div className="mt-16 flex flex-wrap gap-6 lg:mt-12">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <div>error</div>
      ) : (
        <Countrieslist countries={countries} />
      )}
    </div>
  );
}

export default HomeContent;
