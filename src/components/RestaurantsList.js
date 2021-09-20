import React from "react";
import {RestaurantCard} from "./RestaurantCard";
import { useGetRestaurant } from "../service/RestaurantService";
import {CreateRestaurant} from "./CreateRestaurant";

export const RestaurantsList = (props) =>{

    const {loading, data} = useGetRestaurant()
    const isSignedIn = true;
    const isAdmin = true;


    return(
        <div>
            {isAdmin && <CreateRestaurant type={"create"} info={{}}/>}
            <br/>
            {loading && <p>loading...</p>}
            {data && data.length>0 && data.map((current)=> <RestaurantCard key={current.id} info={current} />)}

        </div>

    )
}
