import React, { useEffect, useState } from 'react'
import EditPost from './EditPost';
import { FaRegComment } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';



export default function CreatePost({ currentLoggedInUser }) {
	let navigate = useNavigate();

    console.log(currentLoggedInUser,localStorage.getItem("loggedIn"), (currentLoggedInUser == localStorage.getItem("loggedIn")), "isAuth")
    // let currentUser = localStorage.getItem("loggedIn");
    const [postContent, setPostContent] = useState("");
    const [feed, setFeed] = useState(JSON.parse(localStorage.getItem("feed")) || []);
    // // console.log(feed,"feed 1st");
    const [showPostEditModal, setShowPostEditModal] = useState(false);
    const [showPostToBeEdited, setShowPostToBeEdited] = useState(null);
    console.log(currentLoggedInUser,"curreLoggedIn");
    console.log(localStorage.getItem("loggedIn"),"local user");
    console.log(((currentLoggedInUser) == localStorage.getItem("loggedIn")),"checking auth")


    
    useEffect(() => {
        if((currentLoggedInUser == localStorage.getItem("loggedIn")) ){
            navigate("/dashboard")
        }
    },[])
    useEffect(() => {
        localStorage.setItem("feed", JSON.stringify(feed));
    }, [feed])
    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(feed, postContent, "postcreated")
         setFeed(feed => [...feed, { postID: Date.now(), contents: postContent, postAuthor: (localStorage.getItem("loggedIn")), createdOn: Date.now(), updatedOn: "", liked: false }]);
        console.log(feed, "feed");
        setPostContent(postContent => postContent ="");

    }
    const handleEdit = (post) => {
        setShowPostEditModal(true);
        setShowPostToBeEdited(post);

   }
    const handleDelete = (postId) => {
         return   setFeed(feed.filter(post => post.postID != postId))
    }

    const handleLike = (postId) => {
        let likePost = (feed.map(post=> {
          return  (post.postID == postId)? {...post,liked:true} : post
        }))
        setFeed(likePost)
    }

    const handleUnlike = (postId) => {
        let unlikePost = (feed.map(post=> {
          return  (post.postID == postId)? {...post,liked:false} : post
        }))
        setFeed(unlikePost)
    }

    
    return (
        <div className='relative z-10 mt-12 p-6 w-[80%] md:w-[80%] lg:w-[40%] h-[60vh]  flex flex-col justify-start md:justify-center items-start md:items-center'>
            {showPostEditModal ? <EditPost feed={feed}  setFeed={setFeed} showPostToBeEdited={showPostToBeEdited} setShowPostEditModal={setShowPostEditModal}   /> : ""}
            <form className="flex flex-col space-y-2 w-full p-8 border-b-4 border-gray-300" onSubmit={(e) => handleSubmit(e)}>
                <span className="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-blue-500 rounded-full text-white">{localStorage.getItem("loggedIn")[0]}</span>
                <div className="flex flex-col flex-grow ml-4">
                    <input type="text" className="p-3 bg-transparent border border-gray-500 rounded-sm" name="post-content" rows="3" value={postContent} placeholder="What's happening?" onChange={(e) => setPostContent(e.target.value)} />
                    <div className="flex justify-end mt-2">

                        <button type="submit" className={`flex items-center h-8 px-3 text-xs rounded-sm text-white ${!postContent ? 'disabled' : " bg-blue-500 hover:opacity-90"}`}>Tweet</button>
                    </div>
                </div>
            </form>
            {feed && feed.map(post => <div key={post.postID} className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-white">{post.postAuthor[0]}</span>
                <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                        <span className="font-semibold">{post.postAuthor}</span>

                    </div>
                    <p className="mt-1">{post.contents} </p>
                    <div className="flex justify-around mt-3">
                        <button className="text-sm font-semibold">{post.liked ? <AiFillHeart className='text-red-600 ' onClick={() => handleUnlike(post.postID)}/> : <AiOutlineHeart className='text-blue-500' onClick={() => handleLike(post.postID)}/>}</button>
                      
                        
                        {(localStorage.getItem("loggedIn").replace(/['"]+/g, '')) == post.postAuthor? (<>
                            <button className="ml-2 text-sm font-semibold"><FaRegComment /></button>
                            <button className="ml-2 text-sm font-semibold"><AiOutlineRetweet /></button>
                            <button className="ml-2 text-sm font-semibold"><FiEdit onClick={() => handleEdit(post)}/></button>
                            <button className="ml-2 text-sm font-semibold text-red-600"><FiTrash2 onClick={() => handleDelete(post.postID)}/></button>
                        </>) : (
                            <>
                                <button className="ml-2 text-sm font-semibold"><FaRegComment /></button>
                                <button className="ml-2 text-sm font-semibold"><AiOutlineRetweet /></button>
                            </>
                        )}

                    </div>
                </div>
            </div>
            )}


        </div>)
}

{/* {showPostEditModal ? <EditPost feed={feed} showPostToBeEdited={showPostToBeEdited} setFeed={setFeed} setShowPostEditModal={setShowPostEditModal}   /> : ""}
            <form className='flex flex-col w-[80%] md:w-[50%] ' onSubmit={(e) => handleSubmit(e)}>
                
                <label htmlFor="post-content" className='flex items-center  space-x-3 space-y-3' ><div className='w-12 h-12 mx-4 bg-blue-500 text-white rounded-full flex justify-center items-center '>"user"</div>Share something</label>

                <input type="text" name="post-content" value={postContent} placeholder="What's happening?" onChange={(e) => setPostContent(e.target.value)} className="outline-none p-1 ml-6" />
                {/* <input type="text" onChange={function (e) {
                    return console.log(e.target.value);
            //     }}/> */}
{/* //     <button type="submit" className='bg-blue-500 py-2 px-3 ml-6 text-white rounded-md self-center'>Tweet</button>
            // </form> */}

{/* <form class="flex flex-col space-y-2 w-full p-8 border-b-4 border-gray-300" onSubmit={(e) => handleSubmit(e)}>
					<span class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-blue-500 rounded-full text-white">{user.toUpperCase()}</span>
					<div class="flex flex-col flex-grow ml-4">
						<input type="text" class="p-3 bg-transparent border border-gray-500 rounded-sm" name="post-content"   rows="3" placeholder="What's happening?" value={postContent} onChange={(e) => setPostContent(e.target.value)}/>
						<div class="flex justify-end mt-2">
							
							<button type="submit" class="flex items-center h-8 px-3 text-xs rounded-sm text-white bg-blue-500 hover:bg-gray-400">Tweet</button>
						</div>
					</div>
				</form> */}


{/* <div className=' w-full flex-grow  mt-6 overflow-y-auto'>
                <h4 className='text-center'>Tweets</h4>
                {feed?.length > 0 ? feed.map((post, i) => <div key={post.postID} className=" flex justify-evenly items-center w-[90%] h-40 mx-6 border-[1px] border-slate-600">
                    <div className='w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center '>{user.toUpperCase()}</div>
                    <div className='flex flex-col justify-evenly items-center h-full'>

                        <h3 key={post.postID} className='text-rose-400'>{post.contents}</h3>
                        {console.log(post,user,"yrs")}
                        {(post.postAuthor) == user ?
                            (<div className='flex '>
                                <span onClick={(e) => setLike(!like)} className="mx-3 cursor-pointer">{like ? <AiFillHeart className='text-red-400' /> : <AiOutlineHeart />}</span>
                                <span onClick={(e) => handleEdit(post)} className="mx-3 cursor-pointer"><FiEdit /></span>
                                <span onClick={(e) => handleDelete(post)} className="text-red-600"><FiTrash2 /></span>
                            </div>) : ""
                        }
                    </div>
                </div>)
                    :
                    <h2> No feed to show </h2>}
            </div>

        </div>
    ) */}
{/* } */ }

{/* // export default CreatePost; */ }
{/* <div class="flex w-full p-8 border-b border-gray-300">
					<span class="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<div class="flex flex-col flex-grow ml-4">
						<div class="flex">
							<span class="font-semibold">Username</span>
							<span class="ml-1">@username</span>
							<span class="ml-auto text-sm">Just now</span>
						</div>
						<p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
						<div class="flex mt-2">
							<button class="text-sm font-semibold">Like</button>
							<button class="ml-2 text-sm font-semibold">Reply</button>
							<button class="ml-2 text-sm font-semibold">Share</button>
						</div>
					</div>
				</div> */}