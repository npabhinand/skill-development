import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import { Navbar2 } from './Navbar2'
import {Link} from 'react-router-dom'

export const Signup = () => {
  return (
    <div >
    <Navbar2/>
    <br/>
    <Container className="square border border-dark w-50" >
    <div style={{textAlign:'center',fontSize:25,marginBottom:50}}>LOGIN</div>
    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <div className='text-center'>
      <Link to="/">
      <Button variant="primary" type="submit"  >
       Sign Up
      </Button>
      </Link>
   
    <p style={{textDecoration:'none',textAlign:'center',marginTop:50}}>
         Already a member? <Link to="/login" >Login</Link></p>
          </div>
          </Form>
    </Container>
    </div>
  )
}
