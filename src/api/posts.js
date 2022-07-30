import axios from "axios";

const postApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;",
  },
});

export function fetchPosts() {
  return postApi({
    url: `?_start=0&_limit=20`,
    method: "get",
  });
}
