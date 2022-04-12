import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const fromSubmit=event=>{
        event.preventDefault()
       const email=emailRef.current.value
       const password=passwordRef.current.value
    }
    const navigateRegister=event=>{
        navigate('/register')
    }
    return (
        <div className='container mx-auto w-50 mt-5 p-5'>
            <h2 className='text-primary'>Please Login</h2>
            <Form onSubmit={fromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>new to genius car?<span onClick={navigateRegister}>Please Register</span></p>
            </Form>
        </div>
    );
};

export default Login;