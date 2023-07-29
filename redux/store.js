import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const postsPersistConfig = {
  key: "posts",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    posts: persistReducer(postsPersistConfig, postsSlice.reducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
