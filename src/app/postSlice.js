import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/posts";

const initialState = {
  loading: false,
  errorMessage: '',
  posts: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getPosts = createAsyncThunk("post/getPosts", async (thunkAPI) => {
  try {
    const response = await fetchPosts();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectiWithValue(error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.generalError = false;
      state.errorMessage = "";
      state.loading = true;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
