import React, { Component } from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import './template.css';

import * as CRUD from './CRUD';

class SideBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.logout = this.props.logout.bind(this);
    this.goBack = this.props.goBack.bind(this);
  }

  render() {
    if (true) {
      return (
        <Col lg={2} md={3} sm={3} xs={3}>
          <div id="menu">
            <h4 id="menu-header">User Information</h4>
            <hr/>
            <p>Organization: IBM</p>
            <p>{this.props.email}</p>
            <p>Role: {this.props.role}</p>
            <br/>
            <hr/>
            <Button bsStyle='warning' bsSize='small' onClick={this.goBack} block>Go back</Button>
            <Button bsStyle='danger' bsSize='small' onClick={this.logout} block>Log out</Button>
          </div>
        </Col>
      );
    }
  }
}

class Template extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  logout() {
    CRUD.logout();
    this.props.history.push('/login');
  }

  goBack() {
    this.props.history.push('../');
  }

  render() {
    return (
      <Row>
        <SideBar logout={this.logout} goBack={this.goBack} email={this.props.email} role={this.props.role}/>
        <Col lg={10} md={9} sm={9} xs={9}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default Template;
