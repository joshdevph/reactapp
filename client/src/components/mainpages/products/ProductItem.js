import React from 'react'

function ProductItem({product}) {
    return (
        <>
            <div className=" overflow-hidden mx-auto h-full bg-aqua my-2 bg-white shadow-lg rounded-3xl w-3/4 md:h-1/2 md:w-1/3 ">
                <div className="bg-blue-100">
                    <img className="object-cover w-full h-64 m-auto rounded mt-2" src={product.images.url} alt=""/>
                </div>

                <div className="bg-red-300 p-4 h-full md:h-full">
                    <h2 className="text-xl uppercase font-bold">{product.title}</h2>
                    <span className="font-semibold">${product.price}</span>
                    <p>Description: {product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductItem
