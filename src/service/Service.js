import {useEffect, useState} from "react";
import axios from "axios";


export const useGet = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async function () {
            try{
                setLoading(true)
                const response = await axios.get(url)
                if(response.status ===200){
                    setData(response.data)
                }
            } catch (e){
                setData(false)
                throw e
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {loading, data}
}
