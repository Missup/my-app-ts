import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailState = {
  data: null,
  loading: true,
  error: null,
};

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
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

export const productDetailSlice = createSlice({
  name: "productDetail",
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
    [getProductDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
