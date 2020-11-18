import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Donate() {
    return (
        <div>
            <div >
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Donate</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row pl-5">
                    <h3>Donate and Support us</h3>
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
                        <Label className="col-12 col-md-2" for="amount">Amount</Label>
                        <Input className="col-12 col-md-4" type="number" name="amount" id="amount" placeholder="" />
                    </FormGroup>
                    
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="pan">PAN</Label>
                        <Input className="col-12 col-md-4" type="number" name="pan" id="pan" placeholder="" />
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
                        <Label className="col-12 col-md-2" for="gateway">Select Payment Gateway</Label>
                        <Input className="col-12 col-md-4" type="select" name="gateway" id="gateway">
                        <option>None</option>
                        <option>Paytm</option>
                        <option>G-pay</option>
                        <option>Paypal</option>
                        </Input>
                    </FormGroup>
                        
                    <Col md={5}>
                    <Button left>Donate</Button>
                    </Col>
                    <br></br>
                    <br></br>
                </Form>
                </div>
            </div>
        </div>
    )
}
