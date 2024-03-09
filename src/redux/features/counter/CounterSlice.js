import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 5,
}

const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers: { // it should be "reducers""Must have to use "s"
        increament: (state) => {
            state.count = state.count + 1
        },
        decreament: (state) => {
            state.count = state.count - 1
        }
    }
})

export const { increament, decreament } = counterslice.actions

export default counterslice.reducer // here only reducer