import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./features/Product/ProductSlice";

export const store = configureStore({
    reducer : {
        ProductSlice
    },
})