import React, { Component } from 'react';
import {Button, Well, Col, Form, PageHeader, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
     
    this.redirectMainPage = this.redirectMainPage.bind(this);
  }
    
  redirectMainPage() {     
    this.props.history.push('./')
  }

  render() {
    return (
        <TemplateSimple>
          <Well bsSize='large'>
            <Col smOffset={2}>
              <PageHeader><small>Login form</small></PageHeader>
            </Col>
            <Form horizontal>
              <FormGroup controlId="formEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  E-mail
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    defaultValue="" //com deafultvalue fica alteravel
                    placeholder="Enter Username"
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
                    type="text"
                    defaultValue=""
                    placeholder="Enter Password"
                  />
                </Col>
                <FormControl.Feedback />
              </FormGroup>

              <hr className="darkGrey"/>

              <FormGroup>
                <Col smOffset={8} sm={4}>
                  <Button type="submit" bsStyle='danger' bsSize='large' onClick={this.redirectMainPage} block>
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