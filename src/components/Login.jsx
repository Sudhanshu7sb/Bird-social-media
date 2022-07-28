import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import Header from './LandingPage/Header'

function Login({error,setError,userLoggenIn,setUserLoggedIn,currentLoggedInUser,setCurrentLoggedInUser}) {
    let navigate  =useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [userNameError,setUserNameError] = useState(null);



    const handleLogin =  (e) => {
        e.preventDefault();
        let checkUserTaken =  localStorage.getItem("allUsers");
        console.log(checkUserTaken,"ccheck");
      let userExists =   JSON.parse(checkUserTaken).filter(user => user.userName.toLowerCase() == userName.toLowerCase());
      console.log(userExists,"userExists")
        
        if(userExists.length >0){
            
            localStorage.setItem("loggedIn" ,(userExists[0].userName) );
            setUserLoggedIn(true)
            setCurrentLoggedInUser({userName});
            console.log("should redirect");
            navigate("/dashboard",{replace:true});
        } else {
            setError("user doesn't exist.Sign up")
            navigate("/register",{replace:true});
        }
        // if not present show error and redirect to sign up

    }

    return (
        <>
            {/* <Header /> */}
            <section className="h-screen bg-orange-400">
                <div className="container px-6 py-12 h-full ">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={(e) => handleLogin(e)}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="User Name"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <small></small>
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}

                                    />
                                </div>

                                <small>{userNameError ? userNameError : ""}</small>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-[#3B82F6] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Log in
                                </button>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >

                                </div>

                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't Have an account?
                                    <Link
                                        to="/register"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login