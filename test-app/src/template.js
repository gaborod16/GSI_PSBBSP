import React, { Component } from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import './template.css';


class SideBar extends Component {
  render() {
    if (true) {
      return (
        <Col lg={2} md={3} sm={3} xs={3}>
          <div id="menu">
            <h4 id="menu-header">User Information</h4>
            <hr/>
          </div>
        </Col>
      );
    }
  }
}

class Template extends Component {

  render() {
    return (
      <Row>
        <SideBar/>
        <Col lg={10} md={9} sm={9} xs={9}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default Template;
