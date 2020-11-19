import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
            <div className="container">
            <br></br>
            <Col md={5}>
                <h3>Volunteer for Work</h3>
            </Col>
                <Form>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input type="text" name="Name" id="Name" placeholder="" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="mobileno">Mobile No</Label>
                            <Input type="number" name="mobileno" id="mobileno" placeholder="" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="Address">Address</Label>
                                <Input type="text" name="address" id="Address" placeholder="1235 Main St"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="Zip">Zip</Label>
                            <Input type="text" name="zip" id="Zip"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="volunteer">Select Volunteer type</Label>
                            <Input type="select" name="volunteer" id="volunteer">
                            <option>None</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>type 3</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="eve">Select Event</Label>
                            <Input type="select" name="eve" id="eve">
                            <option>None</option>
                            <option>Event 1</option>
                            <option>Event 2</option>
                            <option>Event 3</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Col md={5}>
                    <Button left>Submit</Button>
                    </Col>
                    <br></br>
                    <br></br>
                </Form>
            </div>
        )
    }
}
