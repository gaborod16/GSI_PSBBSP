import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';

import * as CRUD from './CRUD';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      repass: ''
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeRePass = this.onChangeRePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectMainPage = this.redirectMainPage.bind(this);
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
    console.log(e.target.value);
  }

  onChangePass(e) {
    this.setState({pass: e.target.value});
    console.log(e.target.value);
  }

  onChangeRePass(e) {
    this.setState({repass: e.target.value});
    console.log(e.target.value);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.email && this.state.pass === this.state.repass) {
      CRUD.createAccount(this.state.email, this.state.pass);
      this.redirectMainPage();
    }
  }

  redirectMainPage() {     
    this.props.history.push('/');
  }

  render() {
    return (
      <TemplateSimple>
        <Well bsSize='large'>
          <Form horizontal onSubmit={this.handleSubmit}>
            <Col smOffset={3} sm={9}>
              <PageHeader><small>Register a new member</small></PageHeader>
            </Col>

            <FormGroup controlId="formEmail">
              <Col componentClass={ControlLabel} sm={3}>
                E-mail
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="email" 
                  placeholder="Enter Email" 
                  onChange={this.onChangeEmail}
                />
              </Col>
            </FormGroup>
            <FormControl.Feedback />

            <FormGroup controlId="formPass">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="password" 
                  placeholder="Enter Password"
                  onChange={this.onChangePass}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formRePass">
              <Col componentClass={ControlLabel} sm={3}>
                Re-type Password
              </Col>
              <Col sm={9}>
                <FormControl 
                  type="password" 
                  placeholder="Confirm your password"
                  onChange={this.onChangeRePass}
                />
              </Col>
            </FormGroup>

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
