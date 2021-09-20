import {useGet} from "./Service";


const baseurl = 'http://localhost:8080/api';

export const useGetUser = (id) => {
    let url = `${baseurl}/users`
    if(id) {
        url = `${url}/${id}`
    }
    return useGet(url)

}
