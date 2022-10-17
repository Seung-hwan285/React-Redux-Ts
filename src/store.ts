import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./features/Home/productSlice";
import {productApi} from "./features/Home/productApi";
import cartReducers from "./features/Cart/cartSlice";
import modalReducers from "./features/Modal/modalSlice";
import joinReducers from "./features/Sign/joinSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart : cartReducers,
        modal : modalReducers,
        join: joinReducers,

        [productApi.reducerPath] : productApi.reducer,
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

