import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: { selectedAlbums: [], SelectedSongs: [], loading: false, error: "" },
  reducers: {
    clickedAlbum: (state, action) => {
      const isExists = state.selectedAlbums.find(al => al.id === action.payload.id);
      if (isExists) {
        return;
      }
      state.selectedAlbums = [...state.selectedAlbums, ...action.payload];
      // console.log("clickedAlbumRedux", state.selectedAlbums);
      const id = action.payload.map(item => item.id);

      console.log("statESra", state.selectedAlbums);
      console.log("payload", id);
    },
    clickedSong: (state, action) => {
      const isExists = state.SelectedSongs.find(al => al.id === action.payload.id);
      if (isExists) {
        return;
      }
      state.SelectedSongs = [...state.SelectedSongs, action.payload];
      console.log("songsRedux", state.SelectedSongs);
    },
  },
});
export const { clickedAlbum, clickedSong } = songSlice.actions;
export default songSlice.reducer;
