import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import useFetch from '../hooks/useFetch'

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    const [ cart, setCart ] = useState(null)
    const [ cartItems, setCartItems ] = useState(0)
    const [updateCart, setUpdateCart] = useState(false);
    const [total, setTotal] = useState(0)
    const [msg, setMsg] = useState(false)

    const { data, isPending, error } = useFetch('http://localhost:3500/products');

    useEffect(()=>{
        if(data){
            setProduct(data.product)
        }
    },[data])

    useEffect(()=>{
        const getCart = async() => {
            try{
                const response = await axios.get('http://localhost:3500/carts', {withCredentials: true })
                if(response.status == 200){
                    const { data } = response;
                    setCart(data.usersCart)
                    const totalPrice = data.usersCart.reduce((sum, product) => sum + product.price * product.quantity, 0);
                    setTotal(totalPrice)
                    setCartItems(data.usersCart.length)
                }
                setUpdateCart(false)
            }catch(err){
                console.log(err)
                if(err.response?.status == 400){
                    setTotal(0)
                    setCart(null)
                    setUpdateCart(false)
                }
            }
        }
        getCart()
    },[updateCart])


    const addToCart = async(id, quantity) => {
        if(cart){
            const cartItem = cart.find(item => item._id == id);
            if(cartItem) return
        }
        setCartItems(cartItems + 1);
        try{
            const response = await axios.post('http://localhost:3500/carts', {productId: id}, {withCredentials: true })
            const { data } = response
            console.log(data)
            setUpdateCart(true)
            if(quantity) {
                setTimeout(()=>{
                    updateItemQuantity(id, quantity)
                },3000)
            }
            setMsg(true)
            setTimeout(()=>{
                setMsg(false)
            },3000)
            
        }catch(error){
            console.log(error)
        }
    }

    const updateItemQuantity = async(id, quantity) => {
        console.log(id, quantity)
        let updatedCartItems;
        if(isNaN(quantity) || quantity < 1 ){
            quantity = 1
        }
        if(cart){
            updatedCartItems = cart.map(item =>
            item._id === id ? { ...item, quantity } : item
            );
        }
        
        try{
            const response = await axios.put(`http://localhost:3500/carts/${id}`, {quantity}, { withCredentials: true })
            // const { data } = response;
            setUpdateCart(true)
        }catch(err){
            console.log(err)
        }
        setCart(updatedCartItems);
    };

    const removeFromCart = async(id) => {
        setCartItems(cartItems - 1);
        try{
            const response = await axios.delete(`http://localhost:3500/carts/${id}`, { withCredentials: true })
            const { data } = response;
            setUpdateCart(true)
        }
        catch(err){
            console.log(err)
        }
    }

    const deleteCart = async(id) => {
        setCartItems(0);
        try{
            const response = await axios.delete(`http://localhost:3500/carts`, { withCredentials: true })
            const { data } = response;
            setUpdateCart(true)
        }
        catch(err){
            console.log(err)
        }
    }

    const getTotalCart = () => {
        if(!cart) return 0
        const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        return totalPrice
    }

    return (
        <StateContext.Provider value={{ product, setProduct, cart, setCart, updateCart, setUpdateCart, addToCart, removeFromCart, deleteCart, cartItems, updateItemQuantity, total, msg }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);