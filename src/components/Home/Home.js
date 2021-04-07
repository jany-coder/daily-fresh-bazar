import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <Container fluid>
            <Row>
                {
                    events.map(event => <Col md="auto"><Event event={event}></Event></Col>)
                }
            </Row>

        </Container>
    );
};

export default Home;