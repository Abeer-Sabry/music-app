import { configureStore } from "@reduxjs/toolkit";
// ---- REDUCERS ---- //
import singerStep from "./singersSlice/singersSlice";
import album from "./albumsSlice/albumsSlice";
import song from "./songsSlice/songsSlice";
// ----  REDUX-PERSIST ---- //
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   singerStep,
//   album,
//   song,
// });
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    singerStep,
    album,
    song,
  },
});
