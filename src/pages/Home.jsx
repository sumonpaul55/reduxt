/* eslint-disable no-unused-vars */
import React from 'react'
import Counter from '../components/Counter'

const Home = () => {
    return (
        <section className='mt-10'>
            <div className='container mx-auto'>
                <div className='border p-10 border-pink-500 rounded-lg'>
                    <h1 className='font-bold text-black'>Subject</h1>
                    <Counter></Counter>
                </div>
            </div>
        </section>
    )
}

export default Home