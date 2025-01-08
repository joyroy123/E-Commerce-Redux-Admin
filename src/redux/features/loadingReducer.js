import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loadingReducer = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoading } = loadingReducer.actions;
export default loadingReducer.reducer;
