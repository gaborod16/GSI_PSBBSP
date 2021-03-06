import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import './template.css';

class Template extends Component {

  render() {
    return (
      <Row>
        <Col className="center-block">
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default Template;
