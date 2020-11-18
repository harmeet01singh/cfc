import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function Contact() {
    return (
        <div className="container">
        <br></br>
        <Col md={5}>
            <h3>Give Feedback</h3>
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
                        <Label for="info">Give your Feedback</Label>
                        <Input type="textbox" name="info" id="info"/>
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
