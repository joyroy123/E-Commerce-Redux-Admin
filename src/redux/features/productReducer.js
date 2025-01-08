import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};

export const productReducer = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productReducer.actions;
export default productReducer.reducer;
