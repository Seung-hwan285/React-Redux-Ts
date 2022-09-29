import {createSlice} from "@reduxjs/toolkit";

interface ModalType{
    show : boolean;
}

const initialState : ModalType={
    show : false,
}

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        showOpen : (state)=>{
            state.show =true;
        },
        showClose : (state)=>{
            state.show =false;
        }
    },
});

export const {showOpen, showClose} =modalSlice.actions;
export default modalSlice.reducer;