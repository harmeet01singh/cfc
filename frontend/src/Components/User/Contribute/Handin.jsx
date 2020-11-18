import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Handin() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Hand In Donations</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row pl-5">
                    <h3>Hand In Donations</h3>
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
                            <Label className="col-12 col-md-2" for="service">Select Service Type</Label>
                            <Input className="col-12 col-md-4" type="select" name="service" id="service">
                            <option>None</option>
                            <option>Pick up</option>
                            <option>Drop</option>
                            </Input>
                    </FormGroup>
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="things">Select type of Things you are donating  </Label>
                        <Input className="col-12 col-md-4" type="select" name="things" id="things">
                        <option>None</option>
                        <option>Clothes</option>
                        <option>Toys</option>
                        <option>Books</option>
                        <option>other</option>
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
