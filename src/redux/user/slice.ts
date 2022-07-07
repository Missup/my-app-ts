import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  token: null,
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (id: string, thunkAPI) => {
    // thunkAPI.dispatch(productDetailSlice.actions.fetchStart());
    // try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
    //   thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data));
    // } catch (error) {
    //   thunkAPI.dispatch(
    //     productDetailSlice.actions.fetchFail(
    //       error instanceof Error ? error.message : "error"
    //     )
    //   );
    // }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // fetchStart: (state) => {
    //   state.loading = true;
    // },
    // fetchSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    //   state.error = null;
    // },
    // fetchFail: (state, action: PayloadAction<string | null>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    [signIn.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
