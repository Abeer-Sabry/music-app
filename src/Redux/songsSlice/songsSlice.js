import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: { selectedAlbums: [], SelectedSongs: [], loading: false, error: "" },
  reducers: {
    clickedAlbum: (state, action) => {
      // const isExists = state.selectedAlbums.find(album => album.id === action.payload.map(al => al.id.find(id => id)));
      // console.log("exist", isExists);

      // if (isExists) {
      //   state.selectedAlbums = state.selectedAlbums.filter(album => album.id !== action.payload.id);
      //   return;
      // }
      state.selectedAlbums = [...state.selectedAlbums, ...action.payload];
    },
    clickedSong: (state, action) => {
      const isExists = state.SelectedSongs.find(al => al.id === action.payload.id);
      if (isExists) {
        state.SelectedSongs = state.SelectedSongs.filter(song => song.id !== action.payload.id);
        return;
      }
      state.SelectedSongs = [...state.SelectedSongs, action.payload];
    },
  },
});
export const { clickedAlbum, clickedSong } = songSlice.actions;
export default songSlice.reducer;
