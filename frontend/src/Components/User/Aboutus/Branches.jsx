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
                    {
                        props.branches.map(branch => {
                            <Col sm="12">
                                <Card body>
                                <CardTitle tag="h3"> {branch.name} </CardTitle>
                                <CardTitle tag="h5"> {branch.address} </CardTitle>
                                <CardTitle tag="h5"> {branch.manager} </CardTitle>
                                <CardTitle tag="h5"> {branch.contact} </CardTitle>
                                <CardTitle tag="h5"> {branch.mail} </CardTitle>
                                <CardTitle tag="h6"> {branch.info} </CardTitle>
                                <CardText>lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. lorem ipsum Sit est nisi cillum do est pariatur minim minim fugiat. Eiusmod ut culpa aute officia ad est do proident excepteur eu commodo nulla duis. Lorem aliquip eiusmod quis Lorem pariatur. Duis occaecat esse ex aliqua. </CardText>
                                <Form method="get">
                                    <Link to='/campaigns'>See Campaigns</Link>
                                </Form>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            <br></br>
        </div>
            { props.branches.map(branch => <h1>{branch.manager}, {branch.name} </h1>)}
        </div>
    )
}
