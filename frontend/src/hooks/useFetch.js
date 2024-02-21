import { useState, useEffect } from "react"
import axios from "../api/axios"

const useFetch = ( url ) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const abortCont = new AbortController();

        const getData = async () => {
            try {
                const response = await axios.get(url);
                if(response.statusText === "OK"){
                    const { data }  = response
                    setData(data)
                }
                
            } catch (err) {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else{
                    setIsPending(false);
                    setError(err.message)
                }
            }    
        }
         
        getData()
        return  ()=> abortCont.abort();

    }, [url])

    return { data, isPending, error}

}

export default useFetch;