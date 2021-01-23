import React from 'react'

const Dropdown = ({isOpen,toggle}) => {
    return (
            <div className={isOpen ? 'flex flex-col text-left bg-red-400 p-10 transition duration-300 ease-in-out' : 'hidden'} onClick={toggle} >
                <span className="py-3 pl-6 cursor-pointer hover:bg-gray-500 hover:text-white ">Home</span>
                <span className="py-3 pl-6 cursor-pointer hover:bg-gray-500 hover:text-white ">About</span>
                <span className="py-3 pl-6 cursor-pointer hover:bg-gray-500 hover:text-white ">Contact</span>
            </div>
    )
}

export default Dropdown
