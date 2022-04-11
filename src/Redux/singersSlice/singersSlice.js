import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSingersAsync = createAsyncThunk("singer/getSingersAsync", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch("https://abeer-rest-api.herokuapp.com/music");
    // const res = await fetch("https://naga-electron.herokuapp.com/api/v1/products");
    // console.log("response", res);
    const singers = await res.json();

    return singers;
  } catch (error) {
    rejectWithValue(error.message);
    console.log("error", error);
  }
});

const singerSlice = createSlice({
  name: "singer",
  initialState: { singers: [], loading: false, error: "" },
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
