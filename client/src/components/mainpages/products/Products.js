import React, {useContext}from 'react'
import{GlobalState} from '../../../GlobalState'
import ProductItem from './ProductItem'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    return (
        <>
        <div className="products w-full h-screen bg-gray-100 flex flex-col md:flex-wrap m-auto md:flex-row md:w-3/4 md:overflow-hidden ">
            {

                products.map(product => {
                    
                    return <ProductItem key={product._id} product={product} />
                })
            } 
        </div>
        </>
    )
}

export default Products
