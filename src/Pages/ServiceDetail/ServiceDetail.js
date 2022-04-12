import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let {id}=useParams()
    console.log(id);
    return (
        <div>
            <h2>welcome to detail</h2>
        </div>
    );
};

export default ServiceDetail;