import React, { Component } from 'react';
import {PageHeader, Form, Button, Well, FormControl, FormGroup, ControlLabel, Col, MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';

import Template from './template'

class NewProject extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    this.redirectMainPage = this.redirectMainPage.bind(this);
  }
    
  redirectMainPage() {
    this.props.history.push('./')
  }
   

  render() {
    return (
      <Template history={this.props.history}>
        <Col md={10}>
          <Well bsSize='large'>
            <Form horizontal>
              <Col smOffset={3} sm={9}>
                <PageHeader><small>New BSP Project</small></PageHeader>
              </Col>
              <FormGroup controlId="projectName">
                <Col componentClass={ControlLabel} sm={3}>Project Name</Col>
                <Col sm={9}>
                  <FormControl 
                    type="text" 
                    placeholder="Enter Project Name" 
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="teamLeaderUser">
                <Col componentClass={ControlLabel} sm={3}>Team Leader</Col>
                <Col sm={9}>
                  <ButtonToolbar>
                    <DropdownButton title="Select a team leader" id="dropdown-size-medium">
                      <MenuItem eventKey="1">James Bond</MenuItem>
                      <MenuItem eventKey="2">Albert Einstein</MenuItem>
                      <MenuItem eventKey="3">Peter Pan</MenuItem>
                      <MenuItem eventKey="4">Mickey Mouse</MenuItem>
                    </DropdownButton>
                  </ButtonToolbar>
                </Col>
              </FormGroup>

              <FormGroup controlId="teamLeaderUser">
                <Col componentClass={ControlLabel} sm={3}>Secretary</Col>
                <Col sm={9}>
                  <ButtonToolbar>
                    <DropdownButton title="Select a secretary" id="dropdown-size-medium">
                      <MenuItem eventKey="1">James Bond</MenuItem>
                      <MenuItem eventKey="2">Albert Einstein</MenuItem>
                      <MenuItem eventKey="3">Peter Pan</MenuItem>
                      <MenuItem eventKey="4">Mickey Mouse</MenuItem>
                    </DropdownButton>
                  </ButtonToolbar>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={3} sm={3}>
                  <Button type="submit" bsStyle='warning' bsSize='large' onClick={this.redirectMainPage}>Create</Button>
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
