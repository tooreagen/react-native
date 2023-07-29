import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export const postAdd = createAsyncThunk(
  "posts/postAdd",
  async ({ id, photo, location, title, place, userId }, thunkAPI) => {
    try {
      console.log("Виоконується postAdd");
      const docRef = await addDoc(collection(db, "posts"), {
        id,
        photo,
        location,
        title,
        place,
        userId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
