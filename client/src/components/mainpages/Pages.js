import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import Products from "./products/Products";
import DetailProducts from "./products/DetailProducts";
import Error from "./utils/NotFound/NotFound";
import Loading from './loading/Loading';

function Pages() {
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProducts} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/error" exact component={Error} />
        </Switch>
    )
}

export default Pages
