import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import universitiesReducer from "./universitiesSlice";
import postalReducer from "./postalSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    universities: universitiesReducer,
    postalLookup: postalReducer,
  },
});
