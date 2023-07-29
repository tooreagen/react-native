import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase.config";

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = response.user;
      await updateProfile(user, {
        displayName: login,
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "auth/userLogIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userOut = createAsyncThunk("auth/userOut", async (_, thunkAPI) => {
  try {
    const response = await signOut(auth);

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
