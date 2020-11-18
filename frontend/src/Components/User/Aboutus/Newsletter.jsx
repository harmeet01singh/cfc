import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Breadcrumb, BreadcrumbItem,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Newsletter() {
    return (
        <div className="container">
            <br></br>
            <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Newsletters</BreadcrumbItem>
            </Breadcrumb>
            </div>
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

//import React from 'react';
//import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

//const Example = (props) => {
//  return (
//    <div>
//      <Breadcrumb>
//        <BreadcrumbItem active>Home</BreadcrumbItem>
//      </Breadcrumb>
//      <Breadcrumb>
//        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
//        <BreadcrumbItem active>Library</BreadcrumbItem>
//      </Breadcrumb>
//      <Breadcrumb>
//        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
//        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
//        <BreadcrumbItem active>Data</BreadcrumbItem>
//      </Breadcrumb>
//    </div>
//  );
//};
