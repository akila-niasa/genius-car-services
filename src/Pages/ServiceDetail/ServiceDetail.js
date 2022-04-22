import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let {id}=useParams()
    console.log(id);
    const [service,setService]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    const navigate=useNavigate()
    const handleCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2>welcome to detail:{service.name}</h2>
            <button onClick={handleCheckOut}>checkout</button>
        </div>
    );
};

export default ServiceDetail;