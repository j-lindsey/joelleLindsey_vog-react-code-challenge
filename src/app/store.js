import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import universitiesReducer from "./universitiesSlice";


export const store = configureStore({
  reducer:{
    post: postReducer,
    universities: universitiesReducer,
  }
});
