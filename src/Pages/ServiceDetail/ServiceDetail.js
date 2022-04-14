import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let {id}=useParams()
    console.log(id);
    const navigate=useNavigate()
    const handleCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2>welcome to detail</h2>
            <button onClick={handleCheckOut}>checkout</button>
        </div>
    );
};

export default ServiceDetail;