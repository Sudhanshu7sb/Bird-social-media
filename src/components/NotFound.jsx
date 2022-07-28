import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        
            <section className='w-full h-[80vh] flex flex-col justify-center items-center'>

                <h1 className='text-5xl text-blue-500 font-bold'>404</h1>
                <p className='text-3xl text-black'>The page you are looking for could not be found.
                </p>
            </section>
    )
}

export default NotFound