import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
import dummy from '../../../dummy.png';

export default function EveDetail() {
    return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/events/upcoming">Events</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Upcoming Events</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row">
                    <Card body>
                    <CardImg top width="100%" src={dummy} alt="Card image cap" />
                    <hr></hr>
                    <CardTitle className="col-md-offset-1" tag="h3">Event Name</CardTitle>
                    <hr></hr>
                    <CardTitle className="col" tag="h5">Location: XXX</CardTitle>
                    <CardTitle className="col" tag="h5">Incharge : Mr/Mrs. ABC </CardTitle>
                    <CardTitle className="col" tag="h5">Contact No. : XXXXXXXXXX</CardTitle>
                    <CardTitle className="col" tag="h5">Email: XXXXXXXX@mail.com</CardTitle>
                    <hr></hr>
                    <CardTitle className="col" tag="h6">Aim</CardTitle>
                    <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                    <hr></hr>
                    <CardTitle tag="h6">Need for Event</CardTitle>
                    <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                    <hr></hr>
                    <Form method="get">
                        <Button>Donate For this Event</Button>
                    </Form>
                    <br></br>
                    <Form method="get">
                        <Button>View Details</Button>
                    </Form>
                    </Card>
                </div>
            </div>
            <br></br>
        </div>
    )
}
