import React, {useState} from "react";
import {Alert, Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";
import {ReviewCard} from "./ReviewCard";

export const WriteReview = (props) => {

    const initFormData = Object.freeze({
        description: "",
        rating: 2.50,
    })
    const [formData, updateFormData] = useState(initFormData)

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    const handleRangeChange = (e) =>{
        let rate = 5* .01 * e.target.value
        console.log(rate.toFixed(2))
        updateFormData({...formData,
            [e.target.name]: rate.toFixed(2)})


    }
    const handleSubmit = (e) =>{
        console.log(formData)
        e.preventDefault()
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Write Review</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.info.name} review</Modal.Title>
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

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
