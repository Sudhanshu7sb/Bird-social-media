import React from 'react'
import CreatePost from './CreatePost';
import SideNav from './SideNav';
import Trending from './Trending';

export default function Dashboard({currentLoggedInUser,userArray}) {
  // console.log((JSON.parse(localStorage.getItem("allUsers"))),"ds");
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      <SideNav/>
      <CreatePost currentLoggedInUser={currentLoggedInUser}/>
      <Trending />
    </div>
  )
}

 