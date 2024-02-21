import { useStateContext } from "../../context/useStateContext";

const Order = () => {
    const { cart, total } = useStateContext()

    return (
        <>
            <div className="order p-14.5">
                <div className="order-items shadow p-5">
                    <h3 className="text-xl mb-5 pb-2 border-b-2">ORDER SUMMARY</h3>
                    {cart && cart.map((item)=>(<div key={item._id} className="order-card mb-2 flex justify-between">
                        <img src="" alt="" />
                        <p className="p-1.5 text-sm">{item.productName}</p>
                        <p className="p-1.5 text-sm">{item.quantity}</p>
                        <p className="p-1.5 text-sm"><strong>{item.price}</strong></p>
                    </div>))}
                    <div className="flex justify-between mt-5 pt-5 border-t-2">
                        <p className="font-bold">Total</p>
                        <p className="text">${total}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;