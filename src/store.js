import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redux/features/counter/CounterSlice"


export default configureStore({
    reducer: {
        counter: counterReducer
    }
})