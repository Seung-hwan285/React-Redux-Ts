import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

interface CartState {
    cartItems: any[];
    cartToCount : number;
    cartToAmount : number;
}

const initialState :  CartState= {
    cartItems: [],
    cartToCount : 0,
    cartToAmount : 0,
};


export const cartSlice=createSlice({
    name : 'cart',
    initialState,
    reducers:{

        addToCart(state,action){

            const itemIndex = state.cartItems.findIndex((item)=>{
                return item.id===action.payload.id;
            })

            if(itemIndex>=0){
                state.cartItems[itemIndex].cartCount +=1;
                toast.info("상품 추가",{
                   position : "bottom-left"
                });
            }else{
                state.cartItems.push({...action.payload, cartCount :1});

            }
        }
    },

});



export const {addToCart}  = cartSlice.actions;

export default cartSlice.reducer;