import {useGet} from "./Service";
import axios from "axios";

const baseurl = 'http://localhost:8080/api';

export const useGetRestaurant = (id) => {
    let url = `${baseurl}/restaurants`
    if(id) {
        url = `${url}/${id}`
    }
     return useGet(url)

}

export const useGetRestaurantReviews = (id) =>{
    const url = `${baseurl}/restaurants/${id}/reviews`

    return useGet(url);
}

export const createRestaurant = (restaurant, adminID) =>{
    return axios.post(`${baseurl}/admin/${adminID}/restaurants`, restaurant)
}

export const updateRestaurant = (restaurant) =>{
    return axios.put(`${baseurl}/admin/restaurants`, restaurant)
}

export const deleteRestaurant = (restaurantId) =>{
    return axios.delete(`${baseurl}/admin/restaurants/${restaurantId}`)
}


