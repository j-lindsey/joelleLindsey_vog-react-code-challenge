import axios from "axios";

const universitiesApi = axios.create({
  baseURL: "https://pure-fortress-21213.herokuapp.com/universities.hipolabs.com/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;",
  },
});

export function fetchUniversities(country) {
  return universitiesApi({
    url: `/search?country=${country}`,
    method: "get",
  });
}

const countryApi = axios.create({
  baseURL: "https://restcountries.com/v2/all",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;",
  },
});



export function fetchCountries() {
  return countryApi({
    url: ``,
    method: "get",
  });
}
