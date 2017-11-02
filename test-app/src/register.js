import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

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
        <Well className="center-block" bsSize='large'>
          <form>
          <FormGroup controlId="formBasicText">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                value=''
                placeholder="Enter Username"
              />
              <FormControl.Feedback />

              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="text"
                value=''
                placeholder="Enter Password"
              />

              <ControlLabel>Repeat Password</ControlLabel>
              <FormControl
                type="text"
                value=''
                placeholder="Enter Password"
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
          <Button bsStyle='danger' bsSize='large' block>Register</Button>
        </Well>
    );
  }
}

export default Register;
