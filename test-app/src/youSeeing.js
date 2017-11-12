import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class YouSeeing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col className="youSeeing">
          <p className="youSeeing"> You're seeing...  </p>
          <h2 className="youSeeing"> {this.props.title} </h2>
        </Col>
      </Row>
    )
  }
}

export default YouSeeing;