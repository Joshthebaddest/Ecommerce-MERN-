import { Home, Shop, Contacts, Blogs } from './pages'
import { Nav, Footer, Signin, Signup, Cart, Checkout, Confirmation, Account, ProductContent } from './components'

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NotFound from './components/404';
import useAuth from './hooks/useAuth';


const App = () => {
    
    const { auth } =  useAuth()
    const navigate = useNavigate()
    console.log(auth)

    
    

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/auth">  
                    <Route path="signup" element={<Signup />}></Route>
                    <Route path="signin" element={<Signin />}></Route>
                </Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/checkout" >
                    <Route index element={auth?.user ? <Checkout /> : <Navigate to='/auth/signin' />}></Route>
                    <Route path="confirmation" element={auth?.user ? <Confirmation /> : <Navigate to='/auth/login' />}></Route>
                </Route>
                <Route path="/account" >
                    <Route index element={auth.user ? <Account /> :  <Navigate to="/auth/signin" />}></Route>
                </Route>
                <Route path="/shop" >
                    <Route index element={<Shop /> }></Route>
                    <Route path=":id/:name" element={<ProductContent />}></Route>
                </Route>
                <Route path="/blogs">
                    <Route index element={<Blogs /> }></Route>
                </Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer /> 
        </>
    )

}

export default App;