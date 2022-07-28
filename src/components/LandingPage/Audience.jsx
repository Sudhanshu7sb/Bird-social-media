import React from 'react'
// import {ReactComponent as Map} from "../images/map.jpg"



export default function Audience() {
  return (
    <div className='w-full  h-[100vh]  text-white bg-[#577783] flex flex-col space-x-2 space-y-2 md:flex-row justify-evenly items-center p-4'>
        <div className='w-full md:w-[50%] '>
            <h3 className='text-4xl font-thin my-6'>Know your audience</h3>
            <p className='text-lg text-justify'>Find out which posts are a hit with Bird’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.</p>
        </div>
        <div className='w-full md:w-[40%]'>
            <img src="assets/world-map.jpg" alt="world-map" />
        </div>
    </div>
  )
}

