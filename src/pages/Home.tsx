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
    isError
  } = useGetCountriesQuery();

  const { theme } = useTheme();
  useLayoutEffect(() => {
    const bgColor =
      theme === "dark" ? "var(--dark-color)" : "var(--grey-color)";
    document.documentElement.style.setProperty("--bg-color", bgColor);
  }, [theme]);

  return (
    <div className="pt-12 h-full">
      <div className="flex justify-between items-center flex-wrap gap-12">
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
