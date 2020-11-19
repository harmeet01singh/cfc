import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import dummy from '../../../dummy.png';

export default function BlogDetail(props) {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/blog">Blogs</Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.blog.title} </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row pl-5">
                    <h3>{props.blog.title}</h3>
                </div>
                <hr></hr>
                <div className="row pl-5">
                    <h5>{props.blog.date}</h5>
                </div>
                <br></br>
                <div> 
                    <img className="w-75" src={dummy}></img>
                </div>
                <br></br>
                 <p>
                 {props.blog.content}
                 </p>
            </div>
        </div>
    )
}
