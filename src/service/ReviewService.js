import axios from "axios";
import {useGet} from "./Service";

const baseurl = 'http://localhost:8080/api';

export const useGetReviews = (id) => {
    let url = `${baseurl}/reviews`
    if(id) {
        url = `${url}/${id}`
    }
     return useGet(url)
}

export const createReview = (review, userID, restID) => {
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.post(`/users/${userID}/${restID}/reviews`, review)
}

export const updateReview = (review) =>{
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.put(`/users/reviews`, review)
}

export const deleteReview = (reviewId) =>{
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.delete(`/users/reviews/${reviewId}`)
}
