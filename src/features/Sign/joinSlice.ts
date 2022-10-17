import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface userState {
    name : string;
    password :string;
}

const initialState : userState={
    name : '',
    password : '',
}

export const Join = createAsyncThunk("/user",
    async(data: userState) => {
        const response = await axios.post("http://localhost:8888/user",data);
        return response.data;
});

export const joinSlice  =createSlice({
    name :'join',
    initialState,
    reducers:{},

    extraReducers : (builder)=>{
        builder.addCase(Join.pending,(state,action)=>{
            console.log('pending');
        });

        builder.addCase(Join.fulfilled,(state,action)=>{
            console.log('success');
        });

        builder.addCase(Join.rejected,(state,action)=>{
            console.log('rejected');
        });
    }
});

export default joinSlice.reducer;

