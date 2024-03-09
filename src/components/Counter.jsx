import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../redux/features/counter/CounterSlice'

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // console.log(count)

    return (
        <div className='flex items-center gap-3 mt-10'>
            <button onClick={() => dispatch(increament())} className='font-bold text-4xl size-20 bg-red-200'>+</button>
            <h1 className='font-bold text-2xl'>Value: {count}</h1>
            <button onClick={() => dispatch(decreament())} className='font-bold text-4xl size-20 bg-red-200'>-</button>
        </div>
    )
}

export default Counter