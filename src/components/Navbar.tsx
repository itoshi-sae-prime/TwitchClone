import React from 'react';
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsFillInboxFill } from "react-icons/bs";
const Navbar = () => {
    const [user, setUser] = useState<any>("");
    return (
        <div className="bg-white px-4 py-[0.6rem] flex justify-between items-center">
            {/* Left */}
            <div className="flex justify-center items-center gap-5 ">
                <img src="https://freepngimg.com/thumb/logo/92693-kpop-jyp-entertainment-twice-black-circle.png" className="w-10 h-10" />
                <div>
                    <p className='font-semibold'>Explore</p>
                </div>
                <BsThreeDotsVertical className='text-[20px]' />
            </div>
            {/* Middle */}
            <div className=' items-center bg-slate-300 px-3 rounded-full hidden md:flex'>
                <FaSearch />
                <input
                    placeholder='Search'
                    type='search'
                    className="outline-0 bg-slate-300 pl-3 p-1.5 sm:w-[10rem] md:w-[20rem] lg:w-[30rem]"
                />
            </div>
            {/* Right */}
            <div className='flex items-center gap-5'>
                <div className='relative pr-2'>
                    <BsFillInboxFill className='text-[25px]' />
                    <div className='absolute bg-red-500 -top-[0.4rem] left-2 w-7 h-4 rounded-full flex items-center justify-center'>
                        <p className='text-white font-bold text-[12px] animate-pulse'>19</p>
                    </div>
                </div>
                <div className='bg-gray-300 py-1 px-3 rounded-md sm:py-1 sm:px-3 md:py-1 md:px-3'>
                    <button className='font-semibold'>Sign in</button>
                </div>
                <div className='bg-black py-1 px-3 rounded-md'>
                    <button className='font-semibold text-white'>Sign up</button>
                </div>
            </div>

        </div>
    )
}
export default Navbar 
