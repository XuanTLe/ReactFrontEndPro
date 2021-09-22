import React, {useEffect, useState} from "react";
import axios from "axios";
import {getUserByUsername} from "./UserService";
import data from "bootstrap/js/src/dom/data";

const test = require("jsonwebtoken")
const baseurl = 'http://localhost:8080/api';

export const useGet = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async function () {
            try{
                setLoading(true)
                let response
                if(localStorage.getItem("jwt")===null)  response = await axios.get(url)
                else {
                    const authAxios = axios.create({
                            baseURL: baseurl,
                            Authorization: `Bearer ${localStorage.getItem("jwt")}`
                        }
                    )
                    response = await authAxios.get(url);
                }
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

export const updateJWT = async (newJwt) => {
    localStorage.setItem("jwt", newJwt)
    console.log(newJwt)

    await getuserIDFromJWT()

}

export const getuserIDFromJWT = async () => {
    let decoded = test.decode(localStorage.getItem("jwt"))

    await getUserByUsername(decoded.sub).then(data => {
        setUserId(data.data.id)
    })
}

const setUserId = (userID) =>{
    console.log(userID)
    localStorage.setItem("userId", userID)

}
