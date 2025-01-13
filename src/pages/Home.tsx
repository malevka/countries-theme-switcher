import { useGetCountriesQuery } from "../api/apiSlice";
import ContentWrapper from "../components/ContentWrapper";
import CountriesList from "../components/CountriesList";
import FilterByName from "../components/FilterByName";
import FilterByRegion from "../components/FilterByRegion";
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
        <div className="mb-12 flex flex-wrap items-center justify-between gap-12 sm:mb-16 sm:gap-20 lg:mb-12 lg:gap-12">
          {isSuccess && (
            <>
              <FilterByName />
              <FilterByRegion regions={countriesData.regions} />
            </>
          )}
        </div>
        <ContentWrapper isError={isError} isLoading={isLoading}>
          <CountriesList countries={countriesData.countries} />
        </ContentWrapper>
      </div>
    </>
  );
}

export default Home;
