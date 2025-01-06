import { memo } from "react";
import { CountrySummary } from "../types";

function Card({
  name: countryName,
  population,
  region,
  capital,
  flags
}: CountrySummary) {
  return (
    <div className="w-[528px] md:w-64 shadow-md rounded-md overflow-hidden">
      <img
        src={flags.svg}
        alt={flags.alt}
        className="h-80 md:h-40 mx-auto w-full object-cover"
        loading="lazy"
      />
      <div className="mt-7 mb-12 px-6">
        <h2 className="text-xl font-bold mb-5">{countryName}</h2>
        <p className="mb-2">
          <span className="font-medium">Population: </span>
          {population}
        </p>
        <p className="mb-2">
          <span className="font-medium">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-medium">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default memo(Card);
