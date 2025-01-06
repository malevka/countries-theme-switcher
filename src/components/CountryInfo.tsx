import { useGetCountriesQuery } from "../api/apiSlice";
import { CountryDetail } from "../types";
import Borders from "./Borders";
import DetailItem from "./DetailItem";

interface IProps {
  country: CountryDetail;
}

function CountryInfo({ country }: IProps) {
  const { codes: codesMap } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data }) => ({ codes: data?.codes })
  });

  const bordersWithName = codesMap
    ? country.borders.map((code) => codesMap[code])
    : [];

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-32 items-center">
      <div className="shrink  grow  w-full">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="shrink grow w-full items-center">
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center mb-20 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-14 lg:mb-11">
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
        <div>
          <Borders borders={bordersWithName} />
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
