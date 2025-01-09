import { Link, useParams } from "react-router";
import { useGetCountryByNameQuery } from "../api/apiSlice";
import CountryDetailContent from "../components/CountryDetailContent";
import { Button } from "@mui/base/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLayoutEffect } from "react";
import { useTheme } from "../ThemeContext";

function CountryDetail() {
  const params = useParams();
  const {
    data: country,
    isLoading,
    isError,
  } = useGetCountryByNameQuery(params.name!);

  const { theme } = useTheme();
  useLayoutEffect(() => {
    const bgColor =
      theme === "dark" ? "var(--color-dark)" : "var(--color-white)";
    document.documentElement.style.setProperty("--bg-color", bgColor);
  }, [theme]);

  return (
    <div className="px-7 py-20 lg:px-0">
      <Link to="/">
        <Button className="mb-32 flex items-center gap-5 rounded bg-white py-3 pl-10 pr-11 text-3xl font-light tracking-tight shadow-custom-md dark:bg-dark-light dark:text-white md:mb-20 lg:gap-2 lg:py-2 lg:pl-7 lg:pr-9 lg:text-base lg:tracking-wider">
          <KeyboardBackspaceIcon
            sx={{
              width: { xs: "2.5rem", lg: "1.5rem" },
              height: { xs: "2.5rem", lg: "1.5rem" },
            }}
          />
          Back
        </Button>
      </Link>
      <CountryDetailContent
        country={country}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default CountryDetail;
