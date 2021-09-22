import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


export const AccountInfo = (props) =>{

    return(
        <Container className={"rounded w-50 bg-light align-content-center"} style={{marginTop: "10px"}}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name={"username"}  value={"aikfjasdiofkjasdf"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name={"password"} value={"tsrfasdfasdf"}/>
                    </Form.Group>
                </Row>

            </Form>
        </Container>
    )
}
