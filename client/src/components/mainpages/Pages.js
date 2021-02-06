import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import Products from "./products/Products";
import DetailProducts from "./products/DetailProducts";
import Error from "./utils/NotFound/NotFound";
import { GlobalState } from "../../GlobalState"
import History from './history/History';

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProducts} />
            <Route path="/login" exact component={ isLogged ? Error : Login} />
            <Route path="/register" exact component={ isLogged ? Error : Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/history" exact component={History}/>
            <Route path="/error" exact component={Error} />
        </Switch>
    )
}

export default Pages
