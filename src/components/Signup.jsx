import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Header from './LandingPage/Header';

export default function Signup({ error, setError, setUserLoggedIn, userLoggedIn, setUserArray, userArray }) {
    let navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [currUser, setCurrUser] = useState(null);
    const [userExist, setUserExist] = useState(null);
    const [userNameValid, setUserNameValid] = useState(null);

    const [passwordValid, setPasswordValid] = useState(false);

    const isValid = () => {
         var regEx = /^[0-9a-zA-Z]+$/;
      let userNameError =   !userName ? "username cannot be empty" : userName.length < 4 ? "username should be atlest 4 characters" : userName.match(regEx) ? "valid userName " : "userName should be alphNumeric";

      if(userNameError){
          return userNameError;
      }else {
          return setUserName(userName);
        //   setUserNameValid(userName)
          
      }
    }

    const handleSignUp = (e) => {

        e.preventDefault();
        if(!isValid) return 
        // const {userName,password} =e.target.elements;
        // (userName.length == 0 && password.length == 0) ? setError("fields cannot be empty") : "";
        console.log(userName.value, password.value, "user");

        let allUsersArrTemp = JSON.parse(localStorage.getItem("allUsers")) || [];
        console.log(allUsersArrTemp, "Temparr")
        let filteredArr = allUsersArrTemp.filter(user => userName == user.userName)
        if (allUsersArrTemp.length == 0 || filteredArr.length == 0) {
            setUserLoggedIn(true);
            setCurrUser({ userName, password });
            localStorage.setItem("allUsers", JSON.stringify([...userArray, { userName, password }]));
            localStorage.setItem("loggedIn", userName);
            setUserArray([...userArray, { userName, password }]);
            console.log(userLoggedIn);

            navigate("/dashboard", { replace: true });
        } else if (allUsersArrTemp.filter(user => user.userName == currUser)) { console.log("exists"); setUserExist(true) }
    }


    return (
        <>
            <Header />
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={(e) => handleSignUp(e)}>


                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Sign Up</p>
                                    
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="userName"
                                        placeholder="User Name"
                                        onChange={(e) => isValid(e.target.value)}
                                    />
                                    <small>{() => isValid()}</small>
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}

                                    />
                                    
                                </div>


                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className={`inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:cursor-pointer hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${!userName && !password ? 'disabled:opacity-20 bg-gray-600' : "bg-blue-600"}`}

                                    >
                                        Sign Up
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Have an account?
                                        <Link
                                            to="/login"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Login</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

