import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      rePassword: ''
    }
  }

  render() {
    return (
      <Well bsSize='large'>
        <Form horizontal>
          <Col smOffset={2} sm={10}>
            <PageHeader><small>Register form</small></PageHeader>
          </Col>
          <FormGroup controlId="formEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl 
                type="email" 
                placeholder="Enter Email" 
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl 
                type="password" 
                placeholder="Enter Password" 
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formRePassword">
            <Col componentClass={ControlLabel} sm={2}>
              Repeat Password
            </Col>
            <Col sm={10}>
              <FormControl 
                type="password" 
                placeholder="Re-type Password" 
              />
            </Col>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle='danger' bsSize='large'>
                Register
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>
    );
  }
}

export default Register;
