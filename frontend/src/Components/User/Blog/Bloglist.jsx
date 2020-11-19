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
                {/* {props.blogs[0].title} */}
                { props.blogs.map(blog => <Link to={'/blog/' + blog.id}> { blog.title }</Link> ) }
            </div>
        </div>
    )
}
