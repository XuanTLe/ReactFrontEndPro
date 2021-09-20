import {useEffect, useState} from "react";
import axios from "axios";
import {useGet} from "./Service";

const baseurl = 'http://localhost:8080/api';

export const useGetReviews = (id) => {
    let url = `${baseurl}/reviews`
    if(id) {
        url = `${url}/${id}`
    }
    useGet(url)

}
