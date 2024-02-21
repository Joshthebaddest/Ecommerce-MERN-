import axios from "../api/axios";
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get('http://localhost:3500/refresh', { withCredentials: true });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            const { accessToken, roles, username } = response.data;
            console.log(accessToken)
            return { ...prev, accessToken: response.data.accessToken, roles, user: username }
        })
        console.log(auth)
        return response.data.accessToken
    }
    return refresh;

}

export default useRefreshToken;