import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import ProductSlice, {productFetch} from "./features/Product/productSlice";
import productSlice from "./features/Product/productSlice";
import {productApi} from "./features/Product/productApi";

export const store = configureStore({

    reducer: {

        products: productSlice,

        [productApi.reducerPath] : productApi.reducer,

    },


    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware),



});


