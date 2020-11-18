import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function BlogDetail() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/blog">Blogs</Link></BreadcrumbItem>
                    <BreadcrumbItem active>blogID</BreadcrumbItem>
                </Breadcrumb>
            </div> 
            <div className="container">
                 <img src="#"></img>
            </div>
        </div>
    )
}
