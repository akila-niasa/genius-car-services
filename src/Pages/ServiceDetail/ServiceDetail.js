import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetail = () => {
    let {id}=useParams()
    console.log(id);
    const [service,setService]=useServiceDetails(id)

    // useEffect(()=>{
    //     fetch(`https://peaceful-stream-47429.herokuapp.com/service/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])
    // const navigate=useNavigate()
    // const handleCheckOut=()=>{
    //     navigate('/checkout')
    // }
    return (
        <div>
            <h2>welcome to detail:{service.name}</h2>
            <Link to={`/checkout/${id}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
        </div>
    );
};

export default ServiceDetail;