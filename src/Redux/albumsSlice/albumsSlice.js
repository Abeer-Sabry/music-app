import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "album",
  initialState: { selectedSinger: [] },
  reducers: {
    clickedSinger: (state, action) => {
      state.disabled = true;

      const isExists = state.selectedSinger.find(album => album.id === action.payload.id);
      if (isExists) {
        state.selectedSinger = state.selectedSinger.filter(singer => singer.id !== action.payload.id);

        return;
      }
      state.selectedSinger = [...state.selectedSinger, action.payload];
    },
  },
});
export const { clickedSinger, clickedButton, activeSinger } = albumSlice.actions;
export default albumSlice.reducer;
