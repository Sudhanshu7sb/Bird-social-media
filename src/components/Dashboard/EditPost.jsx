import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";

function EditPost({setShowPostEditModal,showPostToBeEdited,setShowPostToBeEdited,feed,setFeed}) {
  let navigate  =useNavigate();
let {contents,updatedOn} = showPostToBeEdited;
console.log(contents,updatedOn,"postedit") 
const [postAfterSave,setPostAfterSave] = useState({...showPostToBeEdited})
console.log(feed,"beforeEdit");
    console.log(showPostToBeEdited,"to edit");
    console.log(postAfterSave,"postAfterSaveInitial")

    const handleSave = (e) => {
      e.preventDefault();
        setPostAfterSave(postAfterSave);
      setFeed(feed => feed.map(post => post.postID == postAfterSave.postID ? {...post,contents:postAfterSave.contents,updatedOn:Date.now()} : post));


      setShowPostEditModal(false);
      navigate("/dashboard",{replace:true});
    }

    // useEffect(() => {

    // },[postAfterSave])

    // const handleSave=(e)=>{
    //     e.preventDefault();
    //     let currentFeed = JSON.parse(localStorage.getItem("feed"));
    //     console.log(currentFeed,"currFeed");
    //     setPostAfterSave(postAfterSave);
    //     // {...setShowPostToBeEdited}
    //     // setShowPostToBeEdited({...contents,})
    //     let lsFeed = JSON.parse(localStorage.getItem("feed"));
    //     let req = lsFeed.map(post => post.postID == postAfterSave.postID ? {...post,contents:postAfterSave.contents} :  post)
    //     console.log(req,"chnage feed")
    //     setFeed(req);
    //     // navigate("/dashboard",{replace:true});
    //     setShowPostEditModal(false);
        

    // }

    // useEffect(() => {
    //   console.log(postAfterSave,"pas");
    //   let lsFeed = JSON.parse(localStorage.getItem("feed"));
    //   console.log(lsFeed,"lsfeed");
    //   // postAfterSave
    //  let req = lsFeed.map(post => post.postID == postAfterSave.postID ? {...post,contents:postAfterSave.contents} :  post)
    //  console.log(req,"chnage feed")
    // //  localStorage.setItem("feed",JSON.stringify(req));


    // }, [postAfterSave])
    
  return (
    <div className='absolute bg-orange-400 text-white z-10 flex justify-center  h-[30vh] w-[100%] '>
    {postAfterSave? console.log(postAfterSave,"after save")  : ""}

    <form className='flex flex-col justify-evenly w-1/2' onSubmit={(e) => handleSave(e)}>

        
        <label htmlFor="post-content" className=''>Editing Tweet Content..</label> 

        <input type="text" name="post-content" placeholder='enter post contents'  defaultValue={contents}  onChange={(e) => setPostAfterSave((prevState) => ({...showPostToBeEdited,contents:e.target.value}))} className="text-black p-1"/>
        <div className='flex space-x-6'>

        <button type="submit" className='bg-blue-400 px-3 py-2'>save Tweet</button>
        <button type="button" onClick={() => setShowPostEditModal(false)} className="bg-red-400 px-3 py-2">Cancel</button>
        </div>

    </form>
    

</div>
  )
}

export default EditPost