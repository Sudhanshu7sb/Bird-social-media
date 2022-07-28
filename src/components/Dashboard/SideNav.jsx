import React from 'react'

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col w-[25%] py-4 pr-3 self-start  ">
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Home</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Discover</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Notifications</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Inbox</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Saved Posts</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Groups</a>
			<a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Profile</a>
			<a className="flex px-3 py-2 mt-2 text-lg rounded-sm font-medium hover:bg-gray-200" href="#">
				<span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
				<div className="flex flex-col ml-2">
					<span className="mt-1 text-sm font-semibold leading-none">Username</span>
					<span className="mt-1 text-xs leading-none">@username</span>
				</div>
			</a>
		</div>
  )
}

 