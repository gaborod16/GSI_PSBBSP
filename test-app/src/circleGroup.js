import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col, Image} from 'react-bootstrap';

class CircleGroup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row className="circle-create-row">
        <Col sm={4} md={2}>
          <Image src={this.props.image} circle className="circle-create-button" onClick={this.props.func}/>
        </Col>
        <Col sm={6} className="circle-create-text">
          <h5>{this.props.name}</h5>
        </Col>
      </Row>
    )
  }
}

export default CircleGroup;