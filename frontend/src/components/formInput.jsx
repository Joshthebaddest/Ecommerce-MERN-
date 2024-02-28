import { useState } from "react"

const FormInput = ({ handleInputChange, errMessage, label, ...inputProps  }) => {
    const [ focused, setFocused ] = useState(false)

    const handleFocused = (e) => {
        setFocused(true)
    }
    
    return(
        <>
            <input {...inputProps} onChange={handleInputChange} onBlur={handleFocused} focused={focused.toString()}/>
            <i className={`fa-solid ${inputProps.name === 'email' ?  "fa-envelope" : "fa-lock"} icons absolute`}></i>
            <span className="text-left text-[12px] text-red-600">{errMessage}</span>
        </>

    )

}

export default FormInput