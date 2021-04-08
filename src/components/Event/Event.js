import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';

const Event = ({ event }) => {

  const history = useHistory()
    const handleBuy = (name) => {
        history.push(`/book/${name}`);
        //history.push(`/book/${price}`);
    }

    return (
    
        <Card style={{ width: '18rem', margin: "5px"}}>
            <Card.Img variant="top" src={event.imageURL} alt="" />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Title><small>Weight: {event.weight} kg</small></Card.Title>
            </Card.Body>
            <Card.Body>
            <Row>
                <Col><Card.Text>Price:{event.price} ৳</Card.Text></Col>
                <Col><Button onClick={() => handleBuy(event.name)} variant="primary">Buy Now</Button></Col>
            </Row>         
            </Card.Body>
            
        </Card>
    );
};

export default Event;