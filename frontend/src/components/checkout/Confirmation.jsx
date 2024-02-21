const Confirmation = () => {
    return (
        <>
        <div className="confirmation pb-20 px-10">
            <h1 className="text-4xl text-center font-bold py-5">Thanks for your order.</h1>
            <p className="text-center pb-10">check your inbox for a confirmation email sent to anna@gmail.com</p>
            <div className="confirmation shadow pt-4">
                <h3 className="pb-5 font-bold ml-2">ORDER DETAILS - JK12ASD</h3>
                <div className="confirmation-details grid grid-cols-2 pt-2 md:grid-cols-3">
                    <p>Order total <span>$424.00</span></p>
                    <p>Order date <span>10-10-2020</span></p>
                    <p>Payment method <span>card</span></p>
                    <p>Email <span>anna@gmail.com</span></p>
                    <p>Expected delivery <span>13-10-2020</span></p>
                    <p>Deliveryy option <span>Standard delivery</span></p>
                </div>
            </div>
        </div>
            
        </>

    )
}

export default Confirmation;