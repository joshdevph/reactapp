import React,{useContext} from 'react'
import { FiShoppingCart, FiEdit3, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
function ProductItem({product, isAdmin}) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    return (
        <>
            <div className=" overflow-hidden mx-auto bg-aqua my-2 bg-white shadow-lg rounded-lg w-3/4 md:w-full md:ml-2 md:h-96  ">
                {
                    isAdmin ? <input className="ch_box  absolute form-checkbox m-2 text-lg ring-4 ring-red-400 rounded-md   " type="checkbox"/> : ''
                }
                <div className="bg-blue-100">
                    <img className="object-cover w-full h-56 m-auto rounded" src={product.images.url} alt=""/>
                </div>

                <div className=" bg-gray-50 p-4 h-full md:h-full overflow-ellipsis">
                    <h2 className="text-xl uppercase font-bold truncate tracking-wide">{product.title}</h2>
                    <span className="font-semibold text-xs">${product.price}</span>
                    <p className="truncate text-xs">Description: {product.description}</p>
                    {
                        isAdmin ?
                        <div className=" flex justify-between items-center border-t-4 mt-2 border-red-300">
                            <Link to={`/detail/${product._id}`}><button className="bg-gray-200 mt-5  w-24    text-sm p-1 rounded-full transition duration-200 ease-out flex items-center justify-center cursor-pointer   hover:bg-red-300 hover:text-white "><FiTrash className="text-md mr-3"/>Delete</button></Link>
                            <span className="mt-5  w-24  text-sm p-1 bg-red-300 hover:bg-gray-300  rounded-full transition duration-200 ease-out flex items-center justify-center cursor-pointer  "><FiEdit3  className="text-md mr-3"/> Edit </span> 
                        </div>
                        :
                        <div className=" flex justify-between items-center border-t-4 mt-2 border-red-300">
                            <Link to={`/detail/${product._id}`}><button className="bg-gray-200 p-1 mt-5 capitalize font-semibold transition duration-200 ease-out text-xs w-20 focus:outline-none  rounded-full hover:bg-red-400 hover:text-white tracking-widest">View</button></Link>
                            <span className="mt-4 bg-red-400 h-10 w-10 text-md p-2 rounded-full hover:bg-red-400 hover:text-white transition duration-200 ease-out flex items-center justify-center cursor-pointer  " onClick={() => addCart(product)}><FiShoppingCart className="text-md"/></span> 
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductItem
