import React, { Component } from 'react';
import {Button, Well, PageHeader, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Template extends Component {

  getInitialState() {
    return {
      value: '',
      pass: ''
    };
  }

  handleTextInput(e) {
    this.setState({ value: e.target.value });
  }

  handleInputPass(e) {
    this.setState({ pass: e.target.value });
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
                onChange={this.handleTextInput}
              />
              <FormControl.Feedback />

              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="text"
                value=''
                placeholder="Enter Password"
                onChange={this.handleInputPass}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
          <Button bsStyle='danger' bsSize='large' block>Login</Button>
          <Button bsStyle='danger' bsSize='large' block>Register</Button>
        </Well>
    );
  }
}

export default Template;
