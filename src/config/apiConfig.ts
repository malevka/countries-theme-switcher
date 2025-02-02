export const API_ENDPOINTS = {
  GET_COUNTRIES: {
    url: import.meta.env.VITE_GET_COUNTRIES,
    fields: ["name", "flags", "population", "capital", "region", "cca3"]
  },
  GET_COUNTRY_BY_NAME: {
    url: import.meta.env.VITE_GET_COUNTRY_BY_NAME,
    fields: [
      "name",
      "flags",
      "population",
      "capital",
      "region",
      "subregion",
      "tld",
      "currencies",
      "languages",
      "borders"
    ]
  }
};
