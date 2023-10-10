import { server_calls } from "../api/server";
import { useEffect, useState } from "react";


export const useGetData = () => {
    const [ memeData, setData ] = useState([]);

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result);
    }

    useEffect( () => {
        handleDataFetch();
    }, []) 


    return { memeData, getData:handleDataFetch }
}