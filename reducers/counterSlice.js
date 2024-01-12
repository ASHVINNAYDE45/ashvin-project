import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: { countData: 0 },
    reducers: {
        increment: (state) => {
            console.log("===state====", state.countData);
            state.countData += 1;
        },
        decrement:(state)=>{
            console.log("===state===",state.countData)
            state.countData -= 1;
        },
    },
});

export const { increment ,decrement} = counterSlice.actions;

export default counterSlice.reducer;