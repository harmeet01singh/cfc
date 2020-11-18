import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Upcoming() {
    return (
        <div className="container">
            <br></br>
            <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Upcoming Events</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <Row>
                <Col sm="12">
                    <Card body>
                    {/*<Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>*/}
                    <CardTitle tag="h3">Event Name</CardTitle>
                    <CardTitle tag="h5">Location</CardTitle>
                    <CardTitle tag="h5">Incharge : Mr/Mrs. ABC </CardTitle>
                    <CardTitle tag="h5">Contact No. : XXXXXXXXXX</CardTitle>
                    <CardTitle tag="h5">Email: XXXXXXXX@mail.com</CardTitle>
                    <CardTitle tag="h6">Aim</CardTitle>
                    {/*</Col>
                    </Row>*/}
                    <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                    <CardTitle tag="h6">Need for Event</CardTitle>
                    <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                    <Form method="get">
                        <Button>Donate For this Event</Button>
                    </Form>
                    <br></br>
                    <Form method="get">
                        <Button>View Details</Button>
                    </Form>
                    </Card>
                </Col>
            </Row> 
        </div>
    )
}
