import React, {useState} from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";
import {createReview, deleteReview, updateReview} from "../service/ReviewService";

export const WriteReview = (props) => {

    const initFormData = Object.freeze({
        description: "",
        rating: 2.50,
    })
    const [formData, updateFormData] = useState(
        {
            id: props.info.id,
            description: props.info.description,
            rating: props.info.rating
        }
    )

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value})
    }
    const handleRangeChange = (e) =>{
        let rate = 5* .01 * e.target.value
        updateFormData({...formData,
            [e.target.name]: rate.toFixed(2)})


    }
    const handleSubmit = (e) =>{
        if(props.type ==="update"){
            updateReview(formData)
        }
        else{
            createReview(formData, localStorage.getItem("userId"), props.restaurant.id)
        }
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleDelete = () => {
        deleteReview(props.info.id)
        window.location.reload(false)
    }


    return(
        <>
            {props.type==="create" ? <Button variant={"secondary"} onClick={handleShow}>Write Review</Button> : <Button variant={"secondary"} onClick={handleShow}>Update Review</Button>}

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.restaurant.name} review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDesc">
                                <FloatingLabel controlId="floatingTextarea" label="Review">
                                    <Form.Control
                                        name={"description"}
                                        as="textarea"
                                        placeholder="Leave a description here"
                                        style={{ height: '100px' }}
                                        defaultValue={props.info.description}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Range  name={"rating"} onChange={handleRangeChange} defaultValue={50} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {props.type==="update" && <Button variant="danger" type="button" onClick={handleDelete}>Delete</Button>}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
