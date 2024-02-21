
import Account from "../auth/Account";
import Payment from "./Payment";
import Order from "./Order";

const Checkout =() => {
    return (
        <>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2">
                <Payment /> 
                <Order />
            </div>


        </>
    )
}

export default Checkout;