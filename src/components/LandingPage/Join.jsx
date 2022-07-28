import React from 'react'
import {Link} from "react-router-dom";

function Join() {
  return (
    <div className='w-full  h-[100vh]  text-white bg-[#E67400] flex flex-col space-x-2 space-y-2 md:flex-row justify-evenly items-center p-4'>
            <div className='w-full md:w-[50%] text-center md:text-left'>
                <h3 className='text-4xl font-thin my-6'>Join millions of others</h3>
                <p className='text-lg text-justify'>
                Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Bird. Sign up to discover why millions of people have published their passions here.
                </p>
                <div className='my-4 flex justify-center lg:justify-start'>

                <Link to="/register" className='py-2 px-4 border-0 bg-[#2F454F]  '>Join Now</Link >
                </div>
            </div>
            <div className='w-full md:w-[40%]'>
                <img src="assets/connect-to-people.png" alt="connect-to-people" />
            </div>
        </div>
  )
}

export default Join