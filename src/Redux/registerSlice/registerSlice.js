import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegisterAsync = createAsyncThunk("register/userRegisterAsync", async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.post("https://naga-electron.herokuapp.com/api/v1/users/signup", user);
    console.log("res", response);
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.message);
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState: { loading: false, error: null, isLoggedIn: false, userInfo: {} },
  extraReducers: {
    [userRegisterAsync.pending]: state => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    },
    [userRegisterAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
      state.isLoggedIn = true;
    },
    [userRegisterAsync.rejected]: (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});
export default registerSlice.reducer;
