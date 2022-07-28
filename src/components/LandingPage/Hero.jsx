import React from 'react';
import {BiChevronDown} from "react-icons/bi";

function Hero() {
    return (
        <section className='h-[100vh] w-full text-center flex flex-col bg-blue-500 justify-between items-center text-white'>
            <div className='mt-10 w-full p-3'>

            <h2 className='text-4xl font-thin my-5'>Publish your passions, your way</h2>
            <p className='text-2xl'>Create a unique and beautiful blog easily.</p>
            </div>
            {/* <div className='mb-5 w-12 h-12 rounded-full flex justify-center items-center bg-orange-500'>
                <BiChevronDown className='w-8 h-8 animate-bounce'/>
            </div> */}
            <img src="assets/social-media-hand-drawn.png" alt="social" className='mb-6 h-[50%] w-[50%]'/>
        </section>
    )
}

export default Hero