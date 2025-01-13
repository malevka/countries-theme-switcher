import { useGetCountriesQuery } from "../api/apiSlice";
import FilterByName from "../components/FilterByName";
import FilterByRegion from "../components/FilterByRegion";
import HomeContent from "../components/HomeContent";
import PageTitle from "./PageTitle";

function Home() {
  const {
    data: countriesData = { countries: [], regions: [] },
    isLoading,
    isSuccess,
    isError,
  } = useGetCountriesQuery();

  return (
    <>
      <PageTitle title="All Countries" />

      <div className="h-full pt-12">
        <div className="flex flex-wrap items-center justify-between gap-12 sm:gap-20 lg:gap-12">
          {isSuccess && (
            <>
              <FilterByName />
              <FilterByRegion regions={countriesData.regions} />
            </>
          )}
        </div>
        <HomeContent
          isError={isError}
          isLoading={isLoading}
          countries={countriesData.countries}
        />
      </div>
    </>
  );
}

export default Home;
