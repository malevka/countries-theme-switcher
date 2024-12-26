import Header from "../layout/Header";
import Countrieslist from "./CountriesList";
import { useGetCountriesQuery } from "../api/apiSlice";

function Home() {
  const { data: countries = [], isLoading, isSuccess, isError, error } = useGetCountriesQuery();

  let content: React.ReactNode;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = <Countrieslist countries={countries} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return (
    <>
      <Header />
      <div className="container mt-12 mx-auto">
        <div className="flex flex-wrap gap-6 mt-12">{content}</div>
      </div>
    </>
  );
}

export default Home;
