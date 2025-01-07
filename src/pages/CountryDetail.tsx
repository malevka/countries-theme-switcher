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
    isError
  } = useGetCountryByNameQuery(params.name!);

  const { theme } = useTheme();
  useLayoutEffect(() => {
    const bgColor =
      theme === "dark" ? "var(--dark-color)" : "var(--white-color)";
    document.documentElement.style.setProperty("--bg-color", bgColor);
  }, [theme]);

  return (
    <div className="py-20 px-7 lg:px-0">
      <Link to="/">
        <Button className="flex items-center gap-5 mb-32 md:mb-20  bg-white shadow-md py-4 px-12 text-base rounded tracking-wider font-light dark:bg-dark-light dark:text-white">
          <KeyboardBackspaceIcon /> Back
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
