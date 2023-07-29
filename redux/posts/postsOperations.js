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
        snapshot.forEach((doc) => data.push(doc.data()));
        return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
