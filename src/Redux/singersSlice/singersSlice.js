import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSingersAsync = createAsyncThunk("singer/getSingersAsync", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch("https://abeer-rest-api.herokuapp.com/music");
    const singers = await res.json();
    return singers;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const singerSlice = createSlice({
  name: "singer",
  initialState: { singers: [], loading: false, error: null },
  extraReducers: {
    [getSingersAsync.pending]: state => {
      state.loading = true;
    },
    [getSingersAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.singers = action.payload;
    },
    [getSingersAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default singerSlice.reducer;
