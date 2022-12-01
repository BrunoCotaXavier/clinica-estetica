import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar style={{marginBottom: '0px', position: 'absolut'}} bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Health&Beauty</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/sobre">Sobre</Nav.Link>
                    <Nav.Link href="/consulta">Consulta</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;