import { useGetCountriesQuery } from "../api/apiSlice";
import FilterByRegion from "../components/FilterByRegion";
import FilterByName from "../components/FilterByName";
import HomeContent from "../components/HomeContent";
import { useLayoutEffect } from "react";
import { useTheme } from "../ThemeContext";

function Home() {
  const {
    data: countriesData = { countries: [], regions: [] },
    isLoading,
    isSuccess,
    isError,
  } = useGetCountriesQuery();

  const { theme } = useTheme();
  useLayoutEffect(() => {
    const bgColor =
      theme === "dark" ? "var(--color-dark)" : "var(--color-gray-light)";
    document.documentElement.style.setProperty("--bg-color", bgColor);
  }, [theme]);

  return (
    <div className="h-full pt-12">
      <div className="flex flex-wrap items-center justify-between gap-20 lg:gap-12">
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
