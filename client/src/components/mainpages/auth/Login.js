import React,{useState} from 'react'
import  axios from "axios";
import { Link } from "react-router-dom";


function Login() {
    const [ user, setUser] = useState({
        name:"", email:"", password:""
    })

    const onChange = e =>{
        const {name, value} = e.target
        setUser({...user , [name]:value })
    }

    const login = async e =>{
        e.preventDefault()
        try {
            await axios.post('/api/user/login', {...user})
            localStorage.setItem('frstLogin', true)
            window.location.href= "/"
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    return (
            <div className="bg-red-300 h-96 w-5/6  md:w-1/4 flex flex-col justify-center items-center m-auto mt-24 rounded-md">
                <div className=" h-full flex flex-col justify-around items-center w-full">
                    <div>
                        <h1 className="text-4xl">Login</h1>
                    </div>
                    <form onSubmit={login} className="flex flex-col space-y-3 w-full px-4 md:px-7">
                        <input type="text"     required  name="email" className="  h-10 pl-2 rounded-md bg-red-50 text-black font-bold  text-xs focus:outline-none" placeholder="Email"  value={user.email} onChange={onChange}/>

                        <input type="password" required name="password" className="  h-10 pl-2 rounded-md bg-red-50 text-black font-bold  text-xs focus:outline-none" placeholder="Password" value={user.password} onChange={onChange}/>

                        <button type="submit" className="inline-block bg-red-400 rounded-sm uppercase p-2 focus:outline-none">Login</button>
                        <Link to="/register" className="inline-block"><button type="submit" >Register</button></Link>
                    </form>
                </div>
            </div>
    )
}

export default Login
