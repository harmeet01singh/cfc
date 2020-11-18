import React from 'react';
import {BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Bloglist() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>blogs</BreadcrumbItem>
                </Breadcrumb>
            </div> 
        </div>
    )
}
