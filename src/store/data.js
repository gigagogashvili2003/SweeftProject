import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataValidate",
  initialState: {
    error: false,
    loading: true,
    hasMore: false,
  },
  reducers: {
    isError(state, action) {
      state.error = action.payload;
    },
    isLoading(state, action) {
      state.loading = action.payload;
    },
    isMore(state, action) {
      state.hasMore = action.payload;
    },
  },
});

const store = configureStore({
  reducer: dataSlice.reducer,
});
export const dataActions = dataSlice.actions;

export default store;
