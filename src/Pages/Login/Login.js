import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { updateProfile } from 'firebase/auth';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const navigate=useNavigate()
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      let errorElement;
    if (error) {
        errorElement= <p className='text-danger'>Error: {error?.message}</p>
         
      }
    const fromSubmit=event=>{
        event.preventDefault()
       const email=emailRef.current.value
       const password=passwordRef.current.value

       signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate(from,{replace: true})
    }
    const navigateRegister=event=>{
        navigate('/register')
    }
    const resetPassword=async()=>{
        const email=emailRef.current.value
        if(email){
            await sendPasswordResetEmail(email)
        toast('sent email');
        }
        else{
            toast('please enter your email')
        }
    }
    return (
        <div className='container mx-auto w-50 mt-5 p-5'>
            <h2 className='text-primary'>Please Login</h2>
            <Form onSubmit={fromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    
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
                {error?.message}
               
            </Form>
            <p>new to genius car?<span className='text-primary' onClick={navigateRegister}>Please Register</span></p>
                <p>Forgot Password?<span className='text-primary'  onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin/>
            <ToastContainer/>
        </div>
    );
};

export default Login;