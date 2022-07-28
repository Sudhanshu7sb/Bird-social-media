import React from 'react'

function Memories() {
    return (
        <div className='w-full  h-[100vh]  text-white bg-[#BC382E] flex flex-col space-x-2 space-y-2 md:flex-row justify-evenly items-center p-4'>
            <div className='w-full md:w-[50%] '>
                <h3 className='text-4xl font-thin my-6'>Hang on to your memories!</h3>
                <p className='text-lg'>
                    Save the moments that matter. Bird lets you safely store thousands of posts, photos, and more with Google.
                </p>
            </div>
            <div className='w-full md:w-[40%]'>
                <img src="https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEh7r45J6aUzNwBrtBWe2CXs5LL1nGAwY1bB0nvkL_N6F10oAHP6rzbil-hiJxgzLJhUiQpWKU_BbzJiMmkA4k1jlNUWmHjMWlTdxjukYGInSgG5jB0qvZj0mItNzK7bln1_jSiVgrvz7IN33WMnLe460zrnjD7thVD7U2U/w768" alt="world-map" className='w-[70%]'/>
            </div>
        </div>
    )
}

export default Memories