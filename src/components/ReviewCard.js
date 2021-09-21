import {Card} from "react-bootstrap";
import React from "react";
import {WriteReview} from "./WriteReview";


export const ReviewCard = (props) =>{
    return(
        <Card>
            {props.isRestaurant && <Card.Title>{props.info.user}</Card.Title>}
            {!props.isRestaurant && <Card.Title>{props.info.restaurant}</Card.Title>}
            <Card.Body>
                <Card.Text>{props.info.description}</Card.Text>
            </Card.Body>
            <Card.Footer>{props.info.rating}</Card.Footer>
            {!props.isRestaurant && <Card.Footer><WriteReview restaurant={{name:props.info.restaurant}} info={props.info} type={"update"}/></Card.Footer>}

        </Card>
    )
}
