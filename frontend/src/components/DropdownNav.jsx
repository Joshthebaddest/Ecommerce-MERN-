import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '../hooks/useAuth';
import { Signout } from '../components'
import { useStateContext } from '../context/useStateContext';


const DropdownNav = ({dropdown}) => {
    const [data, setData] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth()
    const { cartItems, msg } = useStateContext()
    const [dropdownbar, setDropdownbar] = useState(false);

    useEffect(()=>{
        setDropdownbar(dropdown)
    },[dropdown])
    
  
    return (
        <>
            <div id="myDropdown" className={`${dropdown ? 'flex': 'hidden'} md:flex pt-10 text-xl flex-col md:flex-row md:pt-0`}>
                <div >
                    <ul className="flex flex-col md:flex-row">
                        <li className='mt-5 md:mt-0'><Link to="/">Home</Link></li>
                        <li className='mt-5 md:mt-0'><Link to="/shop">Shop</Link></li>
                        <li className='mt-5 md:mt-0'><Link to="/blogs">Blog</Link></li>
                        <li className='mt-5 md:mt-0'><Link to="/contacts">Contact Us</Link></li>
                    </ul>
                </div>
                {!auth?.accessToken && 
                <div className="nav-icons mt-5 md:mt-0">
                <Link to="/auth/signin">Log in</Link>
                <Link to="/cart" className='relative'>cart 
                    <i className="fa-solid fa-bag-shopping ml-2"></i>
                    {cartItems > 0 && (
                    <span class="absolute top-[-10px] right-0 bg-red-500 text-white px-[5px] rounded-full text-[10px]">
                        {cartItems}
                    </span>
                    )}
                </Link>
                </div>}
                {auth?.accessToken && <div className="user-auth mt-5 md:mt-0">
                <div className='nav-acc-con text-center relative'>
                    <i className="fa-solid fa-user "></i>
                    <div className='nav-acc flex flex-col shadow absolute md:hiddenr'>
                    <Link to="/account" className='hover:underline'>Account Setting</Link>
                    <Signout />
                    {/* <Link className='hover:underline' >Logout</Link> */}
                    </div>
                </div>
                <Link to="/cart">
                    <i className="fa-solid fa-bag-shopping"></i>  
                    {cartItems > 0 && (
                    <span class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                        {cartItems}
                    </span>
                    )}
                </Link>
                </div>}
            </div>
        </>
    )

}

export default DropdownNav;