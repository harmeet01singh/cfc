import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Branches(props) {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Branches</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <Row>
                    <Col sm="12">
                        <Card body>
                        {/*<Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>*/}
                        <CardTitle tag="h3">Branch Name</CardTitle>
                        <CardTitle tag="h5">Address</CardTitle>
                        <CardTitle tag="h5">Branch Head: Mr/Mrs. ABC </CardTitle>
                        <CardTitle tag="h5">Contact No. : XXXXXXXXXX</CardTitle>
                        <CardTitle tag="h5">Email: XXXXXXXX@mail.com</CardTitle>
                        <CardTitle tag="h6">About this branch</CardTitle>
                        {/*</Col>
                        </Row>*/}
                        <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                        <Form method="get">
                            <Button>See the Campaigns</Button>
                        </Form>
                        </Card>
                    </Col>
                </Row>
            <br></br>
        </div>
            { props.branches.map(branch => <h1>{branch.manager}, {branch.name} </h1>)}
        </div>
    )
}
