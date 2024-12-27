import Header from "../layout/Header";
import Countrieslist from "./CountriesList";
import { useGetCountriesQuery } from "../api/apiSlice";
import FilterByRegion from "../components/FilterByRegion";

import FilterByName from "../components/FilterByName";

function Home() {
  const { data: countries = [], isLoading, isSuccess, isError, error } = useGetCountriesQuery();

  let content: React.ReactNode;
  let filterByRegion: React.ReactNode;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    const regions = Array.from(new Set(countries.map(({ region }) => region)));
    filterByRegion = content = <FilterByRegion regions={regions} />;
    content = <Countrieslist countries={countries} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return (
    <>
      <Header />
      <div className="container mt-12 mx-auto">
        <div className="flex justify-between items-center">
          {isSuccess && <FilterByName />}
          {filterByRegion}
        </div>
        <div className="flex flex-wrap gap-6 mt-12">{content}</div>
      </div>
    </>
  );
}

export default Home;
