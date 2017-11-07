import React, { Component } from 'react';
import { PageHeader, Col, Grid, Row, Button} from 'react-bootstrap';
import './template.css';

class SideBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.logout = this.props.logout.bind(this);
  }

  render() {
    if (true) {
      return (
        <Col lg={2} md={3} sm={3} xs={3}>
          <div id="menu">
            <h4 id="menu-header">User Information</h4>
            <hr/>
            <p>John Doe</p>
            <p>Role: Admin</p>
            <p>Organization: IBM</p>
            <hr/>
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
  }

  logout() {
    this.props.history.push('./login')
  }

  render() {
    return (
      <Row>
        <SideBar logout={this.logout}/>
        <Col lg={10} md={9} sm={9} xs={9}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default Template;
