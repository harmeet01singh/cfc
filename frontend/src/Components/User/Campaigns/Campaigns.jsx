import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Campaigns() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Campaigns</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Campaign Name</h3>
                        <hr></hr>
                        <div className="row">
                            <h4 class="col card-title">Campaign Motto</h4>
                            <h4 class="col card-text">Region, Since</h4>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <Link class="col btn btn-primary" to="/contribute/donate">Donate</Link>
                        </div>
                        <div className="row">
                        <Form class="col btn" method="get">
                                <Button>View Details</Button>
                        </Form>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Campaign Name</h3>
                        <hr></hr>
                        <div className="row">
                            <h4 class="col card-title">Campaign Motto</h4>
                            <h4 class="col card-text">Region, Since</h4>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <Link class="col btn btn-primary" to="/contribute/donate">Donate</Link>
                        </div>
                        <div className="row">
                        <Form class="col btn" method="get">
                                <Button>View Details</Button>
                        </Form>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Campaign Name</h3>
                        <hr></hr>
                        <div className="row">
                            <h4 class="col card-title">Campaign Motto</h4>
                            <h4 class="col card-text">Region, Since</h4>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <Link class="col btn btn-primary" to="/contribute/donate">Donate</Link>
                        </div>
                        <div className="row">
                        <Form class="col btn" method="get">
                                <Button>View Details</Button>
                        </Form>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}
