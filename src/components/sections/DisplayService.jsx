import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Service Data where all the main service blogs has written

const DisplayService = () => {

    const { service } = useParams();

    console.log(service)
    
    return (
        <>

            <h1>{service}</h1>

        </>
    );
};

export default DisplayService