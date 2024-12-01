import { useState, useEffect } from "react";
const Base_URL = `https://api.europeana.eu/record/v2/`;
const constructEndPoint = (endpoint, urlParams)=>{
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    return `${Base_URL}${endpoint}?wskey=${apiKey}${urlParams}`
}
const getArt = (endpoint, urlParams) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show:false, msg: ''});
    const [data, setData] = useState(null);
    const fetchArt = async (url)=>{
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            console.log(data.items);
            if(data.success === true){
                setData(data.items || data);
                setError({show:false, msg:''})
            }else{
                setError({show:true, msg:data.message})
            }
            setIsLoading(false)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        const url = constructEndPoint(endpoint, urlParams)
        fetchArt(url)
    }, [endpoint, urlParams])
    return{
        isLoading, error, data
    }
}
export default getArt