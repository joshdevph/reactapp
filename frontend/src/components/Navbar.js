import React from 'react'
import { HiCode } from 'react-icons/hi';

const  Nabar = ({toggle}) => {
    return (
        <>
        <nav className="bg-gray-100 sticky shadow px-7 py-6 rounded-b-xl font-poppins md:items-center md:flex md:justify-between md:px-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <HiCode className="text-4xl"/><span className="text-xl md:text-4xl pl-2"> Re<span className="text-red-500">ACT.</span> </span>
                </div>
                <div className="flex flex-col space-y-1 w-6 h-5 md:hidden" onClick={toggle}>
                    <span className="bg-red-400 h-4 w-8"></span>
                    <span className="bg-red-400 h-4 w-6"></span>
                    <span className="bg-red-400 h-4 w-5"></span>
                </div>
            </div>
            <div className="flex hidden justify-center items-center md:flex md:flex-row space-x-4">
                <span className="tracking-widest antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">Home</span>
                <span className="tracking-widest antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">About</span>
                <span className="tracking-widest antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">Contact</span>
                <span className="tracking-widest antialiased text-sm px-7 ml-10 uppercase bg-red-300 p-2 rounded">Login</span>

            </div>
        </nav>
        </>
    )
}

export default Nabar
