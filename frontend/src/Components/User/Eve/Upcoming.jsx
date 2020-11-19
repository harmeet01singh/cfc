import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Upcoming() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Upcoming Events</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div class="card">
                    <div class="card-header">
                        Event 1
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event Name</h5>
                        <p class="card-text">Location</p>
                        <p className="card-text">Phone Number: XXXXXXXXXX</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-header">
                        Event 1
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event Name</h5>
                        <p class="card-text">Location</p>
                        <p className="card-text">Phone Number: XXXXXXXXXX</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-header">
                        Event 1
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event Name</h5>
                        <p class="card-text">Location</p>
                        <p className="card-text">Phone Number: XXXXXXXXXX</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}
