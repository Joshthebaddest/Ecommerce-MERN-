import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '../hooks/useAuth';
import { DropdownNav, Signout } from '../components'
import { useStateContext } from '../context/useStateContext';


const Nav = () => {
    const [data, setData] = useState(null);
    const [removeClass, setRemoveClass] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth()
    const { cartItems, msg } = useStateContext()
    const md = window.innerWidth >= 768
    
    useEffect(() => {
      const handleResize = () => {
        setRemoveClass(window.innerWidth >= 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(()=>{
      let isMounted = true
      const controller = new AbortController()
      const getUser = async() => {
        try{
          const response = await axiosPrivate.get('http://localhost:3500/users', {
            signal: controller.signal
          })
          const { data } = response;
          isMounted && setData(data)
        }catch(error){
          console.log(error)
        }
      }
      getUser()

      return () => {
        isMounted = false
        controller.abort()
      }
    }, [auth])

    const toggleClass = () => {
      setDropdown(!dropdown)
    } 
    
  
    return (
        <>
            <nav className={`flex justify-between ${removeClass ? '' : 'relative inline-block'} relative`}>
              {msg && <p className='bg-red-400 text-white fixed top-0 left-[45%] py-2 px-5'>Item added to cart</p>}
                <h1 className='text-3xl font-bold'><Link to='/'>Joycee</Link></h1>              
                {/* <div id="myDropdown" className={`hidden ${removeClass ? '' : 'absolute top-0 dropdown-content'} md:flex md:justify-between border border-solid border-red-600 `}> */}
                  {md && <div >
                    <ul className="flex flex-col md:flex-row">
                      <li className='mt-5 md:mt-0'><Link to="/">Home</Link></li>
                      <li className='mt-5 md:mt-0'><Link to="/shop">Shop</Link></li>
                      <li className='mt-5 md:mt-0'><Link to="/blogs">Blog</Link></li>
                      <li className='mt-5 md:mt-0'><Link to="/contacts">Contact Us</Link></li>
                    </ul>
                  </div>}
                  {md && !auth?.accessToken && 
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
                  {md && auth?.accessToken && <div className="user-auth mt-5 md:mt-0">
                    <div className='nav-acc-con text-center relative'>
                      <span className='font-bold py-1 pt-0 px-3 mx-0 text-xl text-violet-950 rounded-full border border-solid border-black'>{auth.user.toUpperCase().slice(0,1)}</span>
                      <div className='nav-acc flex flex-col shadow absolute md:hidden bg-white'>
                        <Link to="/account" className='hover:underline'>Account Setting</Link>
                        <Signout />
                        {/* <Link className='hover:underline' >Logout</Link> */}
                      </div>
                    </div>
                    <Link to="/cart" className='relative'>
                      <i className="fa-solid fa-bag-shopping"></i>  
                      {cartItems > 0 && (
                        <span class="absolute top-[-10px] right-0 bg-red-500 text-white px-[5px] rounded-full text-[10px]">
                          {cartItems}
                        </span>
                      )}
                    </Link>
                  </div>}
                {!md && <DropdownNav dropdown={dropdown} /> }
              <div className="hamburger md:hidden" onClick={toggleClass}><i className={`fa-solid ${ !dropdown ? 'fa-bars' : 'fa-xmark'} fa-shake`}></i></div>
            </nav>
        </>
    )

}

export default Nav;