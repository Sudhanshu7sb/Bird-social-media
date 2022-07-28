import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Landing from './components/LandingPage/Landing';
import Header from './components/LandingPage/Header';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound';


function App() {
	let navigate = useNavigate();

	const [userArray, setUserArray] = useState(JSON.parse(localStorage.getItem("allUsers")) || []);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [currentLoggedInUser ,setCurrentLoggedInUser] = useState(localStorage.getItem("loggedIn")  );
	const [error,setError] = useState("");
useEffect(() => {
	window.localStorage.getItem('loggedIn');
	setCurrentLoggedInUser((window.localStorage.getItem("loggedIn")))
  
}, [currentLoggedInUser])

	useEffect(() => {
		window.localStorage.setItem('allUsers', JSON.stringify(userArray));

	}, [userArray]);

	



	useEffect(() => {
		window.localStorage.getItem('allUsers');
		window.localStorage.getItem('loggedIn');


	}, [userArray]);


	return (
		<div className="App ">
			<Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
			<Routes>
				<Route path="/" element={<Landing />}></Route>
				<Route path="/register" element={<Signup setUserArray={setUserArray} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} userArray={userArray} error={error} setError={setError}/>}></Route>
				<Route path="/login" element={<Login currentLoggedInUser={currentLoggedInUser} setCurrentLoggedInUser={setCurrentLoggedInUser} userArray={userArray} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} error={error} setError={setError} />}></Route>
				{userLoggedIn   ?
					<Route path="/dashboard" element={<Dashboard userArray={userArray} currentLoggedInUser={currentLoggedInUser}/>}></Route>
					:

					<Route path="/dashboard" element={<Navigate to="/login" replace={true}  />}></Route>
				}

				<Route path="*" element={<NotFound />} ></Route>
			</Routes>
		</div>
	)
}

export default App
