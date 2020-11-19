import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Col, Card, CardTitle, Button, CardText, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Bloglist(props) {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>blogs</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Blog Heading</h3>
                        <p class="card-text">Date, Location</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Blog Heading</h3>
                        <p class="card-text">Date, Location</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Blog Heading</h3>
                        <p class="card-text">Date, Location</p>
                        <Form class="btn btn-primary" method="get">
                            <Button>View Details</Button>
                        </Form>
                    </div>
                </div>
                <br></br>
                </div>
            {/*{ props.blogs.map(blog => <div> { blog.title }</div> ) }*/}
        </div>
    )
}
