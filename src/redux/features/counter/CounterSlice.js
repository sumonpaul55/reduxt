import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 5,
}

const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers: { // it should be "reducers""Must have to use "s"
        decreamentByten: (state, action) => {
            state.count -= action.payload
        },
        increament: (state) => {
            state.count = state.count + 1
        },
        decreament: (state) => {
            state.count = state.count - 1
        },
        inCreamentByValue: (state, action) => {
            state.count = state.count + action.payload;
        },


    }
})

export const { increament, decreament, inCreamentByValue, decreamentByten } = counterslice.actions

export default counterslice.reducer // here only reducer