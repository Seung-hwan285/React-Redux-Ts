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
        openModal : (state,action)=>{
            state.show =true;
        },

        closeModal : (state,action)=>{
            state.show =false;
        }
    },
});

export const {openModal,closeModal} =modalSlice.actions;
export default modalSlice.reducer;