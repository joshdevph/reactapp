import React from 'react'

const  Nabar = ({toggle}) => {
    return (
        <>
        <nav className="bg-gray-100 sticky shadow px-5 py-6 font-poppins md:items-center md:flex md:justify-between md:px-10">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    DevJosh
                </div>
                <div className="flex flex-col space-y-1 w-6 h-5 md:hidden" onClick={toggle}>
                    <span className="bg-red-800 h-4 w-8"></span>
                    <span className="bg-red-800 h-4 w-6"></span>
                    <span className="bg-red-800 h-4 w-5"></span>
                </div>
            </div>
            <div className="flex flex-col hidden md:flex md:flex-row space-x-4">
                <span className="tracking-widest font-semibold antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">Home</span>
                <span className="tracking-widest font-semibold antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">About</span>
                <span className="tracking-widest font-semibold antialiased text-sm px-2 border-gray-100 border-b-4 hover:border-black transition duration-300 ease-in-out">Contact</span>
            </div>
        </nav>
        </>
    )
}

export default Nabar
