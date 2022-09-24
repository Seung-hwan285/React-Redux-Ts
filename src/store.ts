import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./features/Product/productSlice";
import {productsApi} from "./features/Product/productApi";
import productSlice from "./features/Product/productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});


