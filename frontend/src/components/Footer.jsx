const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                    <div className="address text-center pb-10">
                        <h3>ADDRESS</h3>
                        <p>Oluwakemi Street, Shangisha, Lagos, Nigeria</p>
                        <p>Email: Okemjoy@gmail.com</p>
                        <p>Tel: +2347054928062, +2348058113280</p>
                    </div>
                    <div className="about mx-10 pb-10 md:mx-4">
                        <h3>About Us</h3>
                        <p>Lulú Chips specializes in the production and distribution of plantain chips.</p>
                        <div className="flex justify-between pt-5">
                            <a href="">Private Policy</a>
                            <a href="">Return</a>
                            <a href="">Terms of Service</a>
                        </div>
                    </div>
                    <div className="follow text-center pb-10">
                        <h3>Follow Us On: </h3>
                        <div className="footer-icon pt-5">
                            <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center right">© 2023 | JOYCEE PLANTAIN CHIPS. ALL RIGHT RESERVED. DEVELOPED BY <a href="" className="underline">JOSHTHEBADDEST</a></div>
            </footer>
        </>
    )

}

export default Footer