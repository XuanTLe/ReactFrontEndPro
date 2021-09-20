import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import {useGetRestaurantReviews} from "../service/RestaurantService";
import {RestaurantCard} from "./RestaurantCard";
import {ReviewCard} from "./ReviewCard";
import {WriteReview} from "./WriteReview";


export const RestaurantInfo = (props) => {
    const reviews = useGetRestaurantReviews(props.info.id)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant={"secondary"} onClick={handleShow}>show details</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.info.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.info.description}</p>
                    {reviews.loading && <p>loading...</p>}
                    {reviews.data && reviews.data.length>0 && reviews.data.map((current)=> <ReviewCard key={current.id} info={current} />)}
                </Modal.Body>
                <Modal.Footer>
                    <WriteReview info = {props.info}/>
                </Modal.Footer>
            </Modal>
        </>
    )
}
