import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
    reducer: {
        // cartReducer,
        // productReducer,
        // LoadingReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});