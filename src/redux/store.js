import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartReducer";
import productReducer from "./features/productReducer";
import { loadingReducer } from "./features/loadingReducer";


export const Store = configureStore({
    reducer: {
        cartReducer,
        productReducer,
        loadingReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});