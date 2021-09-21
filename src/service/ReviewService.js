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
    return axios.post(`${baseurl}/users/${userID}/${restID}/reviews`, review)
}
