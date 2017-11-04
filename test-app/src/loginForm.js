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
        <Well className="center-block" bsSize='large'>
          <form>
          <FormGroup controlId="formBasicText">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                //value=''
         defaultValue="" //com deafultvalue fica alteravel
                placeholder="Enter Username"
              />
              <FormControl.Feedback />

              <ControlLabel>Password</ControlLabel>
              <FormControl 
                className="testing"
                type="text"
                //value=''
        defaultValue=""
                placeholder="Enter Password"
        
                
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        
          <Button bsStyle='danger' bsSize='large' onClick={this.redirectmainpage}  block>Login</Button>
          <Button bsStyle='danger' bsSize='large' onClick={this.redirectRegister} block>Register</Button>
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
