import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Donate extends Component {

    handleDonate = e => {
        e.preventDefault();
        var data = {};
        for(let i = 0;i < e.target.length; i++){
            if(e.target[i].name != ''){
                data[e.target[i].name] = e.target[i].value
            }
        }
        console.log(data);

        axios.post('http://localhost:5000/donations', data);
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <Col md={5}>
                <h3>Donate and Support us</h3>
                </Col>
                <br></br>
                <Form method="post" onSubmit={this.handleDonate}>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="" />
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
                            <Label for="amount">Amount</Label>
                            <Input type="number" name="amount" id="amount" placeholder="" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="pan">PAN</Label>
                            <Input type="number" name="pan" id="pan" placeholder="" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={5}>
                        <FormGroup>
                            <Label for="contact">Contact</Label>
                            <Input type="tel" name="contact" id="contact" placeholder="" />
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
                            <Label for="method">Select Payment Gateway</Label>
                            <Input type="select" name="method" id="method">
                            <option>None</option>
                            <option>Paytm</option>
                            <option>G-pay</option>
                            <option>Paypal</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Col md={5}>
                        <Button left>Donate</Button>
                    </Col>
                    <br></br>
                    <br></br>
                </Form>
            </div>
        )
    }
}

