import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    useEffect(() => {
       fetch ('http://localhost:5055/bookings?email='+loggedInUser.email)
       .then(res => res.json())
       .then(data => setOrders(data));
    }, [])
    
    return (
        <div>
            <h3>You have: {orders.length} orders</h3>
            {
                orders.map(order => <li key={order._id}>{order.name} email: {order.email}
                
                <button>Delete</button>
                </li> )
            }
        </div>
    );
};

export default Order;