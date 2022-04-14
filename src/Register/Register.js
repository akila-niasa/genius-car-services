import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'

import SocialLogin from '../Pages/SocialLogin/SocialLogin';
const Register = () => {
    const[agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating,updateError] = useUpdateProfile(auth);
      let errorElement;
      if (error) {
          errorElement= <p className='text-danger'>Error: {error?.message}</p>
           
        }
    const navigate=useNavigate()
    const navigateLogin=()=>{
        navigate('/login')
    }
    
    const handleRegister=async(event)=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        
           await createUserWithEmailAndPassword(email,password)
           await updateProfile({ displayName:name});

           alert('Updated profile');
       
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
            <label className={`ps-2 ${agree?'text-primary':'text-danger'}`} htmlFor="terms">accept all conditions</label>
            <input
            disabled={!agree} 
            className='w-50 bg-primary' 
            type="submit" 
            value="Register" />
        </form>
        {errorElement}
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        <SocialLogin/>
    </div>
    );
};

export default Register;