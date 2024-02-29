import { FaUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

const data = []

export const inputData = [
    {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder:'email',
        errMessage: 'should be a valid email',
        required: true,
        label: 'Email'
    },
    {
        id: 2,
        name: 'password',
        type: 'text',
        placeholder:'password',
        errMessage: 'password length should be between 8-20 character long and must contain 1 uppercase character and 1 special character',
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8, 20}$`,
        required: true,
        label: 'Password'
    },
]

export const signupInputData = [
    {
        id: 1,
        name: 'firstName',
        type: 'text',
        placeholder:'First Name',
        errMessage: 'should be a valid name',
        attern: `^[A-Za-z]{3,50}$`,
        required: true,
    },
    {
        id: 2,
        name: 'LastName',
        type: 'text',
        placeholder:'Last Name',
        errMessage: 'should be a valid name',
        pattern: `^[A-Za-z]{3,50}$`,
        required: true,
    },
    {
        id: 3,
        name: 'username',
        type: 'text',
        placeholder:'Username',
        errMessage: 'should be a valid username',
        pattern: `^[A-Za-z0-9]{4,20}$`,
        required: true,
        icon: <FaUser className="icons absolute" />,
    },
    {
        id: 4,
        name: 'email',
        type: 'email',
        placeholder:'Email',
        errMessage: 'should be a valid email',
        required: true,
        icon: <FaEnvelope className="icons absolute" />,
    },
    {
        id: 5,
        name: 'password',
        type: 'password',
        placeholder:'Password',
        errMessage: 'password length should be between 8-20 character long and must contain 1 uppercase character and 1 special character',
        pattern: `[A-za-z0-9]{4,20}`,
        required: true,
        icon: <FaLock className="icons absolute"/>,
    },
    {
        id: 6,
        name: 'confirmPassword',
        type: 'password',
        placeholder:'Confirm Password',
        errMessage: 'password must match',
        // pattern: formData.password,
        required: true,
        icon: <FaLock className="icons absolute"/>,
    },
]

export default data