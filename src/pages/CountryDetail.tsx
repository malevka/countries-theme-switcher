import { Button } from "@mui/base/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useParams } from "react-router";
import { useGetCountryByNameQuery } from "../api/apiSlice";
import ContentWrapper from "../components/ContentWrapper";
import CountryInfo from "../components/CountryInfo";
import PageTitle from "./PageTitle";

function CountryDetail() {
  const params = useParams();
  const {
    data: country,
    isLoading,
    isError,
  } = useGetCountryByNameQuery(params.name!);

  return (
    <>
      <PageTitle title={`Country Detail - ${params.name}`} />
      <div className="px-3 py-10 sm:px-7 sm:py-20 lg:px-0">
        <Link to="/">
          <Button className="mb-16 flex items-center gap-5 rounded bg-white py-3 pl-5 pr-5 text-xl font-light tracking-tight shadow-custom-md dark:bg-dark-light dark:text-white sm:mb-32 sm:pl-10 sm:pr-10 sm:text-3xl md:mb-20 lg:gap-2 lg:py-2 lg:pl-7 lg:pr-9 lg:text-base lg:tracking-wider">
            <KeyboardBackspaceIcon
              sx={{
                width: { sm: "2.5rem", lg: "1.5rem" },
                height: { sm: "2.5rem", lg: "1.5rem" },
              }}
            />
            Back
          </Button>
        </Link>
        <ContentWrapper isError={isError} isLoading={isLoading}>
          <CountryInfo country={country!} />
        </ContentWrapper>
      </div>
    </>
  );
}

export default CountryDetail;
