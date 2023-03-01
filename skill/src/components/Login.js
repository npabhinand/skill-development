import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { Navbar2 } from './Navbar2';
import { Link } from 'react-router-dom';

export function Login() {
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <div className='text-center'>
      <Link to="/home">
      <Button variant="primary" type="submit"  >
        Login
      </Button>
      </Link>
   
    <p style={{textDecoration:'none',textAlign:'center',marginTop:50}}>
          Not a member? <Link to="/signup" >Sign Up</Link></p>
          </div>
          </Form>
    </Container>
    </div>
  );
}

