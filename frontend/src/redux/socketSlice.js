import {createSlice} from "@reduxjs/toolkit";
const socketSlice = createSlice({
    name:"socket",
    initialState:{
        socket:null
    },
    reducers:{
        setSocket:(state, action)=>{
            state.socket = action.payload;
        }
    }
});

