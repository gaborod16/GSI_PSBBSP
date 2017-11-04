import React, { Component } from 'react';
import {PageHeader, Form, Col, Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.redirectRegister = this.redirectRegister.bind(this);
    this.redirectmainpage = this.redirectmainpage.bind(this);
  }

  redirectRegister() {
    this.props.history.push('./register')
  }
    
     redirectmainpage() {
       
    this.props.history.push('./mainpage')
  }

  render() {
    return (
        
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
            <FormGroup>
              <Col smOffset={2} sm={2}>
                <Button type="submit" bsStyle='danger' bsSize='large' onClick={this.redirectmainpage}>
                  Login
                </Button>
              </Col>
              <Col sm={8}>
                <Button bsStyle='danger' bsSize='large' onClick={this.redirectRegister}>
                  Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Well>
    );
  }
}
/*
function test(x){
    x = document.getElementsByClassName("testing");
    var string_teste = x.value;
    //window.alert(string_teste)
    console.log(string_teste);
    //window.alert("sss");
}
*/

export default Login;
