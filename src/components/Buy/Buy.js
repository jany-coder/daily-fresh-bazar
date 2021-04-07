import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Buy = () => {
    const {name} = useParams();
    
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's buy this {name}</h1>
            <p>Want a <Link to="/">different product?</Link> </p>
        </div>
    );
};

export default Buy;