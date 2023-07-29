import { createSlice } from "@reduxjs/toolkit";
import { postAdd } from "./postsOperations";

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
      .addCase(postAdd.fulfilled, (state,action)=>{})
      .addCase(postAdd.rejected, handleRejected)
});

export default postsSlice;
