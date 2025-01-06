import { memo } from "react";
import { CountrySummary } from "../types";
import CardItem from "./CardItem";

function Card({
  name: countryName,
  population,
  region,
  capital,
  flags
}: CountrySummary) {
  return (
    <div className="w-full md:w-64 shadow-md rounded-md overflow-hidden">
      <img
        src={flags.svg}
        alt={flags.alt}
        className="h-80 md:h-40 mx-auto w-full object-cover"
        loading="lazy"
      />
      <div className="mt-7 mb-12 px-6">
        <h2 className="text-xl font-bold mb-5">{countryName}</h2>
        <CardItem title="Population">{population}</CardItem>
        <CardItem title="Region">{region}</CardItem>
        <CardItem title="Capital">{capital}</CardItem>
      </div>
    </div>
  );
}

export default memo(Card);
