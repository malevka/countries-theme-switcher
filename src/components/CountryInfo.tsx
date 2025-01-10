import { useGetCountriesQuery } from "../api/apiSlice";
import { CountryDetail } from "../types";
import Borders from "./Borders";
import DetailItem from "./DetailItem";

interface IProps {
  country: CountryDetail;
}

function CountryInfo({ country }: IProps) {
  const { codes: codesMap } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data }) => ({ codes: data?.codes }),
  });

  const bordersWithName = codesMap
    ? country.borders.map((code) => codesMap[code])
    : [];

  return (
    <div className="flex flex-wrap gap-12 lg:flex-nowrap lg:gap-28">
      <div className="w-11/12 shrink grow">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full shrink grow items-center py-3 sm:py-10">
        <div className="mb-14 flex flex-col justify-between gap-7 sm:gap-14 lg:flex-row lg:items-center lg:px-2">
          <div>
            <h1 className="mb-7 text-3xl font-bold sm:mb-14 sm:text-5xl lg:mb-10 lg:text-3xl">
              {country.name}
            </h1>
            <DetailItem title={"Native Name"}>{country.nativeName}</DetailItem>
            <DetailItem title={"Population"}>{country.population}</DetailItem>
            <DetailItem title={"Region"}>{country.region}</DetailItem>
            <DetailItem title={"Sub Region"}>{country.subregion}</DetailItem>
            <DetailItem title={"Capital"}>{country.capital}</DetailItem>
          </div>
          <div>
            <DetailItem title={"Top Level Domain"}>
              {country.topLevelDomain.join(", ")}
            </DetailItem>
            <DetailItem title={"Currencies"}>
              {country.currencies.join(", ")}
            </DetailItem>
            <DetailItem title={"Languages"}>
              {country.languages.join(", ")}
            </DetailItem>
          </div>
        </div>
        <div className="lg:px-2">
          <Borders borders={bordersWithName} />
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
