import React, {useContext, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from "../../../GlobalState";
import ProductItem from './ProductItem'

function DetailProducts() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;
    return (
        <>
            <div className=" border-r-8 border-red-300 transition duration-300 ease-in flex flex-col w-4/5 mt-5 m-auto items-center justify-center bg-white md:grid md:grid-cols-2 md:w-1/2 md:h-64">
                <img className="md:m-auto md:object-cover md:h-64 md:w-full" src={detailProduct.images.url} alt="" />
                <div className="box-detail m-0 bg-gray-100 w-full pl-5 pb-4 md:h-full">
                    <div className="row mb-3 mt-3">
                        <h2 className="text-xl md:text-3xl capitalize font-bold">{detailProduct.title}</h2>
                        <h6 className="text-sm font-semibold">#pr_id: {detailProduct.product_id}</h6>
                    </div>
                    <span className="text-xs">$ {detailProduct.price}</span>
                    <p className="text-xs">{detailProduct.description}</p>
                    <p className="text-xs">{detailProduct.content}</p>
                    <p className="text-xs mb-3">Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="bg-gray-800 text-white rounded-full px-3 py-2 uppercase text-xs ">
                        Buy Now
                    </Link>
                </div>
            </div>

            <div className="md:w-3/5 m-auto mt-10">
                <h2 className=" ml-10 text-lg my-3 uppercase font-semibold tracking-wider md:ml-0">Related products > </h2>
                <div className="products w-full flex flex-col md:grid md:grid-cols-3 md:w-full md:gap-1 md:mx-auto md:h-48 " >
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProducts
