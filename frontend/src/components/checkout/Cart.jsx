import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useStateContext } from "../../context/useStateContext";

const Cart = () => {
    // const [cart, setCart] = useState(null)
    const [updatCart, setUpdateCart] = useState(false);
    const { cart, setCart, updateItemQuantity, total, removeFromCart, deleteCart } = useStateContext()
    // const [total, setTotal] = useState(0)

    // const removeItems = async(e) => {
    //     const response = await axios.delete(`http://localhost:3500/carts/${e.target.id}`, { withCredentials: true })
    //     const { data } = response;
    //     setUpdateCart(true)
    // }
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(() => (
    //         value,
    //     ));
    // };


    // useEffect(()=>{
    //     const getCart = async() => {
    //         try{
    //             const response = await axios.get('http://localhost:3500/carts', {withCredentials: true })
    //             if(response.status == 200){
    //                 const { data } = response;
    //                 setCart(data.usersCart)
    //                 const totalPrice = data.usersCart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    //                 setTotal(totalPrice)
    //             }
    //             setUpdateCart(false)
    //         }catch(err){
    //             console.log(err)
    //             if(err.response?.status == 400){
    //                 setTotal(0)
    //                 setCart(null)
    //                 setUpdateCart(false)
    //             }
    //         }
    //     }
    //     getCart()
    // }, [updatCart])

    return (
        <>
            <div className="cart p-14.5 grid md:grid-cols-2">
                <div className="cart-items shadow p-5">
                    <h3 className="text-2xl mb-5">My Cart</h3>
                        {cart ? (<div>
                        {cart.map((item) =>(
                            <div className="cart-card grid" key={item._id}>
                                <div className="cart-card-img p-5">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                
                                <div className="cart-card-content relative py-5">
                                    <p className="p-1.5 text-sm"><strong>${item.price}</strong></p>
                                    <p className="p-1.5 text-sm">{item.productName}</p>
                                    <p className="p-1.5 text-sm">Qty: <input className="outline-none px-1.5" type="number" name="quantity" id="qty" value={item.quantity} onChange={(e) => updateItemQuantity(item._id, parseInt(e.target.value))} /></p>
                            
                                    <button className="mt-5 px-2.5"><i class="fa-regular fa-heart"></i> save for later</button> 
                                    <button className="close border-none absolute top-0 right-2" onClick={()=>removeFromCart(item._id)} ><i id={item._id} class="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>))}
                            <div className="flex justify-end">
                                <button className="bg-black text-white border-2 border-solid px-3 rounded-none" onClick={deleteCart}>clear</button>
                            </div>

                        </div>)
                        : (<p>Your cart is empty.</p>)
                        }
                </div>
                <div className="cart-total shadow p-5 my-2.5 border-solid md:mt-0 md:ml-5 h-fit">
                    <h3 className="text-2xl mb-5">TOTAL</h3>
                    <hr />
                    <p className="mt-3">Sub-total <span className="float-right text-sm">${total}</span></p>
                    <p className="mt-3">Deivery</p>
                    <span className="mt-3 block text-sm">Standard Delivery {"(free)"}</span><br />
                    <hr />
                    <button className="my-5 py-2.5 text-center"><Link to="/checkout">CHECKOUT</Link></button>
                    <p>WE ACCEPT:</p>
                    <span className="text-sm">Got a discount code? Add in the next step</span> 
                </div>
            </div>
        </>
    )

}

export default Cart;