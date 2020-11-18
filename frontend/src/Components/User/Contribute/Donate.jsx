import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Donate() {
    return (
        <div className="container">
            <br></br>
            <Col md={5}>
            <h3>Donate and Support us</h3>
            </Col>
            <br></br>
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
                        <Label for="gateway">Select Payment Gateway</Label>
                        <Input type="select" name="gateway" id="gateway">
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
