import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import ProductSlice, {productFetch} from "./features/Product/productSlice";
import productReducer from "./features/Product/productSlice";
import {productApi} from "./features/Product/productApi";
import cartReducers from "./features/Cart/cartSlice";

export const store = configureStore({

    reducer: {

        products: productReducer,
        cart : cartReducers,

        [productApi.reducerPath] : productApi.reducer,

    },


    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware),



});


