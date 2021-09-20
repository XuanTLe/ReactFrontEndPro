import {Card} from "react-bootstrap";
import React from "react";
import {useGetUser} from "../service/UserService";


export const ReviewCard = (props) =>{
    const user = useGetUser(props.info.user)
    return(
        <Card>
            {user.loading && <p>loading...</p>}
            {user.data && <Card.Title>{user.data.userName}</Card.Title>}
            <Card.Body>
                <Card.Text>{props.info.description}</Card.Text>
            </Card.Body>
            <Card.Footer>{props.info.rating}</Card.Footer>
        </Card>
    )
}
