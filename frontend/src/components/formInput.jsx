import { useState } from "react"

const FormInput = ({handleInputChange, errMessage, label, ...inputProps  }) => {
    const [ focused, setFocused ] = useState(false)

    const handleFocused = (e) => {
        setFocused(true)
    }
    
    return(
        <input {...inputProps} onChange={handleInputChange} onBlur={handleFocused} onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()}/>
    )

}

export default FormInput