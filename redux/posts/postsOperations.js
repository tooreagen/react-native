import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase.config";
import { addDoc, getDocs, collection } from "firebase/firestore";

export const postAdd = createAsyncThunk(
  "posts/postAdd",
  async ({ id, photo, location, title, place, userId, userName }, thunkAPI) => {
    try {
      await addDoc(collection(db, "posts"), {
        id,
        photo,
        location,
        title,
        place,
        userId,
        userName,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, thunkAPI) => {
    const data = [];
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllComments = createAsyncThunk(
  "posts/getAllComments",
  async (postId, thunkAPI) => {
    try {
      const comments = [];
      const snapshot = await getDocs(
        collection(db, "posts", postId, "comments")
      );
      snapshot.forEach((doc) => comments.push({ ...doc.data() }));
      return comments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
