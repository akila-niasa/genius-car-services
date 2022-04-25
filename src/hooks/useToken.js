import axios from "axios";
import { useEffect, useState } from "react";


const useToken = (user)=> {
    const[token,setToken]=useState()
    useEffect(()=>{
        const getToken=async()=>{
            console.log(user);
            const email=user.user.email;
            if(email){
                const{data}=await axios.post('https://peaceful-stream-47429.herokuapp.com/login',{email})
            localStorage.setItem('access-token',data)
            setToken(data)
            console.log(data);
            }
        }
        getToken()
    },[user])
    return [token,setToken]
};

export default useToken;