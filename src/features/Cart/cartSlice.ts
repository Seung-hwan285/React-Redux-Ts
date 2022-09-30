import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

interface CartState {
    cartItems: any[];
}

const initialState :  CartState= {
    cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")!) : [],
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
                toast.info(`${action.payload.name} 상품 추가`,{
                   position : "bottom-left"
                });
            }else{
                state.cartItems.push({...action.payload, cartCount :1});

                toast.success(`${action.payload.name} 상품 담기`,{
                    position : "bottom-right"
                });

            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

        },

        deleteCart(state,action){
            const itemIndex = state.cartItems.findIndex((item)=>{
                return item.id===action.payload.id;
            });

            if(itemIndex ===-1){
                alert('삭제할 상품이 장바구니에 없습니다');
            }

            if(state.cartItems[itemIndex].cartCount <= 1){
                state.cartItems=state.cartItems.filter((item) => item.id !== action.payload.id);
            }else{
                toast.success(`${action.payload.name} 삭제`,{
                   position: "bottom-left"
                });

                state.cartItems[itemIndex].cartCount -=1;

            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

        },

        minusCartToCount(state,action){

            const itemIndex = state.cartItems.findIndex((item)=>{
                return item.id ===action.payload.id;
            })
            const itemCount = state.cartItems[itemIndex].cartCount;

            if(itemCount>0){
                state.cartItems[itemIndex].cartCount-=1;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        plusCartToCount(state,action){
            const itemIndex = state.cartItems.findIndex((item)=>{
               return item.id ===action.payload.id;
            });

            const itemCount = state.cartItems[itemIndex].cartCount;

            if(itemCount >=0){
                state.cartItems[itemIndex].cartCount+=1;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        clearToCart(state){
            state.cartItems = [];
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },


    },
});



export const {addToCart,deleteCart,minusCartToCount,plusCartToCount,clearToCart}  = cartSlice.actions;

export default cartSlice.reducer;