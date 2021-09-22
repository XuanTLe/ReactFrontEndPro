import {useGet} from "./Service";
import axios from "axios";


const baseurl = 'http://localhost:8080/api';

export const useGetUser = (id) => {
    let url = `${baseurl}/users`
    if(id) {
        url = `${url}/${id}`
    }
    return useGet(url)
}

export const useGetUserReviews = (id) =>{
    const url = `${baseurl}/users/${id}/reviews`

    return useGet(url);
}

export const getUserByUsername = async (username) => {
    const url = `${baseurl}/users/userName/${username}`
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return await authAxios.get(url);

}


export const  getUserJWT = (signIn) =>{
    return axios.post(`${baseurl}/authenticate`, signIn)
}

