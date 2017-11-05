import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';

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
      <TemplateSimple>
        <Well bsSize='large'>
          <Form horizontal>
            <Col smOffset={3} sm={9}>
              <PageHeader><small>Register form</small></PageHeader>
            </Col>
            <FormGroup controlId="formEmail">
              <Col componentClass={ControlLabel} sm={3}>
                E-mail
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="email" 
                  placeholder="Enter Email" 
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="password" 
                  placeholder="Enter Password" 
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formRePassword">
              <Col componentClass={ControlLabel} sm={3}>
                Repeat Password
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="password" 
                  placeholder="Re-type Password" 
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup>
              <Col smOffset={3} sm={3}>
                <Button type="submit" bsStyle='danger' bsSize='large'>
                  Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Well>
      </TemplateSimple>
    );
  }
}

export default Register;
