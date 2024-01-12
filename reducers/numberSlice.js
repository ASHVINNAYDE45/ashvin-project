import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
    name: "numberData",
    initialState: { numData: 1000 },
    reducers: {
        increment1: (state) => {
            console.log("===state====", state);
            
        },
        decrement1:(state)=>{
            console.log("===state===",state)
            state.value-=1
        }
    },
});

export const { increment1,decrement1 } = numberSlice.actions;

export default numberSlice.reducer;