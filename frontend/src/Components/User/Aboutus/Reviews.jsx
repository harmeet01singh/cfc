import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, BreadcrumbItem, Breadcrumb,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Reviews() {
    return (
        <div>
            <div>
                <Breadcrumb >
                        <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Press Reviews</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <Row>
                    <Col sm="6">
                        <Card body>
                        <CardTitle tag="h5">Title 1</CardTitle>
                        <CardText>From Media Group A</CardText>
                        <Button>Read Article</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                        <CardTitle tag="h5">Title 2</CardTitle>
                        <CardText>From Media Group B</CardText>
                        <Button>Read Article</Button>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm="6">
                        <Card body>
                        <CardTitle tag="h5">Title 3</CardTitle>
                        <CardText>From Media Group C</CardText>
                        <Button>Read Article</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                        <CardTitle tag="h5">Title 4</CardTitle>
                        <CardText>From Media Group D</CardText>
                        <Button>Read Article</Button>
                        </Card>
                    </Col>
                </Row>
                <br></br>
            </div>
        </div>
    )
}
