import React, { Component } from 'react';
import {Button, Glyphicon, ButtonGroup, Col, Row} from 'react-bootstrap';

class EntityButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col sm={8} md={8}>
          <Button bsStyle='warning' bsSize="large" onClick={this.props.onClickFunc} block>
            {this.props.title}
          </Button>
        </Col>
        <Col sm={4} md={4}>
          <ButtonGroup>
            <Button bsStyle="primary" bsSize="large" onClick={this.props.onClickEditFunc}>
              <Glyphicon glyph="pencil" className="white"/>
            </Button>
            <Button bsStyle='danger' bsSize="large" onClick={this.props.onClickRemoveFunc}>
              <Glyphicon glyph="remove" className="white"/>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}

export default EntityButton;