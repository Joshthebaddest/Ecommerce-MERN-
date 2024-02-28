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

export default data