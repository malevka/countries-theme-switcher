import { useGetCountriesQuery } from "../api/apiSlice";
import FilterByRegion from "../components/FilterByRegion";
import FilterByName from "../components/FilterByName";
import HomeContent from "../components/HomeContent";
import { useLayoutEffect } from "react";

function Home() {
  const {
    data: countriesData = { countries: [], regions: [] },
    isLoading,
    isSuccess,
    isError
  } = useGetCountriesQuery();

  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--bg-color", "#fafafa");
  }, []);

  return (
    <div className="pt-12 h-full">
      <div className="flex justify-between items-center">
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
  );
}

export default Home;
