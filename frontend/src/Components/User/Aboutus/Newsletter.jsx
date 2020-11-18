import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,
  } from 'reactstrap';

export default function Newsletter() {
    return (
        <div className="container">
            <br></br>
            <Row>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Newsletter December</CardTitle>
                    <CardText></CardText>
                    <Button>Get Newsletter</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Newsletter November</CardTitle>
                    <CardText></CardText>
                    <Button>Get Newsletter</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Newsletter October</CardTitle>
                    <CardText></CardText>
                    <Button>Get Newsletter</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
