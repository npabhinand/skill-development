import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import { FaHome,FaUserAlt,FaCode } from "react-icons/fa";
import {AiOutlineBars } from "react-icons/ai";
import {BiLogOut } from "react-icons/bi";

function Navbar1() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">Skill Development</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Stack direction="horizontal" gap={4}>
            <Nav.Link href="/home"><FaHome/> HOME</Nav.Link>
            <Nav.Link href="/profile"><FaUserAlt/> PROFILE</Nav.Link>
            <Nav.Link href="/rooms"><AiOutlineBars/> ROOMS</Nav.Link>
            <Nav.Link href=""><FaCode/> IDE</Nav.Link>
            <Button variant="outline-success"><BiLogOut/> LOGOUT</Button>
            </Stack>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;