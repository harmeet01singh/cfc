import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,
  } from 'reactstrap';

export default function Financials() {
    return (
        <div className="container">
            <br></br>
            <Row>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Financial Report 19-20</CardTitle>
                    <CardText></CardText>
                    <Button>Get Report</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Financial Report 18-19</CardTitle>
                    <CardText></CardText>
                    <Button>Get Report</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Financial Report 17-18</CardTitle>
                    <CardText></CardText>
                    <Button>Get Report</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
