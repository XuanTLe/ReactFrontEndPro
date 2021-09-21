import React, {useState} from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";
import {createRestaurant, updateRestaurant} from "../service/RestaurantService";

export const CreateRestaurant = (props) => {

    const initFormData = Object.freeze({
        name:"",
        address:"",
        description: ""
    })

    const [formData, updateFormData] = useState({
        id: props.info.id,
        name:props.info.name,
        address:props.info.address,
        description: props.info.description
    })

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value})
        console.log(formData)
    }

    const handleSubmit = (e) =>{
        if(props.type === "update"){
            updateRestaurant(formData);
        }
        else {
            createRestaurant(formData, 2)
        }
    }
    let values
    switch (props.type) {
        case 'create':
            values= initFormData
            break;
        case 'update':
            values={
                name:props.info.name.toString(),
                address:props.info.address.toString(),
                description: props.info.description.toString()
            }
            break;
        default:
    }




    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return(
        <>
            <Button style={{ margin: "3vw 3vw 0 3vw"} } variant={"primary"} onClick={handleShow}>Create New</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Restaurant name</Form.Label>
                                <Form.Control type="text" placeholder="Enter restaurant name" name={"name"} defaultValue={values.name.toString()} onChange={handleChange}  />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Restaurant address</Form.Label>
                                <Form.Control type="text" placeholder="Enter restaurant address" name={"address"} defaultValue={values.address.toString()} onChange={handleChange}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDesc">
                                <Form.Label>Description</Form.Label>

                                <FloatingLabel controlId="floatingTextarea" label="Enter a Description">
                                    <Form.Control
                                        name={"description"}
                                        as="textarea"
                                        placeholder="Leave a description here"
                                        style={{ height: '100px'}}
                                        defaultValue={values.description.toString()}
                                        onChange={handleChange}

                                    />
                                </FloatingLabel>
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
