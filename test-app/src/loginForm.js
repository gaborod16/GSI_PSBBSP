import React, { Component } from 'react';
import {Button, Well, Col, Form, PageHeader, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';
import * as CRUD from './CRUD';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    }

    this.checkLoggedIn();
     
    this.redirectMainPage = this.redirectMainPage.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoggedIn() {
    if (CRUD.hasUser()) {
      console.log("The user is already logged in")
      this.redirectMainPage();
    }
  }
    
  redirectMainPage() {     
    this.props.history.push('./');
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
    console.log(e.target.value);
  }

  onChangePass(e) {
    this.setState({pass: e.target.value});
    console.log(e.target.value);
  }

  handleLogin(e) {
    e.preventDefault();
    if(CRUD.verifyLogin(this.state.email, this.state.pass)) {
      console.log("Fuck yes!");
      this.redirectMainPage();
    }
    else {
      console.log("Nope")
    }
  }

  render() {
    return (
        <TemplateSimple>
          <Well bsSize='large'>
            <Col smOffset={2}>
              <PageHeader><small>Login form</small></PageHeader>
            </Col>
            <Form horizontal onSubmit={this.handleLogin}>
              <FormGroup controlId="formEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  E-mail
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    defaultValue="" //com defultvalue fica alteravel
                    placeholder="Enter Username"
                    onChange={this.onChangeEmail}
                  />
                </Col>
                  <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl 
                    type="password"
                    defaultValue=""
                    placeholder="Enter Password"
                    onChange={this.onChangePass}
                  />
                </Col>
                <FormControl.Feedback />
              </FormGroup>

              <hr className="darkGrey"/>

              <FormGroup>
                <Col smOffset={8} sm={4}>
                  <Button type="submit" bsStyle='danger' bsSize='large' block>
                    Login
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </TemplateSimple>
    );
  }
}

export default Login;