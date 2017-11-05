import React, { Component } from 'react';
import {PageHeader, Form, Button, Well, FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';

import Template from './template'

class NewProject extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    this.redirectmainpage = this.redirectmainpage.bind(this);
  }
    
  redirectmainpage() {
    this.props.history.push('./mainpage')
  }
   

  render() {
    return (
      <Template>
        <Col md={10}>
          <Well bsSize='large'>
            <Form horizontal>
              <Col smOffset={3} sm={9}>
                <PageHeader><small>New BSP Project</small></PageHeader>
              </Col>
              <FormGroup controlId="prjectName">
                <Col componentClass={ControlLabel} sm={3}>Project Name</Col>
                <Col sm={9}>
                  <FormControl 
                    type="text" 
                    placeholder="Enter Project Name" 
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="...">
                <Col componentClass={ControlLabel} sm={3}>Something else</Col>
                <Col sm={9}>
                  <FormControl 
                    type="text" 
                    placeholder="..." 
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="...">
                <Col componentClass={ControlLabel} sm={3}>Something else</Col>
                <Col sm={9}>
                  <FormControl 
                    type="text" 
                    placeholder="..." 
                  />
                </Col>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <Col smOffset={3} sm={3}>
                  <Button type="submit" bsStyle='warning' bsSize='large' onClick={this.redirectmainpage}>Create</Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </Col>
      </Template>
    );
  }
}


export default NewProject;
