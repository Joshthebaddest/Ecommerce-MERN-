import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useStateContext } from "../../context/useStateContext";

const Signin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { setAuth } = useAuth();
    const { setUpdateCart } = useStateContext()
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setIsLoading(true)
            const response = await axios.post('http://localhost:3500/auth', formData, { withCredentials: true })
            if(response.status === 200){
                const { accessToken, roles, username}  = response?.data;
                setUpdateCart(true)
                setAuth({ user: username, roles, accessToken });
                setIsLoading(false)
                navigate(from, { replace: true });
            }
        }
        catch(error){
            setIsLoading(false)
            setError(true)
            console.log(error.message)
        }
    };



    return(
        <>
           <section className="authContainer">
                <div className="login-info grid md:grid-cols-2">
                    <div className="users-profile hidden md:block">
                        <img src="" alt="" />
                        <div className="text-center pt-10">
                            <p>Dont Have An Account Yet? <Link to="/auth/signup" className="hover:underline">Sign Up</Link></p>
                        </div>
                    </div>
                    <div className="p-10 text-center c">
                        <h2>SignIn  Form</h2>
                        <p className="text-lg">Welcome Back</p>
                        {error && <p className="text-red-500">invalid email or password</p>}
                        <form action="" className="form text-center pt-10" onSubmit={handleSubmit}>
                            <div className="input-container relative">
                                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                                <i className="fa-solid fa-envelope icons absolute"></i>
                            </div>
                            <div className="input-container relative">
                                <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                                <i className="fa-solid fa-lock icons absolute"></i>
                            </div>
                            {isLoading ?  (<button disabled className="opacity-70">loading...</button>) :
                            <button type="submit">Sign In <i className="fa-solid fa-arrow-right"></i></button>}
                        </form>
                        <div className="link grid grid-cols-1 lg:grid-cols-2" >
                            <a href="" className="hover:underline">forgot password?</a>
                            <Link to="/auth/signup" className="hover:underline pt-5 lg:pt-0">create an account</Link>
                        </div>

                    </div>
                </div>
           </section>
        </>
    )
}

export default Signin;