import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const Payment = () => {
    const navigate = useNavigate()
    const formData = {
        email: 'gabriemmarvelous1@gmail.com',
        amount: 3000
    }

    const pay = async(e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3500/checkout', formData, { withCredentials: true })
        console.log(response)
        window.location.href = response.data.data.authorization_url
        
    }


    return (
        <>
            <div className="payment p-10 text-center">
                <h2 className="font-bold text-xl">PAYMENT INFO</h2>
                <form action="" className="form text-center px-15 pb-14 mt-10">
                    <div className="form-content grid md:grid-cols-2 ">
                        <div className="input-container px-14 md:px-2">
                            <input type="text" name="firstName" id="first-name" placeholder="First Name" />
                        </div>
                        <div className="input-container px-14 md:px-2">
                            <input type="text" name="LastName" id="last-name" placeholder="Last Name" /> 
                        </div>
                        <div className="input-container px-14 md:px-2">
                            <input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" />
                        </div>
                        <div className="input-container px-14 md:px-2">
                            <input type="text" name="expiry" id="expiry" placeholder="Expiry" />
                        </div>
                        <div className="input-container px-14 md:px-2">
                            <input type="password" name="cvv" id="cvv" placeholder="CVV" />
                        </div>
                        <div className="input-container px-14 md:px-2">
                            <input type="text" name="cardAddressCountry" id="cardAddressCountry" placeholder="Card Address Country" />
                        </div>
                    </div>
                    
                    <button type="submit" className="click" onClick={pay}>Pay<i class="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
        </>
    )
}

export default Payment;