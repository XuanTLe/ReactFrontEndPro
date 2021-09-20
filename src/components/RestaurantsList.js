import React from "react";
import {RestaurantCard} from "./RestaurantCard";
import { useGetRestaurant } from "../service/RestaurantService";

export const RestaurantsList = (props) =>{

    const {loading, data} = useGetRestaurant()


    return(
        <div>
            <h1>This is the list!</h1>
            {loading && <p>loading...</p>}
            {data && data.length>0 && data.map((current)=> <RestaurantCard key={current.id} info={current} />)}

        </div>

    )
}
