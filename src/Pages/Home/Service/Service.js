import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    // console.log(props.service);
    const{img,name,price,description,_id}=props.service
    const navigate=useNavigate()
    const navigateToService=id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div>
            <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* <Link to={`/service/${id}`}> */}
            <button onClick={()=>navigateToService(_id)} className='btn btn-primary'>Book: {name}
            </button>
            {/* </Link> */}
           
        </div>
        </div>
    );
};

export default Service;