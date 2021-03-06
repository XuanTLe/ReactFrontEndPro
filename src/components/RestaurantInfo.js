import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useGetRestaurantReviews} from "../service/RestaurantService";
import {ReviewCard} from "./ReviewCard";
import {WriteReview} from "./WriteReview";
import {CreateRestaurant} from "./CreateRestaurant";
import {useGetUser} from "../service/UserService";


export const RestaurantInfo = (props) => {
    const reviews = useGetRestaurantReviews(props.info.id)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const adminId = localStorage.getItem("userId");

    console.log(adminId + " : " + props.info.user)
    return (
        <>
            <Button variant={"secondary"} onClick={handleShow}>show details</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.info.name}</Modal.Title>
                </Modal.Header>
                <Modal.Header>
                    <p>{props.info.address}</p>
                </Modal.Header>
                <Modal.Body>

                    <p>{props.info.description}</p>
                    {reviews.loading && <p>loading...</p>}
                    {reviews.data && reviews.data.length>0 && reviews.data.map((current)=> <ReviewCard key={current.id} info={current} isRestaurant={true}/>)}
                </Modal.Body>
                <Modal.Footer>
                    <WriteReview restaurant = {props.info} info={{}} type={"create"}/>
                    {adminId==props.info.user && <CreateRestaurant info={props.info} type={"update"}/>}
                </Modal.Footer>
            </Modal>
        </>
    )
}
