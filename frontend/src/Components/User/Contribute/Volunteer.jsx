import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Donate extends Component {
    
    handleSubmit = e => {
        e.preventDefault();
        var data = {};
        for(let i = 0;i < e.target.length; i++){
            if(e.target[i].name != ''){
                data[e.target[i].name] = e.target[i].value
            }
        }
        console.log(data);

        axios.post('http://localhost:5000/volunteers', data);
    }
    
    rednder(){
        return (
            <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Volunteer</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row pl-5">
                    <h3>Volunteer For Work</h3>
                </div>
                <hr></hr>
                <br></br>
                <div>
                    <Form>
                    <FormGroup className="row">
                        <Label for="Name" className="col-12 col-md-2">Name</Label>
                        <Input type="text" className="col-12 col-md-4" name="Name" id="Name" placeholder="" />
                    </FormGroup>
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="Email">Email</Label>
                        <Input className="col-12 col-md-4" type="email" name="email" id="Email" placeholder="" />
                    </FormGroup>
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="mobileno">Mobile No</Label>
                        <Input className="col-12 col-md-4" type="number" name="mobileno" id="mobileno" placeholder="" />
                    </FormGroup>
                    
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="Address">Address</Label>
                        <Input className="col-12 col-md-4" type="text" name="address" id="Address" placeholder="1235 Main St"/>
                    </FormGroup>
                    
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="Zip">Zip</Label>
                        <Input className="col-12 col-md-4" type="text" name="zip" id="Zip"/>
                    </FormGroup>
                    
                    <FormGroup className="row">
                            <Label className="col-12 col-md-2" for="volunteer">Select Volunteer Type</Label>
                            <Input className="col-12 col-md-4" type="select" name="volunteer" id="volunteer">
                            <option>None</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                            </Input>
                    </FormGroup>

                    <FormGroup className="row">
                            <Label className="col-12 col-md-2" for="eve">Select Event</Label>
                            <Input className="col-12 col-md-4" type="select" name="eve" id="eve">
                            <option>None</option>
                            <option>Event 1</option>
                            <option>Event 2</option>
                            <option>Event 3</option>
                            </Input>
                    </FormGroup>
                    <Col md={5}>
                    <Button left>Submit</Button>
                    </Col>
                    <br></br>
                    <br></br>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}