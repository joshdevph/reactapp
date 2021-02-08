import React, { createContext, useState, useEffect} from 'react';
import ProductsApi from "./api/ProductsApi";
import UserAPI from './api/UserApi';
import  axios from "axios";
export const GlobalState = createContext();

export const DataProvider = ({children}) => {
    const [ token , setToken] = useState(false)

    const refreshToken = async () =>{
        const res = await axios.get('https://kinaon.herokuapp.com/api/user/refresh_token')
        setToken(res.data.accesstoken)
    }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('frstLogin')

        if(firstLogin){
            refreshToken()
        }
    },[])


    const state = {
        token : [token, setToken],
        productsApi: ProductsApi(),
        userAPI: UserAPI(token),

    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}