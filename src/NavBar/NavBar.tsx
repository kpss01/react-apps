import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export class ProjNavBar extends React.Component{


    render(){
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="#home">Project</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/form">Form</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}