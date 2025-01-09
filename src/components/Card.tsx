import { memo } from "react";
import { CountrySummary } from "../types";
import CardItem from "./CardItem";

function Card({
  name: countryName,
  population,
  region,
  capital,
  flags,
}: CountrySummary) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-custom-sm dark:bg-dark-light lg:rounded-md">
      <img
        src={flags.svg}
        alt={flags.alt}
        className="mx-auto h-80 w-full object-cover md:h-40"
        loading="lazy"
      />
      <div className="px-12 pb-20 pt-14 lg:px-6 lg:pb-10 lg:pt-6">
        <h2 className="mb-10 text-3xl font-bold lg:mb-4 lg:text-base">
          {countryName}
        </h2>
        <CardItem title="Population">{population}</CardItem>
        <CardItem title="Region">{region}</CardItem>
        <CardItem title="Capital">{capital}</CardItem>
      </div>
    </div>
  );
}

export default memo(Card);
