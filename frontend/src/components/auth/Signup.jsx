import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    
    const handleCheck = (e) => {
        setIsChecked(!isChecked)
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsDisabled(true)
        try{
            const response = await axios.post('http://localhost:3500/register', formData, {withCredentials: true})
            if(response.status === 201){
                navigate("/auth/signin")
            }
        }
        catch(error){
            setError(true)
            setIsDisabled(false)
        }
        

    };



    return(
        <>
           <section className="authContainer">
                <div className="login-info md:grid md:grid-cols-2">
                    <div className="users-profile hidden md:block">
                        <img src="" alt="" />
                        <div className="text-center pt-10">
                            <p>Already Have An Account? <Link to="/auth/signin" className="hover:underline">Sign In</Link></p>
                        </div>
                    </div>
                    <div className="p-10 text-center">
                        <h2>Registration Form</h2>
                        {error && <p className="text-red-500">email already exist</p>}
                        <form action="" className="form text-center" onSubmit={handleSubmit}>
                            <div className="input-container md:flex relative ">
                                <input className="mr-2 mb-[20px] md:mb-0" type="text" name="firstName" id="first-name" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
                                <input type="text" name="lastName" id="last-name" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" /> 
                            </div>
                            <div className="input-container relative">
                            </div>
                            <div className="input-container relative">
                                <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
                                <i className="fa-solid fa-user icons absolute"></i>
                            </div>
                            <div className="input-container relative">
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                                <i className="fa-solid fa-envelope icons absolute"></i>
                            </div>
                            <div className="input-container relative">
                                <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
                                <i className="fa-solid fa-lock icons absolute"></i>
                            </div>
                            <div className="input-container relative">
                                <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
                                <i className="fa-solid fa-lock icons absolute"></i>
                            </div>
                            <div className="terms">
                                <input type="checkbox" name="agree" checked={isChecked} value='agree' onChange={handleCheck}/>
                                <span className="ml-5">i agree to all <a href="">terms and conditions</a></span>
                                <p className="md:hidden text-sm">Already Have An Account? <Link to="/auth/signin" className="underline">Sign In</Link></p>

                            </div>

                            {isLoading ?  (<button disabled className="opacity-70">loading...</button>) :
                            <button type="submit">Sign Up <i className="fa-solid fa-arrow-right"></i></button>}
                        </form>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Signup;