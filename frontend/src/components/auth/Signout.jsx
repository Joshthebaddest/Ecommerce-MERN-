import { redirect } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import axios from "../../api/axios"

const SignOut = () => {
    const { auth, setAuth } =  useAuth()

    const setSignOut = async() =>{
        try{
            const response = await axios.get('http://localhost:3500/logout', { withCredentials: true })
            if(response.status == 204){
                setAuth(null)
                return redirect('/')
            }

        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <button className='hover:underline' onClick={setSignOut}>Logout</button>
        </>
    )


}

export default SignOut