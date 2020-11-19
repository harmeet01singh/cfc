import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import dummy from '../../../dummy.png';

export default function CampaignDetail() {
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
                <div className="row pl-5">
                    <h3>Campain Name</h3>
                </div>
                <hr></hr>
                <div className="row pl-5">
                    <h5>Region: XXX</h5>
                </div>
                <br></br>
                <div> 
                    <img className="w-75" src={dummy}></img>
                </div>
                <br></br>
                 <p>
                    Aliquip ex ipsum veniam consequat ipsum consectetur incididunt sunt ad minim adipisicing irure sit. Enim reprehenderit consequat proident exercitation ex pariatur duis minim. Laboris eiusmod in dolore esse labore reprehenderit. Aliqua pariatur et id culpa ut. Ullamco elit officia adipisicing laboris elit excepteur laborum proident. Sit sint laborum culpa magna ad veniam sint.
                    loremElit irure est commodo proident commodo. Adipisicing nostrud esse sit excepteur cupidatat nostrud et duis elit cupidatat labore qui minim. Minim excepteur elit aliqua quis cillum consectetur commodo ex tempor minim. Nisi fugiat ea cupidatat laborum aute velit do. Dolore nostrud incididunt voluptate in cupidatat tempor. Anim officia anim proident amet ipsum.
                 </p>
            </div>
        </div>
    )
}
