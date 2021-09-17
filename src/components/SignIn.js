import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

export const SignIn = (props) => {

    const initFormData = Object.freeze({
        username: "",
        password: "",
    })
    const [formData, updateFormData] = React.useState(initFormData)

    const handleChange = (e) => {
      updateFormData({...formData,
      [e.target.name]: e.target.value.trim()})
    }
    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault()
    }

    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name={"username"} onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={"password"} onChange={handleChange}/>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>

    )
}

