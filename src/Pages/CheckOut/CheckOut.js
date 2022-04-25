import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../../hooks/useServiceDetails';

const CheckOut = () => {
    let {id}=useParams()
    // console.log(id);
    // const [service,setService]=useState({})

    const [service,setService]=useServiceDetails(id)

    const[user]=useAuthState(auth)

    // console.log(user);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service: service.name,
            serviceId: id,
            address: event.target.address.defaultValue,
            phone: event.target.phone.defaultValue
        }
        axios.post('https://peaceful-stream-47429.herokuapp.com/order',order)
        .then(response=>{
            // console.log(response);
            const {data}=response
            if(data.insertedId){
                toast('yuor order is booked')
                event.target.reset()
            }
        })
    }
    // useEffect(()=>{
    //     fetch(`https://peaceful-stream-47429.herokuapp.com/service/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[id])
    return (
        <div className='w-50 mx-auto'>
                <h2>Please Order: {service.name}</h2>
                <ToastContainer/>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" defaultValue={user?.displayName} placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" name="email" defaultValue={user?.email} placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" defaultValue={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" defaultValue="Place Order" />
            </form>
           
        </div>
    );
};

export default CheckOut;