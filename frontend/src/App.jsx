import { Home, Shop, Contacts, Blogs } from './pages'
import { Nav, Footer, Signin, Signup, Cart, Checkout, Confirmation, Account, ProductContent } from './components'

import { Routes, Route } from "react-router-dom";
import NotFound from './components/404';


const App = () => {

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
                    <Route index element={<Checkout />}></Route>
                    <Route path="confirmation" element={<Confirmation />}></Route>
                </Route>
                <Route path="/account" >
                    <Route index element={<Account /> }></Route>
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