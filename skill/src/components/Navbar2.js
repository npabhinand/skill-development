import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Navbar2 = () => {
  return (
    <div>
         <Navbar bg="dark" variant='dark'>
        <Container>
        <Navbar.Brand href="#home">Skill Development</Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  )
}
