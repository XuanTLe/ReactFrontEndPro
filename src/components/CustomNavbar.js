import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const CustomNavbar = (props) =>{
    let signedIn = false;
    if(localStorage.getItem("userId") !== null){
        signedIn= true;
    }
    const signOut = () =>{
        localStorage.clear();
        window.location.reload(false);
    }
    return(
        <Navbar bg="dark" expand="lg" variant={"dark"}>
            <Container>
                <Navbar.Brand  href="#home">Reactaurant Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/restaurants">Restaurants</Nav.Link>
                        {signedIn ? <NavDropdown title="Account" id="basic-nav-dropdown" menuVariant={"dark"}>
                            <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="/myreviews">My Reviews</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={signOut}>Sign out</NavDropdown.Item>
                        </NavDropdown> : <Nav.Link href={"/signin"}>Sign in</Nav.Link> }
                        {!signedIn && <Nav.Link href={"/signup"}>Sign up</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
