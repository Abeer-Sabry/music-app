import { configureStore } from "@reduxjs/toolkit";
// ---- REDUCERS ---- //
import singerStep from "./singersSlice/singersSlice";
import album from "./albumsSlice/albumsSlice";
import song from "./songsSlice/songsSlice";
import register from "./registerSlice/registerSlice";

export const store = configureStore({
  reducer: {
    singerStep,
    album,
    song,
    register,
  },
});
