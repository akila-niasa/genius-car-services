import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Oreder = () => {
    const [user]=useAuthState(auth)
    const[orders,setOrders]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const getOrder=async()=>{
            const email=user?.email
            const url=`https://peaceful-stream-47429.herokuapp.com/order?email=${email}`
         try{
            const {data}=await axiosPrivate.get(url)
           
            // const value=response.data
            // console.log(value);
            setOrders(data)
         }
         catch(error){
             console.log(error);
             console.log(error.message);
             if(error.response.status === 401 || error.response.status === 403){
                 signOut(auth);
                 navigate('/login')
             }
         }
        }
        getOrder()
    },[user])
    return (
        <div>
           <h3> {orders.length}</h3>
           {
               orders.map(order=><div key={order._id}>{order.email}</div>)
           }
        </div>
    );
};

export default Oreder;