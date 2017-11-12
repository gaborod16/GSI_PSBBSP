import React, { Component } from 'react';
import {PageHeader, Form, Button, Well, FormControl, FormGroup, ControlLabel, Col, MenuItem, DropdownButton, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

import Template from './template'

class NewProject extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      selectedTeamLeader: 'Select a team leader',
      selectedSecretary: 'Select a secretary'
    }
    this.listUsers = ['James Bond', 'Albert Einstein', 'Winston Churchill', 'Peter Pan', 'Mickey Mouse'];//this.props.listUsers;
    this.redirectMainPage = this.redirectMainPage.bind(this);
    this.updateDropdownSecreatary = this.updateDropdownSecreatary.bind(this);
    this.updateDropdownTeamLeader = this.updateDropdownTeamLeader.bind(this);
    this.getUsersForSecretary = this.getUsersForSecretary.bind(this);
    this.getUsersForTeamLeader = this.getUsersForTeamLeader.bind(this);
  }

  updateDropdownTeamLeader(index) {
    this.setState({selectedTeamLeader: this.listUsers[index]});
  }
   
  updateDropdownSecreatary(index) {
    this.setState({selectedSecretary: this.listUsers[index]});
  }

  getUsersForSecretary() {
    return this.listUsers.map((user, index) => 
      <MenuItem key={index} eventKey={index} onSelect={this.updateDropdownSecreatary}>{user}</MenuItem>
    );
  }

  getUsersForTeamLeader() {
    return this.listUsers.map((user, index) => 
      <MenuItem key={index} eventKey={index} onSelect={this.updateDropdownTeamLeader}>{user}</MenuItem>
    );
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
                    placeholder="Enter Project's Name" 
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="teamLeaderUser">
                <Col componentClass={ControlLabel} sm={3}>Team Leader</Col>
                <Col sm={9}>
                  <ButtonGroup vertical block>
                    <DropdownButton title={this.state.selectedTeamLeader} id="dropdown-size-medium" block>
                      {this.getUsersForTeamLeader()}
                    </DropdownButton>
                  </ButtonGroup>
                </Col>
              </FormGroup>

              <FormGroup controlId="secretaryUser">
                <Col componentClass={ControlLabel} sm={3}>Secretary</Col>
                <Col sm={9}>
                  <ButtonGroup vertical block>
                    <DropdownButton title={this.state.selectedSecretary} id="dropdown-size-medium">
                      {this.getUsersForSecretary()}
                    </DropdownButton>
                  </ButtonGroup>
                </Col>
              </FormGroup>

              <hr className="darkGrey"/>

              <FormGroup>
                <Col smOffset={8} sm={4}>
                  <Button type="submit" bsStyle='warning' bsSize='large' onClick={this.redirectMainPage} block>Create</Button>
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
