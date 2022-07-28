import React, { useEffect, useState } from 'react'

import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ userLoggedIn,setUserLoggedIn }) {
    const [headerBackGroundColor, setHeaderBackGroundColor] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setHeaderBackGroundColor(true);
            }
            else {
                setHeaderBackGroundColor(false);
            }
        })
    }, [headerBackGroundColor])

    return (
        <div className={`w-full mb-16 z-50 `}>

            <nav className={`fixed top-0 w-full flex flex-wrap items-center justify-start md:justify-between py-4  text-white ${headerBackGroundColor ? 'bg-white text-black' : 'bg-blue-500'}`}>
                <div className="container-fluid w-[50%] flex items-center justify-between px-6">
                    <Link to="/" className="container-fluid cursor-pointer flex items-center mt-2 lg:mt-0 mr-1">

                        <div className='w-9 h-9 p-2 bg-orange-400 rounded-lg flex justify-center items-center'>

                            <FaTwitter className="w-6 h-6 text-white  " loading="lazy" />
                        </div>
                        <span className="font-medium ml-5 ">Bird</span>

                    </Link>
                </div>
                <div className='mr-5'>
                    {userLoggedIn ? (<>
                    <Link to="/login" className='mr-5 hover:underline cursor-pointer' onClick={()=> {setUserLoggedIn(false);
                    localStorage.setItem("loggedIn",null);
                    }}>Log Out</Link>
                </>) : (<><Link to="/register" className='mr-5 hover:underline cursor-pointer'>SIGN IN</Link>
                <Link to="/login" className='mr-5 hover:underline cursor-pointer'>LOG IN</Link></>)}

                </div>
            </nav>
        </div>
    )
}
