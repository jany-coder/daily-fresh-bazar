import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Buy = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();

    const handleBooking = () =>{
        
        const newBooking = {...loggedInUser}
        fetch('http://localhost:5055/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    
    
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's buy this {name}</h1>
            <p>Want a <Link to="/">different product?</Link> </p>
            <button onClick={handleBooking}>Checkout</button>
        </div>
    );
};

export default Buy;