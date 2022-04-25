import React, { useEffect, useState } from 'react';

const useServiceDetails = id => {

    const [service,setService]=useState({})

    useEffect(()=>{
        fetch(`https://peaceful-stream-47429.herokuapp.com/service/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return [service,setService]
};

export default useServiceDetails;