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
      <div className="aspect-[16/9] w-full overflow-hidden md:h-40">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="px-6 pb-10 pt-14 sm:px-12 sm:pb-20 sm:pt-14 lg:px-6 lg:pb-10 lg:pt-6">
        <h2 className="mb-6 text-xl font-bold sm:mb-10 sm:text-3xl lg:mb-4 lg:text-base">
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
