import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "album",
  initialState: { selectedSinger: [], disabled: false, selectMeSinger: false },
  reducers: {
    clickedSinger: (state, action) => {
      const isExists = state.selectedSinger.find(album => album.id === action.payload.id);
      if (isExists) {
        state.selectMeSinger = !state.selectMeSinger;
        return;
      }
      state.selectedSinger = [...state.selectedSinger, action.payload];

      console.log("clickedSinger", state.selectedSinger);
    },
    // activeSinger: (state, action) => {
    //   state.selectMeSinger = !state.selectMeSinger;
    // },
  },
});
export const { clickedSinger, clickedButton, activeSinger } = albumSlice.actions;
export default albumSlice.reducer;
