import React from "react";
import {Card} from "react-bootstrap";
import {RestaurantInfo} from "./RestaurantInfo";

export const RestaurantCard = (props) =>{


    return(
        <Card style={{ width: '18rem', display: 'inline-block', margin: '20px'}}>
            <Card.Header as="h2" >{props.info.name}</Card.Header>
            <Card.Body>
                <Card.Text>{props.info.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <p>{props.info.rating || 2}</p>
                <RestaurantInfo info={props.info} />
            </Card.Footer>
        </Card>
    )
}
