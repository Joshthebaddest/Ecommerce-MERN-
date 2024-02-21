const Account =() => {
    return (
        <>
            <div className="account-container p-10">
                <div className="account p-10 text-center shadow md:p-2 md:pt-10">
                    <h2 className="font-bold text-xl">ACCOUNT INFO</h2>
                    <form action="" className="form text-center px-15 pb-14 mt-10">
                        <div className="input-container md:px-12">
                            <input type="text" name="firstName" id="first-name" placeholder="First Name" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="LastName" id="last-name" placeholder="Last Name" /> 
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="company" id="company" placeholder="company" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="addressLine1" id="addressLine1" placeholder="AddressLine1" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="addressLine2" id="addressLine2" placeholder="AddressLine2" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="country" id="country" placeholder="Country" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="state" id="state" placeholder="State" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="city" id="city" placeholder="City" />
                        </div>
                        <div className="input-container md:px-12">
                            <input type="text" name="zip" id="zip" placeholder="Zip" />
                        </div>

                        <button type="submit" className="click">Save <i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Account;