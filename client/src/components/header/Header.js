import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import { FiShoppingCart, FiAlignRight} from "react-icons/fi";
function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart


    const logoutUser = async () =>{
        await axios.get('/api/user/logout')
        
        localStorage.removeItem('frstLogin')
        
        window.location.href = "/";
    }
    const adminRouter = () =>{
        return(
            <>
                <span className="text-md uppercase"><Link to="/create_products">create products</Link></span>
                <span className="text-md uppercase"><Link to="/category">categories</Link></span>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <span className="text-md uppercase"><Link to="/history">history</Link></span>
                <span className="text-md uppercase"><Link to="/" onClick={logoutUser}>logout</Link></span>
            </>
        )
    }
    return (
        <header className="w-full shadow  bg-gray-50">
            <div className="flex flex-row justify-between items-center m-auto w-5/6 py-5">
                <div className="md:hidden">
                    <FiAlignRight className=" mr-5 text-4xl md:hidden" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">
                        <Link to="/"><span className="text-red-500 uppercase tracking-widest">{isAdmin ? 'Admin panel' : 'Company'}</span></Link>
                    </h1>
                </div>

                <div className="hidden space-x-10 md:flex md:items-center md:justify-center">
                    <span className="text-md uppercase"><Link to="/">{isAdmin ? 'Product' : 'Shop'}</Link></span>

                    {isAdmin && adminRouter()} {
                        isLogged ? loggedRouter() : <span className="text-md uppercase"><Link to="/login">Login</Link></span>
                    }

                    { isAdmin ? '' :
                                    <div>
                                    <Link to="/cart"><FiShoppingCart className=" mt-4 text-2xl absolute"/></Link>
                                    <span className="relative text-sm font-semibold flex justify-center items-center w-7 h-7 top-0 left-3 bg-red-400 rounded-full">{cart.length}</span>
                                    <span className="relative text-sm font-semibold flex justify-center items-center w-7 h-7 bottom-7 left-3 bg-red-400 rounded-full animate-ping"></span>
                                    </div>
                    }
                    

                </div>
            </div>

        </header>
    )
}

export default Header
