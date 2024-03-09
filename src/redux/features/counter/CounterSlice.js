import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterslice = createSlice({
    name: "counter",
    initialState,
    reducer: {
        increament: (state) => {
            state.count = state.count + 1
        },
        decreament: (state) => {
            state.count = state.count - 1
        }
    }
})

export const { increament, decreament } = counterslice.actions

export default counterslice.reducer