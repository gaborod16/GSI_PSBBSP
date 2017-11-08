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
              <PageHeader><small>Register a new member</small></PageHeader>
            </Col>
            <FormGroup controlId="formUsername">
              <Col componentClass={ControlLabel} sm={3}>
                Username
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="email" 
                  placeholder="Enter Username" 
                />
              </Col>
            </FormGroup>

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
            <FormControl.Feedback />

            <hr className="darkGrey"/>

            <FormGroup>
              <Col smOffset={8} sm={4}>
                <Button type="submit" bsStyle='danger' bsSize='large' block>
                  Send invitation
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
