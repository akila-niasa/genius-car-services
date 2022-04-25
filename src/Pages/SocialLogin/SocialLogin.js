import React from 'react';
import google from '../../images/google-logo.png'
import facebook from '../../images/facebook.jpg'
import github from '../../images/github.jpg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const[token,setToken]=useToken(user||user2)
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    let errorElement;
    if (error||error2) {
        errorElement=  <div>
            <p className='text-danger'>Error: {error?.message}{error2?.message}</p>
          </div>
      }
    

      if(token){
        navigate(from,{replace: true})
      }
    
    //   if(user2){
    //       navigate('/home')
    //   }

    return (
        <div>
            
            <div className='d-flex  align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className=' mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='w-50 mx-auto d-block btn-primary'><img src={google} alt="" />
                    Google Sign In</button>
                <button className='w-50 mx-auto my-2 d-block btn-primary'><img style={{height:'20px',width:'20px'}} src={facebook} alt="" />
                    Facebook Sign In</button>
                <button onClick={()=>signInWithGithub()} className='w-50 mx-auto d-block btn-primary'><img style={{height:'20px',width:'20px'}} src={github} alt="" />
                    Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;