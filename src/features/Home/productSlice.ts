import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// 리덕스 툴키 내장 createAsyncThunk 사용해서 비동기 처리를한다. api 처리할때 주로 사용
// 굳이 useEffect를 사용하지 않아도 된다.

// extraReducers slice.actions에서 생성되지 않은 aciton을 사용할 수 있게 해준다.
// reducer은 내부에서 진행되는 action 및 동기 action , extraReducersdms 비동기 action을 넣는 공간

interface ProductsState {
    items: unknown[];
    status : string;
}

export const productFetch = createAsyncThunk(
        "products/productFetch", // action 이름
    async ()=>{
            const response = await axios.get('http://localhost:5000/products');
            return response.data;
    }
);


const initialState :  ProductsState= {
    items: [],
    status : "",
};


const productSlice = createSlice({
    name: 'products',
    initialState,
    //동기 / 내부  action
    reducers: {

        
    },

    // 비동기 /외부 aciton
    extraReducers:(builder)=>{

        // 호출 전
        builder.addCase(productFetch.pending,(state,action)=>{
            console.log('pending');
            state.status = "pending";
        });

        // 성공
        builder.addCase(productFetch.fulfilled,(state, action)=>{
           console.log('success');
           state.status ="success";
           state.items = action.payload;
        });

        // 실패
        builder.addCase(productFetch.rejected,(state,action)=>{
            state.status = "rejected";
        })
    },
})


export default productSlice.reducer;

