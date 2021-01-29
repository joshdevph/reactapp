import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import { FiShoppingCart, FiAlignRight, FiX } from "react-icons/fi";
function Header() {
    const value = useContext(GlobalState)
    return (
        <header className="flex justify-between items-center h-24 w-full m-auto py-2 shadow px-6">
            <div className="md:hidden">
                <FiAlignRight className=" mr-5 text-4xl md:hidden" />
            </div>

            <div>
                <h1 className="text-3xl font-bold">
                    <Link to="/"><span className="text-red-500">DEV</span>STORE</Link>
                </h1>
            </div>

            <div className="flex hidden space-x-8 md:flex md:items-center md:justify-center">
                <span className="text-xl"><Link to="/">Products</Link></span>
                <span className="text-xl"><Link to="/login">Login</Link></span>
                <Link to="/cart"><FiShoppingCart className="ml-6 text-2xl"/></Link>
                <span className="relative flex justify-center items-center w-6 h-6 bottom-3 right-10 bg-red-400 rounded-full">0</span>
            </div>


        </header>
    )
}

export default Header
