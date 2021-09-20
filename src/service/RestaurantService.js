import {useGet} from "./Service";

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
