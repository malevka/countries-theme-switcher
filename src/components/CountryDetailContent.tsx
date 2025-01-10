import { CountryDetail } from "../types";
import CountryInfo from "./CountryInfo";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";

interface IProps {
  isError: boolean;
  isLoading: boolean;
  country?: CountryDetail;
}
function CountryDetailContent({ country, isLoading, isError }: IProps) {
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <Error />
      ) : (
        <CountryInfo country={country!} />
      )}
    </>
  );
}

export default CountryDetailContent;
