import React, {useEffect, useState} from "react";
import axios from "axios";


function useFetch  (path:any, data:any,)  {

    const url = 'https://dummyjson.com/'+path;
    let isMounted = true;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);

        const headers = {"Content-type":"application/json"};
   
         await axios
             .get(url,{
                headers,
            })
             .then((response:any) => {
                setResponse(response);
                setIsLoading(false)
                
             }).catch(error => {
               setError(error);
             });
       }
    
      fetchData();
    }, []);
    return { response, error, isLoading };
      };


export default useFetch;