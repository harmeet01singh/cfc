import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Donate extends React.Component {

    handleSubmit = e => {
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
                    </Form>
                    {/*import React, { Component } from 'react';
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
                                    </Form>*/}
                </div>
            </div>
        </div>
    )
}
}
//  {/*</div>
//        )
//    }
//}*/