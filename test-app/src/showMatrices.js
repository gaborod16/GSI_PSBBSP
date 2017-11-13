import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row, Table, MenuItem, ButtonGroup, DropdownButton} from 'react-bootstrap';

import Template from './template';
import YouSeeing from './youSeeing'

class Matrix extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table bordered responsive>
        <thead>
          <tr>
            <th className="tableHeader">Data Class/Process</th>
            <th className="tableHeader">Process 1</th>
            <th className="tableHeader">Process 2</th>
            <th className="tableHeader">Process 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableHeader">Class 1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="tableHeader">Class 2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="tableHeader">Class 3</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class ShowMatrices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  changeColor(){
    
  }

  render() {
    return (
      <Template history={this.props.history}>
        <YouSeeing title={"The BSP Matrices"}/>

        <br/>

        <Row>
          <Col componentClass={ControlLabel} sm={2} md={2}>
            Select a matrix:
          </Col>
          <Col sm={9} md={6}>
            <ButtonGroup vertical block>
              <DropdownButton title={'Select a matrix'} id="dropdown-size-medium" block>
                <MenuItem key={1} eventKey={1}>Support System VS Organization Unit</MenuItem>
                <MenuItem key={2} eventKey={2}>Support System VS Data Class</MenuItem>
                <MenuItem key={3} eventKey={3}>Support System VS Process</MenuItem>
                <MenuItem key={4} eventKey={4}>Data Class VS Process</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col sm={11} md={8}>
            <Matrix/>
          </Col>
        </Row>
          
      </Template>
    );
  }
}

export default ShowMatrices;