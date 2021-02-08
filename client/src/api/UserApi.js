import {useState, useEffect} from 'react'
import axios from 'axios'

function UserApi(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [user, setUser] =useState('')
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/api/user/getUser', {
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                    setUser(res.data._id)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    
    useEffect(() => {
        if(token){
            const gethistory = async() =>{
                const res = await axios.get('https://kinaon.herokuapp.com/api/user/history', {
                    headers:{Authorization:token}
                })
                setHistory(res.data)
                console.log(res);
            }
            gethistory()
        }
    },[token])
    

    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('https://kinaon.herokuapp.com/api/user/addcart', {user:user, cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })


        }else{
            alert("This product has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        user : [user, setUser],
        history: [history, setHistory]
    }
}

export default UserApi