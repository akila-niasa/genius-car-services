import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    // const[services, setServices]=useServices()
    const [services,setServices]=useState([])
     useEffect(() => {
        fetch('https://peaceful-stream-47429.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete=(id)=>{
        const proccessed=window.confirm("are you sure about that")
        if(proccessed){
            fetch(`https://peaceful-stream-47429.herokuapp.com/service/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if( data.deletedCount>0){
                    const remain=services.filter(service=>service._id!==id)
                        setServices(remain)
                    
                }
                
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            {
                services.map(service=><div key={service._id}>
                    <h5>{service.name}<button onClick={()=>handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;