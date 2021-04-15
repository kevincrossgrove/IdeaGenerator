import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <Row align="center">
                <Col lg={8}>
                    <h1>Where ideas grow</h1>
                </Col>
                <Col lg={4}>
                    <h1>Column 2</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About;