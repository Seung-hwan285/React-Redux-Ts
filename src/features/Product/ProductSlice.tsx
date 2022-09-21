import {createSlice} from "@reduxjs/toolkit";


interface ProdocotsState {
    items: unknown[];
    status : null;
}

const initialState :  ProdocotsState= {
    items: [],
    status : null,
};

const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
})


export default ProductSlice.reducer;

