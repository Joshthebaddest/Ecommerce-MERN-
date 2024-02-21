import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const StateContext = createContext({});

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,

}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [product, setProduct] = useState(null)
    const [updatedProduct, setUpdatedProduct] = useState(true)
    const [url, setUrl] = useState(null)


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }


    return <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, product, setProduct, updatedProduct, setUpdatedProduct, setUrl}}>
        { children } 
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)