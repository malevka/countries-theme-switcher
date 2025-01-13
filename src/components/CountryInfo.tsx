import { useGetCountriesQuery } from "../api/apiSlice";
import { CountryDetail } from "../types";
import Borders from "./Borders";
import InfoItem from "./InfoItem";

interface IProps {
  country?: CountryDetail;
}

function CountryInfo({ country }: IProps) {
  const { codes: codesMap } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data }) => ({ codes: data?.codes }),
  });

  const bordersWithName =
    codesMap && country ? country.borders.map((code) => codesMap[code]) : [];

  return !country ? (
    <div>Данные о стране отсутвуют</div>
  ) : (
    <div className="flex flex-wrap gap-12 lg:flex-nowrap lg:gap-28">
      <div className="w-11/12 shrink grow">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full shrink grow items-center py-3 sm:py-10">
        <div className="mb-14 flex flex-col justify-between gap-7 sm:gap-14 lg:flex-row lg:items-center lg:px-2">
          <div>
            <h1 className="mb-7 text-3xl font-bold sm:mb-14 sm:text-5xl lg:mb-10 lg:text-3xl">
              {country.name}
            </h1>
            <InfoItem title={"Native Name"} type="detail">
              {country.nativeName}
            </InfoItem>
            <InfoItem title={"Population"} type="detail">
              {country.population}
            </InfoItem>
            <InfoItem title={"Region"} type="detail">
              {country.region}
            </InfoItem>
            <InfoItem title={"Sub Region"} type="detail">
              {country.subregion}
            </InfoItem>
            <InfoItem title={"Capital"} type="detail">
              {country.capital}
            </InfoItem>
          </div>
          <div>
            <InfoItem title={"Top Level Domain"} type="detail">
              {country.topLevelDomain.join(", ")}
            </InfoItem>
            <InfoItem title={"Currencies"} type="detail">
              {country.currencies.join(", ")}
            </InfoItem>
            <InfoItem title={"Languages"} type="detail">
              {country.languages.join(", ")}
            </InfoItem>
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
