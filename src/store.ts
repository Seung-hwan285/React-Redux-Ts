import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import ProductSlice, {productFetch} from "./features/Home/productSlice";
import productReducer from "./features/Home/productSlice";
import {productApi} from "./features/Home/productApi";
import cartReducers from "./features/Cart/cartSlice";
import modalReducers from "./features/Home/modalSlice";

export const store = configureStore({

    reducer: {

        products: productReducer,
        cart : cartReducers,
        modal : modalReducers,

        [productApi.reducerPath] : productApi.reducer,

    },


    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>

