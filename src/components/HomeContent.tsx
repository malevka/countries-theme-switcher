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
    <div className="flex flex-wrap gap-6 mt-12">
      {isLoading ? <LoadingSpinner /> : isError ? <div>error</div> : <Countrieslist countries={countries} />}
    </div>
  );
}

export default HomeContent;
