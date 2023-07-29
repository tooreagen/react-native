import { createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogIn, userOut } from "./authOperations";

const initialState = {
  user: {
    login: "",
    email: "",
    password: "",
    avatarUrl: "",
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.error(action.payload);
};

const handleUserIn = (state, action) => {
  state.user.login = action.payload.user.displayName;
  state.user.email = action.payload.user.email;
  state.user.avatarUrl = action.payload.user.photoURL;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      //registration
      .addCase(userRegister.pending, handlePending)
      .addCase(userRegister.fulfilled, handleUserIn)
      .addCase(userRegister.rejected, handleRejected)
      //logIn
      .addCase(userLogIn.pending, handlePending)
      .addCase(userLogIn.fulfilled, handleUserIn)
      .addCase(userLogIn.rejected, handleRejected)
      //logOut
      .addCase(userOut.pending, handlePending)
      .addCase(userOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(userOut.rejected, handleRejected),
});

export default authSlice;
