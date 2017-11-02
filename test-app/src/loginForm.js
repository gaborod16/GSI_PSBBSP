import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.redirectRegister = this.redirectRegister.bind(this);
  }

  redirectRegister() {
    this.props.history.push('./register')
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
              <FormControl.Feedback />
            </FormGroup>
          </form>
          <Button bsStyle='danger' bsSize='large' block>Login</Button>
          <Button bsStyle='danger' bsSize='large' onClick={this.redirectRegister} block>Register</Button>
        </Well>
    );
  }
}

export default Login;
