import React, {useContext}from 'react'
import{GlobalState} from '../../../GlobalState'
import Loading from '../loading/Loading'
import ProductItem from './ProductItem'
function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <>
        {/* md:flex-wrap m-auto md:flex-row md:w-3/4 md:overflow-hidden  */}
        <div className="products w-full mt-5 flex flex-col md:grid md:grid-cols-4 md:w-5/6 md:gap-3   md:mx-auto ">
            {

                products.map(product => {
                    
                    return <ProductItem key={product._id} product={product} isAdmin={isAdmin} />
                })
            } 
        </div>


        {products.length === 0 && <Loading/>}
    
        </>
    )
}

export default Products
