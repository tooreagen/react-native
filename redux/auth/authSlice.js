import { createSlice } from "@reduxjs/toolkit";
import { userRegister , userOut} from "./authOperations";

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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      //registration
      .addCase(userRegister.pending, handlePending)
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user.login = action.payload.user.displayName;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(userRegister.rejected, handleRejected)
      //logout
      .addCase(userOut.pending, handlePending)
      .addCase(userOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(userOut.rejected, handleRejected),
});

export default authSlice;
