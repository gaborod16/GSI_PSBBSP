import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Accordion, Panel, FormControl, ListGroup, MenuItem, ListGroupItem, FormGroup, ButtonGroup, DropdownButton, Glyphicon, ControlLabel, Row, ProgressBar} from 'react-bootstrap';

import Template from './template';
import YouSeeing from './youSeeing';
import CircleGroup from './circleGroup';
import ListTable from './listTable';
import ProblemTable from './problemTable';

const plus = 'assets/plus.png';

const SpecificScore = ({ scoreName, points, plusFunc, minusFunc }) => (
  <Row>
    <Col componentClass={ControlLabel} sm={4} md={3}>
      {scoreName}:
    </Col>
    <Col sm={6} md={7}>
      <ProgressBar label={points + '/10'} now={points} min={0} max={10}/>
    </Col>
    <Col sm={2} md={2}>
      <ButtonGroup>
        <Button bsSize="xsmall" onClick={plusFunc}>
          <Glyphicon glyph="plus" className="darkGrey"/>
        </Button>
        <Button bsSize="xsmall" onClick={plusFunc}>
          <Glyphicon glyph="minus" className="darkGrey"/>
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
);

const SubsystemRelations = ({title, plusFunc, allSubsystems, selectedSubsystems}) => (
  <Col sm={6}>
    <Panel header={title}>
      <Row>
        <Col sm={9} md={9}>
          <ButtonGroup vertical block>
            <DropdownButton title={'Select a subsystem'} id="dropdown-size-medium" block>
              <MenuItem key={1} eventKey={1}>Add dynamically</MenuItem>
              <MenuItem key={2} eventKey={2}>Like in new</MenuItem>
              <MenuItem key={3} eventKey={3}>Project page</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </Col>
        <Col sm={2} md={2}>
          <Button bsStyle="success" onClick={plusFunc}>
            <Glyphicon glyph="plus" className="white"/>
          </Button>
        </Col>
      </Row>

      <hr/>

      <ListSubsystemItem name="Monitor"/>      
    </Panel>
  </Col>
);

const ListSubsystemItem = ({name, minusFunc}) => (
  <Row>
    <Col sm={9} md={9}>
      <h4>{name}</h4>
    </Col>
    <Col sm={2} md={2}>
      <Button bsStyle="danger" onClick={minusFunc}>
        <Glyphicon glyph="minus" className="white"/>
      </Button>
    </Col>
  </Row>
);

class Subsystem extends Component {

  constructor() {
    super();
    this.state = {
    }
    this.subsName = 'Cluster de recursos';
    this.list = [{index: 1, name: 'P1 <-> DC2'}, {index: 2, name: 'P6 <-> DC4'}, {index: 3, name: 'P3 <-> DC1'}];
    this.problemList = [
              {index: 1, problem: 'Not enough control on HR', consequence: 'The work of employees is unbalanced', solution: 'Hire HR specialist'}, 
              {index: 2, problem: 'Problem 2', consequence: 'Catastrophic consequence', solution: 'Pray everyday'}, 
    ];
  }

  render() {
    return (
      <Template history={this.props.history}>
        <YouSeeing title={"Subsystem: " + this.subsName}/>
        <Row>

          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Add Process-Data Class Relation" func={this.openModalAddMember} image={plus}/>
            <CircleGroup name="Add Detected Problem" func={this.redirectNewProcess} image={plus}/>
          </Col>

          <Col md={9} sm={8}>
            <Row>
              <Col componentClass={ControlLabel} sm={2} md={2}>
                Description:
              </Col>
              <Col sm={9} md={6}>
                <FormControl
                  componentClass="textarea"
                  defaultValue=""
                  placeholder="Enter a description for this subsystem"
                />
              </Col>
            </Row>

            <br/>

            <Row>
              <Col sm={11} md={8}>
                <ListTable 
                  entityName="Process-DataClass Relation" 
                  data={this.list}
                  editFunc={this.openModalEdit}
                  disableEdit={true}
                  deleteFunc={this.deletePDPair}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col sm={11} md={9}>
            <ProblemTable 
              data={this.problemList}
              editFunc={this.openModalEditProblem}
              deleteFunc={this.deleteProblem}
            />
          </Col>
        </Row>
      </Template>
    );
  }
}

export default Subsystem;
