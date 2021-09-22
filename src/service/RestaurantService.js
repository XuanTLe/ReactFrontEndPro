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
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.post(`/admin/${adminID}/restaurants`, restaurant)
}

export const updateRestaurant = (restaurant) =>{
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.put(`/admin/restaurants`, restaurant)
}

export const deleteRestaurant = (restaurantId) =>{
    const authAxios = axios.create({
            baseURL: baseurl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    )
    return authAxios.delete(`/admin/restaurants/${restaurantId}`)
}


