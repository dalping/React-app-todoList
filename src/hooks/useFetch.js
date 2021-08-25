import { useEffect,useState } from "react";

export default function useFetch(url,state){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setData(data);
        });
    },[url,state]);

    return data;
}

