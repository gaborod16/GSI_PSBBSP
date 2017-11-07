import React, { Component } from 'react';
import {PageHeader, Row, Col, Table, Glyphicon} from 'react-bootstrap';

import Template from './template'
import CircleGroup from './circleGroup'

const plus = 'assets/plus.png';

class ListTableLine extends Component {
  constructor() {
    super();
    this.state={};
  }

  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.name}</td>
        <td>
          <Col sm={6}>
            <Glyphicon glyph="pencil" className="yellow" />
          </Col>
          <Col sm={6}>
            <Glyphicon glyph="remove" className="red" />
          </Col>
        </td>
      </tr>
    )
  }
}

class ListOrganizationUnits extends Component {

  constructor() {
    super();
    this.state = {};
    this.asd = this.asd.bind(this);
  }
    
  asd() {
    this.props.history.push('./')
  }
   
  render() {
    return (
      <Template history={this.props.history}>

        <Row>
          <h2 className="center-text"> Your BSP Projects</h2>
        </Row>

        <Row>
          <Col md={3} sm={4}>
            <CircleGroup name="Add New Organization Unit" func={this.redirectNewProject} image={plus}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Organization Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ListTableLine position="1" name="CIO"/>
                <ListTableLine position="2" name="CEO"/>
                <ListTableLine position="3" name="Head of Human Resources"/>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Template>
    );
  }
}


export default ListOrganizationUnits;
