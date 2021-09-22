import React, {useState} from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";
import {createReview, deleteReview, updateReview} from "../service/ReviewService";

export const AccountUpdate = (props) => {


    const [formData, updateFormData] = useState(
        {
            id: props.info.id,
            userName: props.info.userName,
            password: props.info.password
        }
    )

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        updateAccount(formData)
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Update Review</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{"Change Password"} review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name={"username"} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name={"password"} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNewPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name={"newPassword"} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridConfirmNewPassword">
                                <Form.Label>Confirm</Form.Label>
                                <Form.Control type="password" placeholder="Re-enter password" name={"confirmNewPassword"} onChange={handleChange}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
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
