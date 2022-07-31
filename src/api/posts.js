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

export function fetchPostsById(id) {
  return postApi({
    url: `/${id}`,
    method: "get",
  });
}

export function addPosts(data) {
  return postApi({
    url: ``,
    method: "post",
    data,
  });
}

export function deletePosts(id) {
  return postApi({
    url: `/${id}`,
    method: "delete",
  });
}

export function editPosts(id, data) {
  return postApi({
    url: `/${id}`,
    method: "put",
    data,
  });
}
