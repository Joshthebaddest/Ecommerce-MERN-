import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";
import { signupInputData } from '../../assets/data'
import FormInput from "../formInput";

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
                            
                            {signupInputData.map(({icon, ...input})=>(
                                <div key={input.id} className={`input-container relative`}>
                                    <FormInput {...input } handleInputChange={handleInputChange} />
                                    {icon}
                                    <span className="text-left text-[12px] text-red-600">{input.errMessage}</span>
                                </div>
                            ))}

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