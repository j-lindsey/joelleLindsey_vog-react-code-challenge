import axios from "axios";

const postalApi = axios.create({
  baseURL: "https://api.zippopotam.us/us",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;",
  },
});

export function fetchPostalLookup(code) {
  return postalApi({
    url: `/${code}`,
    method: "get",
  });
}