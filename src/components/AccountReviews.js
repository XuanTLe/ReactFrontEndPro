import React from "react";
import {ReviewCard} from "./ReviewCard";
import {useGetUserReviews} from "../service/UserService";

export const AccountReviews = (props) => {
    const reviews = useGetUserReviews(localStorage.getItem("userId"))
    console.log(reviews)



    return(
        <div>
            {reviews.loading && <p>loading...</p>}
            {reviews.data && reviews.data.length>0 && reviews.data.map((current)=> <ReviewCard key={current.id} info={current} isRestaurant={false} />)}
        </div>
    )
}
