import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redux/features/counter/CounterSlice"

console.log(counterReducer)

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store