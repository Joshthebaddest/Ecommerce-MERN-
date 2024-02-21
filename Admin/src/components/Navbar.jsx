import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'
import { Cart, Chat, Notification, UserProfile} from '.'
import { useStateContext } from '../context/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return(
  <>
    <button type='button' id={title} className='relative text-xl rounded-full p-3 hover:bg-light-gray' onClick={customFunc} style={{ color }}>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      { icon }
    </button>
    <Tooltip anchorSelect={`#${title}`} content={title}/>
  </>
  )
}


const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick, setScreenSize, screenSize } = useStateContext();

  useEffect(()=>{
    const handleResize = () =>{
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=> { setActiveMenu((prevActiveMenu)=> prevActiveMenu ? false : true)}} color="blue" icon={<AiOutlineMenu/>}/>
      <div className='flex'> 
        <NavButton title="Cart" customFunc={()=> handleClick('cart')} color="blue" icon={<FiShoppingCart/>}/>
        <NavButton title="Chat" dotColor="#03C907" customFunc={()=> handleClick('chat')}  color="blue" icon={<BsChatLeft/>}/>
        <NavButton title="Chat" dotColor="#03C907" customFunc={()=> handleClick('notification')}  color="blue" icon={<RiNotification3Line/>}/>

        <div type='button' id="profile" className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=> handleClick('useProfile')}>
          <img src={''} alt="" className='rounded-ful w-8 h-8'/>
          <p>
            <span className='text-gray-400 text-14'>Hi</span> { ' ' }
            <span className='text-gray-400 font-bold ml-1 text-14'>{ 'Micheal' }</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 font-bold ml-1 text-14' />

        </div>
        <Tooltip anchorSelect="#profile" content="Profile" />

        {isClicked.cart && <Cart /> }
        {isClicked.chat && <Chat /> }
        {isClicked.notification && <Notification /> }
        {isClicked.userProfile && <UserProfile /> }
      </div>
    </div>
  )
}

export default Navbar