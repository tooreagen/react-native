import { createSlice } from "@reduxjs/toolkit";
import { postAdd, getAllPosts } from "./postsOperations";

const initialState = {
  currentPhoto: null,
  allPosts: [],
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.error(action.payload);
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder
      //postAdd
      .addCase(postAdd.pending, handlePending)
      .addCase(postAdd.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postAdd.rejected, handleRejected)
      //getAllPosts
      .addCase(getAllPosts.pending, handlePending)
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPosts.rejected, handleRejected),
});

export default postsSlice;
