import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    // console.log(count)
    return (
        <div>
            <h1 className='font-bold text-2xl'>Value: {count}</h1>
        </div>
    )
}

export default Counter